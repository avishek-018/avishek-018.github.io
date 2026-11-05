---
layout: page
title: Bangla OCR
description: national-scale OCR for Bangla, deployed by the Government of Bangladesh
importance: 4
category: engineering
---

At Apurba Technologies (2021–2022) I built a Bangla OCR system with document layout reconstruction. It is deployed in the Government of Bangladesh's national OCR service ([ocr.bangla.gov.bd](https://ocr.bangla.gov.bd)) under the EBLICT project of the Bangladesh Computer Council, ICT Division.

- Co-designed an attention-based multi-headed CNN for grapheme-level recognition, trained on 1.37M character images. Accuracy: 99.6% on computer-composed text, 99.3% on letterpress, 98.0% on typewritten and 95.3% on handwritten text (IEEE BigData 2021).
- Built a multi-headed ResUNet++ recognizer that generalizes across scripts: 95.4% on Bangla, 94.7% on Assamese and 96.4% on English (EMNIST). This is my first-author ICPR 2022 paper.
