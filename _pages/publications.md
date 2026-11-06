---
layout: page
permalink: /publications/
title: publications
description: Preprints, book chapters, journal, conference and workshop papers, newest first.
nav: true
nav_order: 1
---

{%- comment -%}
  Cards come from _bibliography/papers.bib through _layouts/pubcard.liquid.
  Topics are set per paper with the bib field topics = {xai,mm}, using the keys below.
  Filtering runs in the browser (assets/js/pubfilter.js).
{%- endcomment -%}

{%- assign topics = "xai:Explainable & Neurosymbolic AI|kg:Knowledge Graphs & LLMs|mm:Multimodal|emo:Emotion & Sentiment|hate:Hate & Misinformation|ocr:OCR & Vision|other:Others" | split: "|" -%}
{%- assign years = "2026,2025,2024,2023,2022,2021,2020" | split: "," -%}

<div class="pubbar">
  <div class="pubbar__top">
    <a class="idlink" href="https://scholar.google.com/citations?user=vmA2X1kAAAAJ"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    <a class="idlink" href="https://www.semanticscholar.org/author/{{ site.data.socials.semanticscholar_id }}"><i class="ai ai-semantic-scholar"></i> Semantic Scholar</a>
  </div>
  <div class="pubbar__row">
    <label class="pubbar__search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input id="pub-q" type="search" placeholder="Search title, author or venue…" aria-label="Search publications">
    </label>
    <select id="pub-type" class="pubbar__select" aria-label="Paper type">
      <option value="">Type: All</option>
      <option>Journal</option>
      <option>Conference</option>
      <option>Workshop</option>
      <option>Book chapter</option>
      <option>Preprint</option>
      <option>Poster</option>
    </select>
  </div>
  <div class="seg" id="pub-years" role="group" aria-label="Year">
    <button type="button" class="is-on" data-v="">All</button>
    {%- for y in years %}<button type="button" data-v="{{ y }}">{{ y }}</button>{% endfor %}
  </div>
  <div class="chips" id="pub-topics" role="group" aria-label="Topic">
    <button type="button" class="chip is-on" data-v="">All</button>
    {%- for t in topics -%}
      {%- assign kv = t | split: ":" %}
    <button type="button" class="chip" data-v="{{ kv[0] }}">{{ kv[1] }}</button>
    {%- endfor %}
  </div>
  <div class="pubbar__count" id="pub-count" aria-live="polite"></div>
</div>

<div class="pubs">
{% bibliography --template pubcard --group_by none %}
</div>

<p class="pubs__empty" id="pub-empty" hidden>No papers match. Try clearing a filter.</p>

<script src="{{ '/assets/js/pubfilter.js' | relative_url }}" defer></script>
