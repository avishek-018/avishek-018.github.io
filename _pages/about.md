---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate in Computer Science · <a href='https://www.cs.k-state.edu/'>Kansas State University</a> · <a href='https://daselab.cs.ksu.edu/'>Data Semantics Lab</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: false # rendered below as cards (same style as the publications page)
social: false # contact links are shown as buttons at the top instead

announcements:
  enabled: false # news is rendered below as a year-grouped timeline instead

latest_posts:
  enabled: false
---

{%- comment -%}
  Citation popovers: each <span class="cites"> shows its list of papers on hover
  or keyboard focus (tap on phones). Links point to entries on the publications page.
{%- endcomment -%}

<p class="intro">
I am a Ph.D. candidate in Computer Science at <a href="https://www.k-state.edu/">Kansas State University</a>, advised by <a href="https://people.cs.ksu.edu/~hitzler/">Dr. Pascal Hitzler</a> in the Data Semantics Lab. My research asks a simple question: <b>what has a neural network actually learned?</b> I build neurosymbolic methods that label the hidden units of deep networks with human-readable concepts, using concept induction over OWL knowledge graphs
<span class="cites" tabindex="0">[1&ndash;2]<span class="cites__pop">
<a class="cites__item" href="{{ '/publications/#dalal2026toward' | relative_url }}"><span class="cites__n">1</span><span class="cites__t">Toward a Neurosymbolic Understanding of Hidden Neuron Activations<span class="cites__v">Neurosymbolic Artificial Intelligence 2026</span></span></a>
<a class="cites__item" href="{{ '/publications/#dalal2026hiddencnn' | relative_url }}"><span class="cites__n">2</span><span class="cites__t">Neurosymbolic Hidden Neuron Analysis in Convolutional Neural Networks<span class="cites__v">Elsevier book chapter 2026</span></span></a>
</span></span>,
and extend them from images to text, audio and contextual bias
<span class="cites" tabindex="0">[3&ndash;5]<span class="cites__pop">
<a class="cites__item" href="https://daselab.cs.ksu.edu/uploads/3731443_3771369_feec3e7285.pdf"><span class="cites__n">3</span><span class="cites__t">Hidden Neuron Activation Analysis on Labeled Text Data<span class="cites__v">K-CAP 2025</span></span></a>
<a class="cites__item" href="https://arxiv.org/abs/2610.40414"><span class="cites__n">4</span><span class="cites__t">Bridging Neural Representations and Symbolic Semantics in Audio Classification<span class="cites__v">arXiv 2026</span></span></a>
<a class="cites__item" href="{{ '/publications/#dalal2026contextual' | relative_url }}"><span class="cites__n">5</span><span class="cites__t">Understanding Contextual Bias in Agricultural CNNs Through Hidden-Neuron Concept Induction<span class="cites__v">arXiv 2026</span></span></a>
</span></span>.
I am now applying these ideas to sparse-autoencoder features inside open-weight LLMs, and I also build knowledge-graph systems for LLM agents
<span class="cites" tabindex="0">[6&ndash;7]<span class="cites__pop">
<a class="cites__item" href="{{ '/projects/2_ml_knowledge_hub/' | relative_url }}"><span class="cites__n">6</span><span class="cites__t">ML Knowledge Hub: agentic hybrid GraphRAG with an MCP server<span class="cites__v">Project · live demo</span></span></a>
<a class="cites__item" href="{{ '/publications/#barua2026reasoning' | relative_url }}"><span class="cites__n">7</span><span class="cites__t">Reasoning in Large Language Models: RAG and Beyond<span class="cites__v">Elsevier book chapter 2026</span></span></a>
</span></span>.
</p>

<div class="idlinks">
  <a class="idlink" href="mailto:avishek@ksu.edu"><i class="fa-solid fa-envelope"></i> Email</a>
  <a class="idlink" href="{{ '/assets/pdf/Avishek_Das_CV.pdf' | relative_url }}"><i class="fa-solid fa-file-lines"></i> CV</a>
  <a class="idlink" href="https://scholar.google.com/citations?user=vmA2X1kAAAAJ"><i class="ai ai-google-scholar"></i> Scholar</a>
  <a class="idlink" href="https://github.com/avishek-018"><i class="fa-brands fa-github"></i> GitHub</a>
  <a class="idlink" href="https://www.linkedin.com/in/avishek-d/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
  <a class="idlink" href="https://orcid.org/0000-0002-1589-8322"><i class="ai ai-orcid"></i> ORCID</a>
</div>

<p class="skills-line"><b>Tools I work with:</b> PyTorch · Hugging Face · LLMs, RAG and GraphRAG · MCP and agents · sparse autoencoders · DL-Learner · OWL/RDF, SPARQL · Neo4j · Docker · AWS</p>

<h2 class="section-heading"><a href="{{ '/news/' | relative_url }}">updates</a></h2>

<div class="updates-wrap">
<div class="updates">
{%- assign news_sorted = site.news | sort: 'date' | reverse -%}
{%- assign current_year = '' -%}
{%- for item in news_sorted -%}
  {%- assign y = item.date | date: '%Y' -%}
  {%- if y != current_year -%}
    <div class="update-year">{{ y }}</div>
    {%- assign current_year = y -%}
  {%- endif -%}
  <div class="update">
    <span class="update__date">{{ item.date | date: '%d %b' }}</span>
    <span class="update__text">
      {%- if item.inline -%}
        {{ item.content | remove: '<p>' | remove: '</p>' | strip | emojify }}
      {%- else -%}
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
      {%- endif -%}
    </span>
  </div>
{%- endfor -%}
</div>
</div>

<h2 class="section-heading"><a href="{{ '/publications/' | relative_url }}">selected publications</a></h2>

<div class="pubs pubs--home">
{% bibliography --template pubcard --group_by none --query @*[selected=true]* %}
</div>
