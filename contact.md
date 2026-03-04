---
layout: default
is_contact: true
---

{% assign contact = site.data.contact %}

## Get in Touch

{{ contact.intro_markdown | markdownify }}

- **Email Contacts:**
{% for email in contact.emails %}
- **{{ email.label }}:** [{{ email.address }}](mailto:{{ email.address }})
{% endfor %}

---

## Online Profiles

{% for profile in contact.profiles %}
- **{{ profile.label }}:** [{{ profile.url }}]({{ profile.url }})
{% endfor %}

{% if contact.show_map_script %}
<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=150&t=tt&d=MeVH9Qx00KxvJNXkBmzujoN28cclz-9WuZm0HnFUH_0'></script>
{% endif %}
