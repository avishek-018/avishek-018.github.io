const crypto = require("crypto");

function normalizeOrigin(value) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch (_) {
    return null;
  }
}

module.exports = async (req, res) => {
  const {
    provider = "github",
    scope = "repo",
    login,
    state,
    origin: originQuery,
  } = req.query;

  if (provider !== "github") {
    res.status(400).send("Only provider=github is supported.");
    return;
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const publicUrl = process.env.PUBLIC_URL;

  if (!clientId || !publicUrl) {
    res.status(500).send("Missing GITHUB_CLIENT_ID or PUBLIC_URL.");
    return;
  }

  const csrf = state || crypto.randomBytes(16).toString("hex");
  const originFromReferrer = req.headers.referer ? normalizeOrigin(req.headers.referer) : null;
  const origin = normalizeOrigin(originQuery) || originFromReferrer;
  const callbackUrl = `${publicUrl.replace(/\/$/, "")}/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: callbackUrl,
    scope,
    state: csrf,
  });

  if (login) {
    params.set("login", login);
  }

  if (origin) {
    res.setHeader(
      "Set-Cookie",
      `decap_origin=${encodeURIComponent(origin)}; Path=/; Max-Age=600; HttpOnly; SameSite=Lax; Secure`
    );
  }

  const githubAuthorizeUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
  const safeOrigin = JSON.stringify(origin || "");
  const safeProvider = JSON.stringify(provider);
  const safeAuthorizeUrl = JSON.stringify(githubAuthorizeUrl);

  // Decap popup handshake: notify opener first, wait for ack, then continue OAuth redirect.
  // Without this, Decap may never attach the success/error auth listener.
  const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Authorizing...</title></head>
<body>
<script>
(function () {
  var cmsOrigin = ${safeOrigin};
  var provider = ${safeProvider};
  var authorizeUrl = ${safeAuthorizeUrl};
  var handshook = false;

  function go() {
    window.location.assign(authorizeUrl);
  }

  function onMessage(event) {
    if (!cmsOrigin || event.origin !== cmsOrigin) return;
    if (event.data === "authorizing:" + provider) {
      handshook = true;
      window.removeEventListener("message", onMessage, false);
      go();
    }
  }

  if (window.opener && cmsOrigin) {
    window.addEventListener("message", onMessage, false);
    try { window.opener.postMessage("authorizing:" + provider, cmsOrigin); } catch (_) {}
    setTimeout(function () { if (!handshook) go(); }, 1500);
  } else {
    go();
  }
})();
</script>
</body>
</html>`;

  res.status(200).setHeader("Content-Type", "text/html").send(html);
};
