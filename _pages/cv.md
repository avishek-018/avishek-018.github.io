---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
description: Ph.D. candidate in Computer Science at Kansas State University. Updated November 2026.
---

{%- comment -%}
  Text version of the CV, so recruiters and search engines can read it.
  The PDF (assets/pdf/Avishek_Das_CV.pdf) is the full version; keep both in step.
  Each entry: <div class="cv-entry"> with a head row (role + date), a sub row
  (organization + place), and optional bullets.
{%- endcomment -%}

<p class="cv-download">
  <a class="idlink" href="{{ '/assets/pdf/Avishek_Das_CV.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> Download the full CV (PDF)</a>
</p>

<div class="cv-stats">
  <div><b>36</b><span>publications</span></div>
  <div><b>27</b><span>students supervised</span></div>
  <div><b>4</b><span>courses taught</span></div>
  <div><b>2+</b><span>years in industry</span></div>
</div>

<h2 class="cv-h">Education</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Ph.D. in Computer Science</b><span class="cv-date">Jul 2024 – present</span></div>
  <div class="cv-row cv-sub"><span>Kansas State University · Advisor: <a href="https://people.cs.ksu.edu/~hitzler/">Dr. Pascal Hitzler</a></span><span>Expected Summer 2028</span></div>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>M.Sc. in Computer Science &amp; Engineering</b><span class="cv-date">Jan 2023 – Jun 2025</span></div>
  <div class="cv-row cv-sub"><span>Chittagong University of Engineering and Technology (CUET)</span><span>Bangladesh</span></div>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>B.Sc. in Computer Science &amp; Engineering, with Honors</b><span class="cv-date">Feb 2016 – Jun 2021</span></div>
  <div class="cv-row cv-sub"><span>CUET · ranked 4th of 120</span><span>Bangladesh</span></div>
</div>

<h2 class="cv-h">Research experience</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Graduate Research Assistant</b><span class="cv-date">Jul 2024 – present</span></div>
  <div class="cv-row cv-sub"><span><a href="https://daselab.cs.ksu.edu/">Data Semantics Lab</a>, Kansas State University</span><span>Manhattan, KS</span></div>
  <ul>
    <li>Develop neurosymbolic interpretability methods that label what individual hidden neurons in deep networks detect, using concept induction (DL-Learner) over OWL knowledge graphs.</li>
    <li>Extended the method from image models to text classifiers (first-author paper at K-CAP 2025) and released the <a href="https://github.com/avishek-018/text_hna">text_hna</a> toolkit.</li>
    <li>Analyze how CNNs use contextual image patches in agricultural datasets to expose context bias (preprint, 2026).</li>
    <li>Investigating open-weight LLMs (Gemma) by combining sparse autoencoders with concept induction to label learned features with human-readable concepts (ongoing).</li>
    <li>Work on <i>Mapping Seed-to-Plant Life Cycle to Predict Yields</i>, funded by the K-State Game-changing Research Initiation Program (GRIP).</li>
    <li>Collaborated with the Division of Biology on the <a href="{{ '/projects/2b_kansas_fish_ontology/' | relative_url }}">Kansas Fish Ontology</a>, and with Biological and Agricultural Engineering on predicting industrial sprayer boom movement.</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Research Coordinator</b><span class="cv-date">Jun 2021 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>CUET NLP Lab</span><span>Chattogram, Bangladesh</span></div>
  <ul>
    <li>Supervised 2 and co-supervised 25 undergraduate researchers in NLP, multimodal learning and LLMs, leading to about 20 peer-reviewed papers at venues including EACL, EMNLP workshops and ICCIT.</li>
    <li>Fine-tuned transformer models (BERT, MuRIL, multilingual masked language models) for emotion, sentiment, hate-speech and fake-news detection in Bengali, Tamil, Telugu and Malayalam.</li>
  </ul>
</div>

<h2 class="cv-h">Industry experience</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Assessment Developer</b><span class="cv-date">Sep 2023 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>Workera</span><span>Remote · Palo Alto, CA</span></div>
  <ul>
    <li>Designed about 20 skill assessments and co-developed about 25 more (about 100 items each) as subject matter expert in NLP, computer vision, MLOps, responsible AI and cybersecurity.</li>
    <li>Brought large language models into the item-authoring workflow, and worked on score calibration for computer adaptive tests.</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Machine Learning Engineer</b><span class="cv-date">Jul 2021 – Jul 2022</span></div>
  <div class="cv-row cv-sub"><span>Apurba Technologies</span><span>Dhaka, Bangladesh</span></div>
  <ul>
    <li>Built a <a href="{{ '/projects/4_bangla_ocr/' | relative_url }}">Bangla OCR system</a> with document layout reconstruction, deployed in the Government of Bangladesh's national OCR service (ocr.bangla.gov.bd).</li>
    <li>Co-designed an attention-based multi-headed CNN trained on 1.37M character images: 99.6% accuracy on computer-composed and 95.3% on handwritten text (IEEE Big Data 2021).</li>
    <li>Built a ResUNet++ recognizer that works across scripts: 95.4% on Bangla, 94.7% on Assamese and 96.4% on English (ICPR 2022, first author).</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Trainee Software Developer</b><span class="cv-date">Aug 2019</span></div>
  <div class="cv-row cv-sub"><span>Brain Station 23</span><span>Dhaka, Bangladesh</span></div>
  <ul>
    <li>Built a university enrollment log system for student–course assignment (Django, AJAX, D3.js).</li>
  </ul>
