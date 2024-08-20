---
title: "Analyzing U.S. federal and state government website metadata"
date: 2024-02-15
modified: 
description: "How government-managed domains conform to basic metadata practices."
author: Luke Fretwell
img-feat: gov-metadata-feat.png
img-og: gov-metadata-og.png
img-twitter: gov-metadata-twitter.png
img-alt: "Window icon"
img-caption: "Window icon from Font Awesome"
img-link: https://fontawesome.com
category:
  - Civic hacking
  - Data
  - Design
  - Digital
feature: "true"
---


After writing about [metadata and government websites](https://govfresh.com/thoughts/metadata-open-graph-government-websites), my son and I created a [tracker](https://gov-metadata.civichackingagency.org/) to learn how government domains perform on this front. 


## Importance of metadata

As I wrote earlier, government website metadata may seem technical and inconsequential, but complete metadata can have a significant impact on how citizens experience government digital services, including:



* Accessibility-oriented readers
* Search engine results
* Social media posts

Good metadata can be the difference between a user quickly assessing search or social sharing information and acting on it, or simply overlooking it. One example is [how poor metadata may impact government job postings on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7159297607272402944/).


## Domain data

Domain data was pulled from data provided by Cybersecurity & Security Infrastructure Agency and the General Services Administration. These include .gov domains, but also non-.gov domains, such as .com or .org.


## Scoring and grading

We created a score and grade for each domain. This reflects the metadata state for the domain homepage, and not the entire site. Scores are based on the presence of 13 metatags. Grades are based on the score, converted into A-F grades based on the standard academic grading scale.


## Why we chose the metatags we did

We prioritized the metatags based on:



* Accessibility
* Search engine optimization
* Social media optimization
* Open standards

Good website metadata is good web accessibility and this should be number one priority. The obvious ones are title, description and even viewport.

With respect to search and social media, we believe both are equally as important in the customer experience journey. Currently, there’s an emphasis on search engines, but search isn’t the only pathway to government. Social media plays a critical role in the government experience, so we believe government should be more comprehensive in its adoption of social media related metadata.

We defaulted to [Open Graph](https://ogp.me/), as it’s the standard all social media platforms have adopted. X (Twitter) has custom tags, but we did not include those, because OG will render in their absence. We noticed in a few instances that federal agencies were using the X tags, but not OG, so we felt that emphasizing the latter and including it in the validation was important, because we believe government should prioritize social media metadata and default to open standards.


## Current results

_(as of 02/15/24)_

For domains managed by the federal government:



* Average score: 39%
* Average grade: F

For domains managed by state governments:



* Average score: 44%
* Average grade: F


## What we’ve learned

Government is failing at basic web metadata hygiene. With the increased emphasis and resourcing on digital service and customer experience, it’s a little surprising something so simple as this has been overlooked.

Much of the digital service focus has been on standards around aesthetic uniformity (such as the [U.S. Web Design System](https://designsystem.digital.gov/)) or the delivery process (such as agile development). While these are important, there doesn’t appear to be an earnest, uniform data strategy, as if this is tertiary.


## Recommendations

Some recommendations:



* Create metadata awareness and documentation on [Digital.gov](https://digital.gov) or [Data.gov](https://data.gov).
* Establish website metadata standards for all government organizations.
* Better align the work of the Chief Data Officers Council, Chief Information Officers Council, GSA, 18F and U.S. Digital Service (others?) to socialize the importance of this, but to also think deeper about the importance of data as a strategy.
* Train product owners, content designers and developers on metadata and create mechanisms when deploying that ensure these are included.
* Include metadata in site scans (similar to accessibility) before deploying to live.
* Train executives on what good (and bad) metadata looks like in the wild. Many senior leaders are actively using social media and should flag when data isn’t displaying properly on the internet. Even executives have a role in web metadata hygiene and aren’t exempt from not seeing something and saying something.


## The response

[FedScoop](https://fedscoop.com/on-some-basic-metadata-practices-us-government-gets-an-f-per-new-online-tracker/), [StateScoop](https://statescoop.com/state-government-websites-metadata-accessibility/) and [Data is Plural](https://www.data-is-plural.com/archive/2024-01-31-edition/) have reported on this, which has heightened government interest in the tool and how to better assess and address these issues.

The response has been positive and encouraging.

We’ve received direct feedback from federal government folks – even at the senior level – who’ve said they’re reviewing our methodology and findings to address their metadata shortcomings. There also appears to be discussion around how these might be incorporated into broader, government-wide guidance or standards.


## Changelog

We created a [changelog](https://gov-metadata.civichackingagency.org/changelog.html) to show the latest updates. Since first publishing and notifying folks, we’ve seen some improvements. Of note:



* federalregister.gov / Grade: F → D / Score: 8% → 62% (1 → 8 of 13 tags)
* fbi.gov / Grade: F → D / Score: 0% → 69% (0 → 9 of 13 tags)
* dhs.gov / Grade: F → A / Score: 38% → 100% (5 → 13 of 13 tags)
* hud.gov / Grade: F → F / Score: 0% → 54% (0 → 7 of 13 tags)
* usps.com / Grade: F → D / Score: 0% → 69% (0 → 9 of 13 tags)
* energy.gov / Grade: F → A / Score: 38% → 92% (5 → 12 of 13 tags)
* ssa.gov / Grade: F → A / Score: 31% → 100% (4 → 13 of 13 tags)
* nrc.gov / Grade: C → A / Score: 77% → 100% (10 → 13 of 13 tags)

Whether these changes are a result of our work or coincidental timing, it’s encouraging to see the progress.


## Feedback, future updates

We are updating the data regularly, but if organizations would like to have domains re-scanned, they can [submit a data update request issue](https://github.com/civichackingagency/gov-metadata/issues/new?assignees=&labels=data+update&projects=&template=data-update-request.md&title=Update+data%3A+%5BDOMAIN%5D) on GitHub, and we’ll respond promptly.

We have ideas for future scans, so stay tuned. Of course, we’d love to get feedback on how we might improve this tool. To do so, [submit an issue in the GitHub repo](https://github.com/civichackingagency/gov-metadata/issues).
