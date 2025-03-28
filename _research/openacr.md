---
title: "OpenACR"
date: 2025-03-28
description: "GovFresh research notes on OpenACR Editor."
author: GovFresh
img-feat: research-openacr-feat.png
img-og: research-openacr-og.png
img-twitter: research-openacr-twitter.png
img-alt: "OpenACR icon"
img-caption:
img-link:
audio: openacr.mp3
category:
  - Accessibility
  - Data
  - Design
  - Open source
feature: "true"
feedback: #true
feedback-link: 
launched: #true
contributors:
#  - 
---

## Summary

The OpenACR Editor is a free online tool from the U.S. General Services Administration (GSA) that helps users create Accessibility Conformance Reports (ACRs). It follows the Voluntary Product Accessibility Template (VPAT) standard, guiding users through documenting how information and communication technology (ICT) products meet Section 508 requirements. The tool is designed for accessibility experts, streamlining compliance reporting. OpenACR ensures clarity and consistency in accessibility documentation, making it easier to assess conformance.

## FAQs

### What is OpenACR and what problem does it aim to solve?

OpenACR (Open Accessibility Conformance Report) is a digital-native format for Accessibility Conformance Reports (ACRs). It aims to improve the use and effectiveness of ACRs, which evaluate the accessibility of digital products and services against standards like Section 508. The primary problem it addresses is the difficulty in searching, comparing, and tracking the accessibility conformance claims typically provided in static, non-machine-readable formats like MS Word or PDF.

### What is the OpenACR Editor and how does it work?

The OpenACR Editor is a free online tool created by the GSA to guide users through the process of creating Accessibility Conformance Reports in the OpenACR format. It takes evaluators step-by-step through the different categories of the OpenACR format, allowing them to build a report from scratch or import an existing one. The editor, built with JavaScript, enables users to save the resulting OpenACR in multiple formats, including YAML (a human and machine-readable format) and HTML. The tool ensures the generated document validates against the OpenACR schema.

### Why is a machine-readable format for ACRs important?

A machine-readable format, such as YAML, allows for easier processing, searching, and comparison of accessibility conformance claims across different digital products and services. This enables buyers to make informed decisions, managers to understand potential limitations for their staff, and executives to better assess accessibility risks. Furthermore, it facilitates the integration of accessibility compliance into automated processes ("compliance as code") and allows for tracking changes and improvements in accessibility over time through version control systems.

### How does OpenACR relate to existing accessibility reporting standards like VPAT?

OpenACR builds upon established standards, starting with the ITI VPAT (Voluntary Product Accessibility Template) framework, specifically VPAT 2.4Rev 508. The OpenACR Editor is designed to feel familiar to those who have used VPATs before. However, OpenACR aims to modernize and enhance VPATs by providing a structured, machine-readable format (YAML) that overcomes the limitations of static documents like Word files. This allows for greater functionality, such as easier comparison and integration with other systems.

### What are the intended benefits of the OpenACR initiative?

The intended benefits of the OpenACR initiative include: making it easier for agencies to evaluate the accessibility of digital tools; enabling simple comparisons of accessibility claims; helping managers identify interfaces that may limit staff; allowing executives to better understand accessibility risks; facilitating the sharing and accessing of accessibility information; ensuring identified accessibility barriers are addressed and tracked over time; and ultimately promoting the creation of more accessible government websites and services for people with disabilities.

### How will the GSA facilitate the sharing and tracking of OpenACR documents?

The GSA plans to create an OpenACR repository where agencies can store their reports, making them easily accessible to everyone. Additionally, the goal is to eventually store the Accessibility Conformance Reports in an open-source code repository, allowing for the tracking of the history of each report, noting accessibility improvements, and monitoring changes over time through version control.

### How does the concept of "compliance as code" relate to OpenACR?

"Compliance as code" refers to incorporating compliance requirements into automated processes using machine-readable formats. OpenACR, with its structured and machine-readable YAML format, is a key enabler of "compliance as code" for accessibility. By having ACRs in a format that can be easily parsed and processed by software, agencies and vendors can automate the assessment of accessibility conformance, moving beyond manual, checklist-based approaches and facilitating continuous monitoring and improvement.

### How can users provide feedback on the OpenACR Editor and contribute to the OpenACR project?

The GSA encourages users to try the OpenACR Editor and provide feedback via email to openacr@gsa.gov or through the OpenACR GitHub repository (GSA/openacr). The project is described as a work in progress, and user feedback is valued for its development. Contributions to the project are also encouraged, with more information available in the CONTRIBUTING.md file on the GitHub repository.

## Sources

* [OpenACR](https://acreditor.section508.gov/)
* [GitHub - GSA/openacr](https://github.com/GSA/openacr)
* [Open Accessibility Conformance Reports](https://gsa.github.io/openacr/)
* [The need for accessibility compliance as code - Route Fifty](https://www.routefifty.com/ideas/technology/2021/02/need-accessibility-compliance-code/362267/)
* [Evaluating your agency’s accessibility just got a whole lot easier with GSA’s OpenACR Editor](https://digital.gov/2024/07/08/evaluating-your-agency-accessibility-just-got-a-whole-lot-easier-with-gsa-openacr-editor/)