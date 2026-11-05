---
layout: page
title: Neurosymbolic neuron analysis
description: labeling what hidden neurons detect, using concept induction over knowledge graphs
importance: 1
category: research
---

Deep networks are accurate but opaque. This line of work, which is the core of my Ph.D. research in the [DaSe Lab](https://daselab.cs.ksu.edu/), explains **individual hidden neurons** in human-readable terms.

**How it works**

1. Collect the inputs that most strongly activate a neuron.
2. Describe those inputs with an OWL knowledge graph.
3. Run concept induction ([DL-Learner](https://dl-learner.org/)) to find the class expression that separates activating from non-activating inputs. The result is a label such as "building ⊓ window".
4. Verify the label by checking that new inputs matching the concept also activate the neuron.

**Where it has gone**

- Image classifiers (CNNs), published in the _Neurosymbolic Artificial Intelligence_ journal and an Elsevier book chapter.
- Text classifiers, my first-author K-CAP 2025 paper and the [text_hna](https://github.com/avishek-018/text_hna) toolkit.
- Context bias in agricultural CNNs (preprint, 2026).
- Audio classification (preprint, 2026).
- **Ongoing:** labeling features learned by sparse autoencoders inside open-weight LLMs (Gemma).