</div>

<h2 class="cv-h">Teaching</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Lecturer, Department of Computer Science &amp; Engineering</b><span class="cv-date">Jul 2022 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>CUET</span><span>Chattogram, Bangladesh</span></div>
  <ul>
    <li>Taught theory and lab courses in artificial intelligence, computer programming, compiler design and software engineering to about 125 students per term. <a href="{{ '/teaching/' | relative_url }}">Course list</a>.</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>AI Consultant and Python Instructor</b><span class="cv-date">May 2021 – May 2022</span></div>
  <div class="cv-row cv-sub"><span>Diligite</span><span>Remote</span></div>
</div>

<h2 class="cv-h">Publications</h2>

<p>36 papers: 4 journal articles, 2 book chapters, 21 conference papers, 7 workshop papers and 2 preprints. The full list, with PDFs and code, is on the <a href="{{ '/publications/' | relative_url }}">publications page</a>.</p>

<h2 class="cv-h">Grants and talks</h2>

<ul class="cv-list">
  <li>Co-writer on seven grant proposals to NSF, the U.S. Department of Energy, USDA-NIFA and Amazon (2025–2026).</li>
  <li>Co-proposer of a thematic special session on explainable AI for the XAI World Conference 2027.</li>
  <li>Poster: <i>Kansas Fish Ontology</i>, 5th U.S. Semantic Technologies Symposium (US2TS 2025), Wright State University, Dayton, OH, December 2025.</li>
  <li>Talk: <i>Hidden Neuron Activation Analysis on Labeled Text Data</i>, K-CAP 2025.</li>
</ul>

<h2 class="cv-h">Honors</h2>

<ul class="cv-list">
  <li><span class="cv-date">Oct 2025</span> Graduate Student of the Month, Department of Computer Science, Kansas State University.</li>
  <li><span class="cv-date">2021</span> B.Sc. with Honors, ranked 4th of 120, CUET.</li>
</ul>

<h2 class="cv-h">Service and leadership</h2>

<ul class="cv-list">
  <li><span class="cv-date">2026</span> Subreviewer (main track), World Conference on eXplainable AI (xAI 2026).</li>
  <li><span class="cv-date">Journals</span> Reviewer for IEEE Access (5 reviews) and IEEE Transactions on Human-Machine Systems (1 review).</li>
  <li><span class="cv-date">Nov 2026</span> Mentor, AI Hackathon, Heartland AI Symposium, Kansas State University.</li>
  <li><span class="cv-date">May 2026</span> Vice-President, Badminton Club, Kansas State University.</li>
  <li><span class="cv-date">Oct 2025</span> Secretary, Computer Science Graduate Student Association, Kansas State University.</li>
  <li><span class="cv-date">Feb 2023</span> Organizing Secretary, CLBLP-2023 workshop, and organizing member, ECCE-2023 conference.</li>
  <li><span class="cv-date">2022–2023</span> Vice-Chair (Activity), IEEE Young Professionals, Bangladesh Section.</li>
  <li><span class="cv-date">2019–2020</span> Branch Chairperson, IEEE CUET Student Branch.</li>
  <li><span class="cv-date">2018–2019</span> Volunteer robotics instructor for about 100 rural school students in Bangladesh.</li>
</ul>

<h2 class="cv-h">Skills</h2>

<dl class="cv-skills">
  <dt>Interpretability</dt><dd>Explainable AI, neurosymbolic AI, concept induction (DL-Learner), sparse autoencoders, hidden-neuron analysis</dd>
  <dt>LLMs and agents</dt><dd>Agentic and multi-agent systems, RAG and GraphRAG, Model Context Protocol (MCP), LLM evaluation, structured outputs</dd>
  <dt>Machine learning</dt><dd>PyTorch, TensorFlow, Hugging Face Transformers, CNNs, multimodal learning, NLP, OCR and document layout analysis</dd>
  <dt>Knowledge graphs</dt><dd>OWL/RDF, SPARQL, ontology engineering, Neo4j (Cypher), GraphDB, Qdrant</dd>
  <dt>Engineering</dt><dd>Python, C/C++, Java, JavaScript, SQL, Bash, Docker, Git, pytest, AWS, GCP, HPC/SLURM, Streamlit, Flask, Django</dd>
  <dt>Embedded</dt><dd>Raspberry Pi, Arduino, STM32 (FreeRTOS, CAN bus)</dd>
</dl>
