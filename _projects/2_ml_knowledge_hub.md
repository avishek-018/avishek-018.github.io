---
layout: page
title: ML Knowledge Hub
description: agentic hybrid GraphRAG assistant for questions about ML projects
importance: 2
category: engineering
---

An agentic **GraphRAG** assistant that answers questions about ML projects, models, datasets and evaluations, with cited sources.

- Combines a **Neo4j** knowledge graph with **Qdrant** semantic search.
- A planner, critic and revision agent pipeline turns each question into a structured query plan, with 96.7% routing accuracy on a 30-query benchmark. It supports multi-turn chat.
- Deployed on Streamlit and exposed to AI clients through an **MCP server**.

**Live demo:** [mlknowledge.streamlit.app](https://mlknowledge.streamlit.app)

**Tools:** Python, OpenAI API, Neo4j, Qdrant, Sentence-Transformers, Streamlit, MCP, Pydantic, pytest.
