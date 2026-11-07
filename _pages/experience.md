---
layout: page
permalink: /experience/
title: experience
nav: true
nav_order: 3
description: Research, teaching and industry work, education, skills, service and awards.
---

{%- comment -%}
  Five tabs, each with its own link (/experience/#academic, #industry, #education,
  #skills, #service). Tab switching: assets/js/tabs.js. Without JavaScript every
  panel shows, one after another.
  Entry markup: <div class="cv-entry"> with a head row (role + date), a sub row
  (organization + place), and optional bullets.
{%- endcomment -%}

<div class="exp-top">
  <a class="idlink" href="{{ '/assets/pdf/Avishek_Das_CV.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> Download CV (PDF)</a>
</div>

<div class="xtabs" role="tablist" aria-label="Experience sections">
  <button type="button" role="tab" class="xtab xtab--a" aria-controls="academic" aria-selected="true"><i class="fa-solid fa-flask"></i> Academic</button>
  <button type="button" role="tab" class="xtab xtab--b" aria-controls="industry" aria-selected="false"><i class="fa-solid fa-briefcase"></i> Industry</button>
  <button type="button" role="tab" class="xtab xtab--c" aria-controls="education" aria-selected="false"><i class="fa-solid fa-graduation-cap"></i> Education</button>
  <button type="button" role="tab" class="xtab xtab--d" aria-controls="skills" aria-selected="false"><i class="fa-solid fa-screwdriver-wrench"></i> Skills</button>
  <button type="button" role="tab" class="xtab xtab--e" aria-controls="service" aria-selected="false"><i class="fa-solid fa-award"></i> Service &amp; Awards</button>
</div>

<section class="tabpanel" id="academic" role="tabpanel" aria-label="Academic">

<h2 class="cv-h">Research</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Graduate Research Assistant</b><span class="cv-date">Jul 2024 – present</span></div>
  <div class="cv-row cv-sub"><span><a href="https://daselab.cs.ksu.edu/">Data Semantics Lab</a>, Kansas State University · Advisor: <a href="https://people.cs.ksu.edu/~hitzler/">Dr. Pascal Hitzler</a></span><span>Manhattan, KS</span></div>
  <ul>
    <li>Develop neurosymbolic interpretability methods that label what individual hidden neurons in deep networks detect, using concept induction (DL-Learner) over OWL knowledge graphs.</li>
    <li>Extended the method from image models to text classifiers (first-author paper at K-CAP 2025) and released the <a href="https://github.com/avishek-018/text_hna">text_hna</a> toolkit.</li>
    <li>Analyze how CNNs use contextual image patches in agricultural datasets to expose context bias (preprint, 2026).</li>
    <li>Investigating open-weight LLMs (Gemma) by combining sparse autoencoders with concept induction to label learned features with human-readable concepts (ongoing).</li>
    <li>Work on <i>Mapping Seed-to-Plant Life Cycle to Predict Yields</i>, funded by the K-State Game-changing Research Initiation Program (GRIP).</li>
    <li>Collaborated with the Division of Biology on the <a href="{{ '/projects/2b_kansas_fish_ontology/' | relative_url }}">Kansas Fish Ontology</a>, and with Biological and Agricultural Engineering on predicting industrial sprayer boom movement.</li>
    <li>Co-writer on seven grant proposals (2025–2026).</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Research Coordinator</b><span class="cv-date">Jun 2021 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>CUET NLP Lab, Chittagong University of Engineering and Technology</span><span>Chattogram, Bangladesh</span></div>
  <ul>
    <li>Supervised 2 and co-supervised 25 undergraduate researchers in NLP, multimodal learning and LLMs, leading to about 20 peer-reviewed papers at venues including EACL, EMNLP workshops and ICCIT.</li>
    <li>Fine-tuned transformer models (BERT, MuRIL, multilingual masked language models) for emotion, sentiment, hate-speech and fake-news detection in Bengali, Tamil, Telugu and Malayalam.</li>
  </ul>
</div>

<h2 class="cv-h">Teaching</h2>

<div class="cv-entry">
  <div class="cv-row"><b>Lecturer, Department of Computer Science &amp; Engineering</b><span class="cv-date">Jul 2022 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>Chittagong University of Engineering and Technology (CUET)</span><span>Chattogram, Bangladesh</span></div>
  <p class="cv-note">Taught and co-taught theory and lab courses to about 125 students per term.</p>
  <table class="cv-table">
    <thead><tr><th>Course</th><th>Type</th><th>Terms</th></tr></thead>
    <tbody>
      <tr><td>Artificial Intelligence</td><td>theory + lab</td><td>2022–23, 2023–24</td></tr>
      <tr><td>Structured Programming (C)</td><td>theory + lab</td><td>2023–24</td></tr>
      <tr><td>Compiler Design</td><td>theory + lab</td><td>2023</td></tr>
      <tr><td>Software Engineering</td><td>lab</td><td>2022–23</td></tr>
      <tr><td>Computer Programming and Engineering Analysis</td><td>theory + lab</td><td>2022, 2023</td></tr>
    </tbody>
  </table>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>AI Consultant and Python Instructor</b><span class="cv-date">May 2021 – May 2022</span></div>
  <div class="cv-row cv-sub"><span>Diligite</span><span>Remote</span></div>
  <ul><li>Guided ML projects and taught Python fundamentals for machine learning.</li></ul>
</div>

<h2 class="cv-h">Talks and posters</h2>

<ul class="cv-list">
  <li><span class="cv-date">Dec 2025</span> Poster: <i>Kansas Fish Ontology</i>, 5th U.S. Semantic Technologies Symposium (US2TS 2025), Wright State University, Dayton, OH.</li>
  <li><span class="cv-date">2025</span> Talk: <i>Hidden Neuron Activation Analysis on Labeled Text Data</i>, K-CAP 2025.</li>
</ul>

<p class="cv-note">Papers: 36 in total, listed on the <a href="{{ '/publications/' | relative_url }}">publications page</a>.</p>

</section>

<section class="tabpanel" id="industry" role="tabpanel" aria-label="Industry">

<div class="cv-entry">
  <div class="cv-row"><b>Assessment Developer</b><span class="cv-date">Sep 2023 – Jun 2024</span></div>
  <div class="cv-row cv-sub"><span>Workera</span><span>Remote · Palo Alto, CA</span></div>
  <ul>
    <li>Designed about 20 skill assessments and co-developed about 25 more (about 100 items each) as subject matter expert in NLP, computer vision, MLOps, responsible AI and cybersecurity.</li>
    <li>Brought large language models into the item-authoring workflow to automate item drafting.</li>
    <li>Worked on score calibration and standard learning pathways for computer adaptive tests.</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Machine Learning Engineer</b><span class="cv-date">Jul 2021 – Jul 2022</span></div>
  <div class="cv-row cv-sub"><span>Apurba Technologies</span><span>Dhaka, Bangladesh</span></div>
  <ul>
    <li>Built a <a href="{{ '/projects/4_bangla_ocr/' | relative_url }}">Bangla OCR system</a> with document layout reconstruction, deployed in the Government of Bangladesh's national OCR service (ocr.bangla.gov.bd).</li>
    <li>Co-designed an attention-based multi-headed CNN trained on 1.37M character images: 99.6% accuracy on computer-composed, 99.3% on letterpress, 98.0% on typewritten and 95.3% on handwritten text (IEEE Big Data 2021).</li>
    <li>Built a ResUNet++ recognizer that works across scripts: 95.4% on Bangla, 94.7% on Assamese and 96.4% on English (ICPR 2022, first author).</li>
    <li>Optimized and deployed models to production on large-scale document image data.</li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>Trainee Software Developer</b><span class="cv-date">Aug 2019</span></div>
  <div class="cv-row cv-sub"><span>Brain Station 23</span><span>Dhaka, Bangladesh</span></div>
  <ul><li>Built a university enrollment log system for student–course assignment (Django, AJAX, D3.js).</li></ul>
</div>

</section>

<section class="tabpanel" id="education" role="tabpanel" aria-label="Education">

<div class="cv-entry">
  <div class="cv-row"><b>Ph.D. in Computer Science</b><span class="cv-date">Jul 2024 – present</span></div>
  <div class="cv-row cv-sub"><span>Kansas State University · Advisor: <a href="https://people.cs.ksu.edu/~hitzler/">Dr. Pascal Hitzler</a> · GPA 4.00/4.00</span><span>Expected Summer 2028</span></div>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>M.Sc. in Computer Science &amp; Engineering</b><span class="cv-date">Jan 2023 – Jun 2025</span></div>
  <div class="cv-row cv-sub"><span>Chittagong University of Engineering and Technology (CUET) · CGPA 3.62/4.00</span><span>Chattogram, Bangladesh</span></div>
  <ul>
    <li>Thesis: <a href="{{ '/publications/#das2024avater' | relative_url }}"><i>AVaTER: Fusing Audio, Visual, and Textual Modalities Using Cross-Modal Attention for Emotion Recognition</i></a> (published in Sensors, 2024).</li>
    <li>Advisor: <a href="https://scholar.google.com/citations?user=srYxYhcAAAAJ">Dr. Mohammed Moshiul Hoque</a></li>
  </ul>
</div>
<div class="cv-entry">
  <div class="cv-row"><b>B.Sc. in Computer Science &amp; Engineering, with Honors</b><span class="cv-date">Feb 2016 – Jun 2021</span></div>
  <div class="cv-row cv-sub"><span>CUET · CGPA 3.80/4.00 · ranked 4th of 120</span><span>Chattogram, Bangladesh</span></div>
  <ul>
    <li>Thesis: <a href="{{ '/publications/#das2021emotion' | relative_url }}"><i>Emotion Classification in a Resource Constrained Language Using Transformer-based Approach</i></a> (published at the NAACL 2021 Student Research Workshop).</li>
    <li>Advisor: <a href="https://scholar.google.com/citations?user=srYxYhcAAAAJ">Dr. Mohammed Moshiul Hoque</a></li>
  </ul>
</div>

</section>

<section class="tabpanel" id="skills" role="tabpanel" aria-label="Skills">

<dl class="cv-skills">
  <dt>Interpretability</dt><dd>Explainable AI, neurosymbolic AI, concept induction (DL-Learner), sparse autoencoders, hidden-neuron analysis</dd>
  <dt>LLMs and agents</dt><dd>Agentic and multi-agent systems, RAG and GraphRAG, Model Context Protocol (MCP), LLM evaluation, structured outputs, OpenAI API</dd>
  <dt>Machine learning</dt><dd>PyTorch, TensorFlow, Hugging Face Transformers, fine-tuning (BERT, MuRIL), CNNs, multimodal learning, LSTMs, embedding models</dd>
  <dt>NLP and vision</dt><dd>Text classification, sentiment and emotion analysis, summarization, OCR, document layout analysis</dd>
  <dt>Knowledge graphs</dt><dd>OWL/RDF, SPARQL, ontology engineering, Neo4j (Cypher), GraphDB, Qdrant</dd>
  <dt>Programming</dt><dd>Python, C, C++, Java, JavaScript, SQL, Bash</dd>
  <dt>Engineering</dt><dd>Docker, Git, pytest, AWS (EC2, S3), GCP, HPC/SLURM, Streamlit, Flask, Django, model deployment</dd>
  <dt>Embedded</dt><dd>Raspberry Pi, Arduino, STM32 (FreeRTOS, CAN bus)</dd>
</dl>

</section>

<section class="tabpanel" id="service" role="tabpanel" aria-label="Service and awards">

<h2 class="cv-h">Awards</h2>

<ul class="cv-list">
  <li><span class="cv-date">Oct 2025</span> Graduate Student of the Month, Department of Computer Science, Kansas State University.</li>
  <li><span class="cv-date">2021</span> B.Sc. with Honors, ranked 4th of 120, CUET.</li>
</ul>

<h2 class="cv-h">Reviewing</h2>

<ul class="cv-list">
  <li><span class="cv-date">2026</span> Subreviewer (main track), World Conference on eXplainable AI (xAI 2026).</li>
  <li><span class="cv-date">Journals</span> IEEE Access (5 reviews) and IEEE Transactions on Human-Machine Systems (1 review).</li>
</ul>

<h2 class="cv-h">Leadership and outreach</h2>

<ul class="cv-list">
  <li><span class="cv-date">Nov 2026</span> Mentor, AI Hackathon, Heartland AI Symposium, Kansas State University.</li>
  <li><span class="cv-date">May 2026</span> Vice-President, Badminton Club, Kansas State University.</li>
  <li><span class="cv-date">Oct 2025</span> Secretary, Computer Science Graduate Student Association, Kansas State University.</li>
  <li><span class="cv-date">Feb 2023</span> Organizing Secretary, CLBLP-2023 workshop, and organizing member, ECCE-2023 conference.</li>
  <li><span class="cv-date">2022–2023</span> Vice-Chair (Activity), IEEE Young Professionals, Bangladesh Section.</li>
  <li><span class="cv-date">2019–2020</span> Branch Chairperson, IEEE CUET Student Branch.</li>
  <li><span class="cv-date">2018–2019</span> Volunteer robotics instructor for about 100 rural school students in Bangladesh.</li>
</ul>

</section>

<script src="{{ '/assets/js/tabs.js' | relative_url }}" defer></script>
