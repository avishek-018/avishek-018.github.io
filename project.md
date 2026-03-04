---
layout: default
---

{% assign projects = site.data.projects.projects | sort: "order" %}

# <span class='red_h1'>Projects</span>

{% for project in projects %}
## {{ project.title }}
---
{% if project.tech_stack and project.tech_stack.size > 0 %}
* Tech Stack: {{ project.tech_stack | join: ", " }}
{% endif %}
{% if project.links and project.links.size > 0 %}
{% for link in project.links %}
* {{ link.label }}: [Link]({{ link.url }})
{% endfor %}
{% endif %}
* Project Details
{% if project.summary and project.summary != "" %}
  * {{ project.summary }}
{% endif %}
{% if project.bullets and project.bullets.size > 0 %}
{% for bullet in project.bullets %}
  * {{ bullet }}
{% endfor %}
{% endif %}

{% endfor %}
