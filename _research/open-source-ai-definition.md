---
title: "Open Source AI Definition"
date: 2025-01-21
description: "GovFresh research notes on the Open Source Institute's Open Source AI Definition."
author: GovFresh
img-feat: research-open-source-ai-definition-feat.png
img-og: research-open-source-ai-definition-feat.png
img-twitter: research-open-source-ai-definition-feat.png
img-alt: "Robot icon"
img-caption: "Robot icon via Font Awesome"
img-link: https://fontawesome.com/
audio: open-source-ai-definition.mp3
category:
  - Accessibility
  - Artificial intelligence
  - Data
  - Open innovation
  - Open source
  - Policy
feature: "true"
feedback: #true
feedback-link: 
launched: #true
contributors:
#  - 
---

## Summary

The Open Source Initiative (OSI) has released the Open Source AI Definition (OSAID) 1.0 after a two-year collaborative process.

* The definition requires AI systems to grant the freedoms to use, study, modify, and share the system for any purpose.
* The preferred form for making modifications to an open-source machine learning system must include Data Information, Code, and Parameters, and the licensing of these components must ensure they are freely available to all.
* While some models already meet the requirements, others need to change licenses or practices to comply.
* The OSI will continue to evaluate AI models against the definition and update it as needed.

## FAQs

### Why was the Open Source AI Definition created?

The original Open Source Definition primarily focused on software. AI systems, especially machine learning systems, are not simply software but also involve data, configurations, documentation, and artifacts like weights and biases. The Open Source AI Definition (OSAID) clarifies what constitutes the "preferred form" for modifying an AI system, applying the principles of open source to the AI domain.

### What's the difference between the Open Source Definition and the Open Source AI Definition?

The Open Source Definition (OSD) pertains to software, while OSAID extends those principles to AI systems. OSAID recognizes that AI systems require additional components beyond source code to be considered open, such as details about training data, model parameters, and the code used for training and running the AI system.

### What is the role of training data in Open Source AI?

While access to training data is crucial for studying and modifying AI systems, OSAID acknowledges that sharing all training data can be legally or practically impossible. Therefore, instead of requiring the release of all training data, OSAID requires "Data Information," which includes:

* Detailed descriptions of all training data, including unsharable data, its provenance, characteristics, collection methods, labeling procedures, and processing methodologies.
* A list of all publicly available training data and how to obtain it.
* A list of all training data obtainable from third parties, including details on how to acquire it (even if it involves a fee).

This approach allows for open source AI even in fields where data sharing is restricted while still providing transparency and enabling the understanding of potential biases.

### What are the key components required for an AI system to be considered Open Source AI?

According to OSAID, an open source AI system must include:

* Data Information: Detailed information about the data used to train the system.
* Code: The complete source code for training and running the system, including data processing, training procedures, validation, testing, and inference.
* Parameters: The model parameters, such as weights and configuration settings, that enable the AI system to function.

### Does the Open Source AI Definition apply to AI models and weights?

Yes, the definition applies to entire AI systems as well as individual components like models and weights. To be considered open source, models and weights must also be accompanied by the necessary Data Information and code required for their derivation.

### Why does OSAID require training code if the Open Source Definition doesn't require compilers?

AI and traditional software development are different. Compilers for software are standardized, but training code for AI is not. Therefore, providing the training code is essential for modifying and understanding how an AI system was developed, making it part of the "preferred form" for modifications.

### What is the significance of the stable release of OSAID 1.0?

The stable release of OSAID 1.0 marks a significant milestone in establishing clear criteria for Open Source AI. This definition clarifies expectations for developers, advocates, and regulators, providing a common framework for evaluating AI systems against open source principles. The global endorsements OSAID has received underscore its importance and potential to shape the future of AI development, fostering transparency, collaboration, and innovation in the field.

## Sources

* [2024 end-of-year review: Open Source AI Definition v1.0 – Open Source Initiative](https://opensource.org/blog/2024-end-of-year-review-open-source-ai-definition-v1-0)
* [Answers to frequently asked questions - HackMD](https://hackmd.io/@OSAI/definition-faq)
* [Celebrating An Important Step Forward For Open Source AI](https://foundation.mozilla.org/en/blog/celebrating-an-important-step-forward-for-open-source-ai/)
* [Open Source AI Definition Endorsements – Open Source Initiative](https://opensource.org/OSAI-endorsements)
* [Open Source AI Process – Open Source Initiative](https://opensource.org/OSAI-process)
* [OSAID Timeline – Open Source Initiative](https://opensource.org/OSAI-timeline)
* [The Open Source AI Definition – 1.0 – Open Source Initiative](https://opensource.org/OSAI-definition-1.0)
* [The Open Source AI Definition — by The Open Source Initiative](https://opensource.org/ai)