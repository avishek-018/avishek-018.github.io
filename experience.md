---
layout: default
---

{% assign experience = site.data.experience %}

# <span class='red_h1'>Academic & Industrial</span>

{% for role in experience.roles %}
## {{ role.role }}
<span class="date_large_dp">**{{ role.start }} - {{ role.end }}**</span>
*<span class='font-12'>{{ role.org }}{% if role.location and role.location != "" %}, {{ role.location }}{% endif %}</span>*<br>

{% if role.highlights and role.highlights.size > 0 %}
{% for point in role.highlights %}
- {{ point }}
{% endfor %}
{% endif %}

{% if role.role == "Lecturer" and experience.teaching_table and experience.teaching_table.rows and experience.teaching_table.rows.size > 0 %}

Taught the following theory and sessional courses at CUET.

<table>
<thead>
  <tr>
    <th>Course Title</th>
    <th>Class Size</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
{% for row in experience.teaching_table.rows %}
  <tr>
    <td>{{ row.course }}</td>
    <td>{{ row.class_size }}</td>
    <td>{{ row.status }}</td>
  </tr>
{% endfor %}
</tbody>
</table>
{% endif %}

{% endfor %}

{% if experience.subsections and experience.subsections.size > 0 %}
{% for subsection in experience.subsections %}
## {{ subsection.title }}
{% for entry in subsection.entries %}
* {{ entry }}
{% endfor %}

{% endfor %}
{% endif %}
