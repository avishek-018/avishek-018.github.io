---
layout: default
---

{% assign education = site.data.education %}

# {{ education.headings.main_title | default: "Education" }}

{% for degree in education.degrees %}
### {{ degree.institution }}{% if degree.location and degree.location != "" %} {{ degree.location }}{% endif %}
{{ degree.program }}<br>
{{ degree.start }} - {{ degree.end }}<br>
{% if degree.details and degree.details.size > 0 %}
{% for detail in degree.details %}
{{ detail }}<br>
{% endfor %}
{% endif %}
<br>
{% endfor %}

---
# {{ education.headings.certifications_title | default: "International Certification" }}

{% for cert in education.certifications %}
### {{ cert.title }}
<b>{{ cert.score_or_status }}</b>{% if cert.url and cert.url != "" %} [(Certificate)]({{ cert.url }}){% endif %}<br>
{% if cert.meta and cert.meta != "" %}
{{ cert.meta }}<br>
{% endif %}
<br><br>
{% endfor %}

---
# {{ education.headings.courses_title | default: "Online Course/Certification" }}
{% for course in education.online_courses %}
{{ forloop.index }}. {{ course.title }} [<i class="fa-solid fa-link"></i>]({{ course.url }})

{% endfor %}

<br><br><br><br><br><br>
