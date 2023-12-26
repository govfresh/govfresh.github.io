---
title: "Father-son civic hacking: Open Data Day 2022"
date: 2022-03-10
description: "Kickstarting USA.GovFresh, beginning with Federal Register open data."
author: Luke Fretwell
img: civic-hacking-header.png
img-feat: civic-hacking-feat.png
img-alt: "Classical building icon inside of HTML closing brackets."
img-caption: "Icons via OpenMoji"
img-link: https://openmoji.org/
category:
  - Civic hacking
  - Data
  - Digital
feature: 
---

For [Open Data Day](https://opendataday.org) 2022, my son and I set up [USA.GovFresh](https://usa.govfresh.com).

We started with a [government](https://usa.govfresh.com/government) section that displays all of the U.S. federal agencies, pulling data from the [Federal Register agency API](https://www.federalregister.gov/api/v1/agencies/).

The main government page displays all top-level agencies and other independent organizations maintained by the federal government. 

Each agency profile page (example [USDA](https://usa.govfresh.com/government/?name=agriculture-department)) contains:

* organization name (and shortname)
* organization logo
* short description
* website link
* parent agency link (if any)
* list of the subagencies (if any)
* latest published Federal Register documents

While playing with the data, it would be great to see National Archives and the Federal Register update the agency logos and standardize the descriptions. Many images are missing or of poor quality, and the agency descriptions could be better scripted.

Going forward, we'll use [USA.GovFresh](https://usa.govfresh.com) as a place to build together and learn about government in the context of coding and public data.

If you have ideas for us, add them to the [GitHub issues queue](https://github.com/govfresh/usa/issues).

[Visit USA.GovFresh.](https://usa.govfresh.com)