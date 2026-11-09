---
layout: page
title: Kansas Fish Ontology
description: an ontology and visual explorer for fish ecology data across Kansas
img: assets/img/publication_preview/us2ts2025_kfo_poster.jpg
importance: 2
category: research
---

The **Kansas Fish Ontology (KFO)** is a knowledge framework that brings together ecological, taxonomic and environmental data on fish species across Kansas to support conservation and management. It is joint work with Martha Mather, Hande Küçük McGinty and Pascal Hitzler.

- **Built with KNARM:** the Knowledge Acquisition and Representation Methodology, which uses iterative expert interviews and metadata modeling. It captures species traits, habitats, primary ecosystems, conservation status and trophic guilds.
- **Semi-automated construction:** a pipeline of scripts and OWL APIs builds the ontology from normalized fish-trait data and keeps it aligned with expert input. The ontology is stored in **GraphDB**.
- **Fish Ontology Visualizer:** a web interface (Vue.js, Flask, GraphDB) for interactive exploration of fish-habitat relationships and conservation questions.
- **Evaluation:** SPARQL competency questions confirmed logical consistency, query performance and usefulness for ecological decisions.

Presented as a poster at the [5th U.S. Semantic Technologies Symposium (US2TS 2025)](https://us2ts.org/). [Abstract (PDF)](/assets/pdf/Kansas_Fish_Ontology_US2TS2025_abstract.pdf)

{% include figure.liquid loading="eager" path="assets/img/publication_preview/us2ts2025_kfo_poster.jpg" title="Kansas Fish Ontology poster" class="img-fluid rounded z-depth-1" %}

**Next steps:** dynamic environmental data, natural-language queries and predictive analytics in the visualizer.
