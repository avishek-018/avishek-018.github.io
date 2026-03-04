---
layout: default
---

{% assign home = site.data.home %}

<img class="profile-picture" src="{{ home.profile.photo }}">

<b>{{ home.profile.name }}</b><br>
{% for line in home.profile.title_lines %}
{{ line }}<br>
{% endfor %}

## About Me
<div style="text-align: justify">
{{ home.about_markdown | markdownify }}
</div><br>
Find [my CV]({{ home.cv_url }}){:target="_blank"} here.

## Updates
{% for item in home.updates %}
<span style="color:green;"> **[{{ item.date_label }}]** </span> {{ item.text }} <br>
{% endfor %}

## Learning Resources

Here are some learning resources I found useful throughout my CS journey.

* **LLMs**
{% for item in home.learning_resources.llms %}
  * {{ item.label }} [[Link]]({{ item.url }})
{% endfor %}

* **Books**
{% for item in home.learning_resources.books %}
  * {{ item.label }} [[Link]]({{ item.url }})
{% endfor %}

* **Advices**
{% for item in home.learning_resources.advice %}
  * {{ item.label }} [[Link]]({{ item.url }})
{% endfor %}

* **Blogs**
{% for item in home.learning_resources.blogs %}
  * {{ item.label }} [[Link]]({{ item.url }})
{% endfor %}

---

Quote of the month:

> {{ home.quote }}

<p hidden><script hidden type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=1&t=tt&d=MeVH9Qx00KxvJNXkBmzujoN28cclz-9WuZm0HnFUH_0'></script></p>
