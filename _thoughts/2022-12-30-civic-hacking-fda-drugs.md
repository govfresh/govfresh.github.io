---
title: "Civic hacking FDA's National Drug Code Directory"
date: 2022-12-30
description: "Building a look-up of Food and Drug Administration approved medicines."
author: Luke Fretwell
img: drug-search-usagovfresh.png
img-feat: drug-search-usagovfresh-feat.png
img-alt: "Screenshot of USA.GovFresh drug search page."
img-caption: "Image: USA.GovFresh"
img-link: 
category:
  - Civic hacking
  - Data
  - Digital
  - Open
feature: ""
---

*(This post is part of an ongoing series documenting adventures in father-son [civic hacking](/civichacking).)*

## README

We built a drug look-up tool of Food and Drug Administration approved medicines using the National Drug Code Directory API. This includes: 

* Drug search tool
* Page listing for each FDA-approved medicine

Each drug listing includes:

* Generic name
* Manufacturer
* Labeler
* Ingredients
* Packaging
* Type
* Route

## Data

Data used for this project:

* [National Drug Code Directory](https://open.fda.gov/apis/drug/ndc/) (Food and Drug Administration)

## Kudos

Big kudos to FDA for:

* Maintaining a public application programming interface of the data.

## Demo

Drug search:

[![Screenshot of USA.GovFresh drug search page](/assets/img/posts/drug-search-usagovfresh.png)](https://usa.govfresh.com/drugs/)

Example drug listing:

[![Screenshot of USA.GovFresh drug listing page](/assets/img/posts/drug-search-listing-usagovfresh.png)](https://usa.govfresh.com/drugs/?drug=50580-369_ec2b0f73-44d3-4cfe-b9fb-39adac987116)

## Feedback

Share your feedback on the [USA.GovFresh repo](https://github.com/govfresh/usa/).