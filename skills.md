---
layout: default
---

{% assign skills = site.data.skills %}

# <span class='red_h1'>Technical Skills</span>

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Skills / Technologies</th>
    </tr>
  </thead>
  <tbody>
    {% for category in skills.categories %}
    <tr>
      <td>{{ category.name }}</td>
      <td>
        <ul>
          {% for item in category.items %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

# <span class='red_h1'>Leadership</span>

{% for role in skills.leadership_roles %}
## {{ role.title }}

<span class="date_large_dp">**{{ role.start }} - {{ role.end }}**</span>
*<span class='font-12'>{{ role.org }}</span>*<br>
<span class="date_small_dp">**{{ role.start }} - {{ role.end }}**</span>

{% endfor %}
