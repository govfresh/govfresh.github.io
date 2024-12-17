---
title: "Civic hacking the Federal Register"
date: 2022-10-31
description: "Building an executive branch agency list using the National Archives' Federal Register API."
author: Luke Fretwell
img: civic-hacking-header.png
img-feat: civic-hacking-feat.png
img-alt: "Classical building icon inside of HTML closing brackets."
img-caption: "Icons via OpenMoji"
img-link: https://openmoji.org/
category:
  - Civic hacking
  - Data
  - Open
feature: ""
---

*(This post is part of an ongoing series documenting adventures in father-son [civic hacking](/civichacking).)*

## README

We built a listing of executive branch agencies and individual agency pages using the Federal Register API. This includes agency pages with: 

* Agency logo, description and website
* Subagencies within the agency
* Recent agency Federal Register documents

## Data

Data used for this project:

* [Federal Register API](https://www.federalregister.gov/api/v1/agencies/) (U.S. National Archives and Records Administration)

## Issues

Issues we found using the API:

* Agency logos are poor quality.
* Agency data (about, website) is inconsistent, needs copyediting or is empty.

## Kudos

Big kudos to the National Archives for:

* Maintaining a public repository of the data.

## Demo

Executive agencies:

[![Screenshot of USA.GovFresh executive branch agency page](/assets/img/posts/executive-usagovfresh.png)](https://usa.govfresh.com/government/executive/)

Example agency:

[![Screenshot of Department of Interior page on USA.GovFresh](/assets/img/posts/executive-agency-usagovfresh.png)](https://usa.govfresh.com/government/executive/?name=interior-department)

## Feedback

Share your feedback on the [USA.GovFresh repo](https://github.com/govfresh/usa/).