---
layout: default
---
 
# <span class='red_h1'>Publications</span>

## Research Interests

* Machine Learning / Deep Learning / Transformers
* Natural Language Processing
* MLOps
* Computer Vision

[GOOGLE SCHOLAR](https://scholar.google.com/citations?user=vmA2X1kAAAAJ) | [ResearchGate](https://www.researchgate.net/profile/Avishek-Das-11) | [ORCiD](https://orcid.org/my-orcid?orcid=0000-0002-1589-8322) | [Semantic Scholar](https://www.semanticscholar.org/author/Avishek-Das/2113241072)

{% assign publication_sections = site.data.publications.sections %}
{% for section in publication_sections %}
{% if section.items and section.items.size > 0 %}
## {{ section.name }}
---
{% for publication in section.items %}
* {{ publication.title }}<br>
{{ publication.authors }}<br>
{% if publication.venue_url %}[{{ publication.venue }}]({{ publication.venue_url }}){% else %}{{ publication.venue }}{% endif %}{% if publication.paper_url %} / [Paper]({{ publication.paper_url }}){% endif %}
{% endfor %}

{% endif %}
{% endfor %}

