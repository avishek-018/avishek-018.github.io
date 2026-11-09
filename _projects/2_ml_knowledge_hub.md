---
layout: page
title: ML Knowledge Hub
description: agentic hybrid GraphRAG assistant for questions about ML projects
importance: 1
github: https://github.com/avishek-018/MLKnowledgeHub
category: engineering
img: assets/img/ml_knowledge_hub.jpg
---

An agentic **GraphRAG** assistant that answers questions about ML projects, models, datasets and evaluations, with cited sources.

<div style="margin:1rem 0;">
  {% include figure.liquid loading="eager" path="assets/img/ml_knowledge_hub.jpg" title="ML Knowledge Hub chat interface" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">The chat interface: answers are grounded in registered sources from the Neo4j graph and the Qdrant index.</div>

- Combines a **Neo4j** knowledge graph with **Qdrant** semantic search.
- A planner, critic and revision agent pipeline turns each question into a structured query plan, with 96.7% routing accuracy on a 30-query benchmark. It supports multi-turn chat.
- Deployed on Streamlit and exposed to AI clients through an **MCP server**.

**Code:** [GitHub](https://github.com/avishek-018/MLKnowledgeHub) · **Live demo:** [mlknowledge.streamlit.app](https://mlknowledge.streamlit.app)

**Tools:** Python, OpenAI API, Neo4j, Qdrant, Sentence-Transformers, Streamlit, MCP, Pydantic, pytest.
