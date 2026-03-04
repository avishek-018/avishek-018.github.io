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

## Journals
---
{% assign journal_publications = site.publications | where: "category", "Journal" | sort: "order" %}
{% for publication in journal_publications %}
* {{ publication.title }}<br>
{{ publication.authors }}<br>
{% if publication.venue_url %}[{{ publication.venue }}]({{ publication.venue_url }}){% else %}{{ publication.venue }}{% endif %}{% if publication.paper_url %} / [Paper]({{ publication.paper_url }}){% endif %}
{% endfor %}

## Conferences
---
{% assign conference_publications = site.publications | where: "category", "Conference" | sort: "order" %}
{% for publication in conference_publications %}
* {{ publication.title }}<br>
{{ publication.authors }}<br>
{% if publication.venue_url %}[{{ publication.venue }}]({{ publication.venue_url }}){% else %}{{ publication.venue }}{% endif %}{% if publication.paper_url %} / [Paper]({{ publication.paper_url }}){% endif %}
{% endfor %}




