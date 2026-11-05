---
layout: page
title: Neurosymbolic neuron analysis
description: labeling what hidden neurons detect, using concept induction over knowledge graphs
importance: 1
img: assets/img/publication_preview/nai2026_hidden_neurons.jpg
category: research
---

Deep networks are accurate but opaque. This line of work, which is the core of my Ph.D. research in the [DaSe Lab](https://daselab.cs.ksu.edu/), explains **individual hidden neurons** in human-readable terms.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/nai2026_hidden_neurons.jpg" title="Concept induction on CNN dense-layer activations" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Concept induction labels dense-layer neurons with human-readable concepts, which are then validated with concept activation analysis (<em>Neurosymbolic Artificial Intelligence</em>, 2026).</div>

**How it works**

1. Collect the inputs that most strongly activate a neuron.
2. Describe those inputs with an OWL knowledge graph.
3. Run concept induction ([DL-Learner](https://dl-learner.org/)) to find the class expression that separates activating from non-activating inputs. The result is a label such as "building ⊓ window".
4. Verify the label by checking that new inputs matching the concept also activate the neuron.

**Where it has gone**

- Image classifiers (CNNs), published in the _Neurosymbolic Artificial Intelligence_ journal and an Elsevier book chapter.
- Text classifiers, my first-author K-CAP 2025 paper and the [text_hna](https://github.com/avishek-018/text_hna) toolkit.
- Context bias in agricultural CNNs (preprint, 2026).

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/publication_preview/cnn_contextual_bias.jpg" title="Contextual bias pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Pipeline for measuring contextual bias in agricultural CNNs with hidden-neuron concept induction.</div>

- Audio classification ([arXiv preprint](https://arxiv.org/abs/2610.40414), 2026).
- **Ongoing:** labeling features learned by sparse autoencoders inside open-weight LLMs (Gemma).
