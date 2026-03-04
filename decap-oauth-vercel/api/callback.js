function normalizeOrigin(value) {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch (_) {
    return null;
  }
}

function readCookie(req, name) {
  const raw = req.headers.cookie;
  if (!raw) return null;
  const entries = raw.split(";").map((part) => part.trim());
  for (const entry of entries) {
    const idx = entry.indexOf("=");
    if (idx === -1) continue;
    const key = entry.slice(0, idx);
    if (key !== name) continue;
    try {
      return decodeURIComponent(entry.slice(idx + 1));
    } catch (_) {
      return entry.slice(idx + 1);
    }
  }
  return null;
}

function renderPopupBridge(message, origin) {
  const strictOrigin = normalizeOrigin(origin);
  const safeMessage = JSON.stringify(message);
  const safeStrict = JSON.stringify(strictOrigin || "*");
  return `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Authorizing...</title></head>
<body>
<script>
(function () {
  var message = ${safeMessage};
  var strictOrigin = ${safeStrict};
  function send() {
    if (!window.opener || window.opener.closed) return false;
    try { window.opener.postMessage(message, strictOrigin); } catch (_) {}
    try { window.opener.postMessage(message, "*"); } catch (_) {}
    return true;
  }
  var sent = false;
  var attempts = 0;
  var timer = setInterval(function () {
    attempts += 1;
    sent = send() || sent;
    if (attempts >= 40) {
      clearInterval(timer);
      window.close();
    }
  }, 200);

  if (!send()) {
    document.body.innerText = "Authorizing... If this window does not close, return to the CMS tab.";
  }
})();
</script>
</body>
</html>`;
}

module.exports = async (req, res) => {
  const { code, state, origin: originQuery } = req.query;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const origin = originQuery || readCookie(req, "decap_origin");

  if (!code) {
    res.status(400).send("Missing OAuth code.");
    return;
  }

  if (!clientId || !clientSecret) {
    res.status(500).send("Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET.");
    return;
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "decap-oauth-vercel",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        state,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || tokenData.error || !tokenData.access_token) {
      const errPayload = {
        error: tokenData.error || "token_exchange_failed",
        error_description: tokenData.error_description || "Could not get access token.",
      };
      const message = `authorization:github:error:${JSON.stringify(errPayload)}`;
      res.status(200).setHeader("Content-Type", "text/html").send(renderPopupBridge(message, origin));
      return;
    }

    // Decap expects provider in success payload for GitHub auth state hydration.
    const message = `authorization:github:success:${JSON.stringify({
      token: tokenData.access_token,
      provider: "github",
    })}`;
    res.status(200).setHeader("Content-Type", "text/html").send(renderPopupBridge(message, origin));
  } catch (error) {
    const errPayload = {
      error: "unexpected_error",
      error_description: error.message || "Unknown error",
    };
    const message = `authorization:github:error:${JSON.stringify(errPayload)}`;
    res.status(200).setHeader("Content-Type", "text/html").send(renderPopupBridge(message, origin));
  }
};
