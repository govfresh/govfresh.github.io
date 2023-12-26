---
title: "Coding a COVID-19 dashboard (with my 13 year-old son)"
date: 2022-01-11
description: "Adventures in father-son civic hacking."
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
  - Open
---

At the height of the COVID-19 pandemic, my 13 year-old son was finishing his daily distance learning school work too quickly and had too much time on his hands. Rather than watch him spend hours playing Minecraft or watching YouTube, in a moment of parental despair, I told him he just needed to start coding more.

Over the years, we've worked together on teaching him to code, starting with Scratch then HTML. He's very much a product of his generation, with tools and information at his disposal coupled with an autodidactic mindset.

Armed with those, I quickly realized he's progressed more than I imagined.

One afternoon, we took the dog for a walk, and I explained to him how application programming interfaces worked. I told him if he learned how to pull APIs onto a web page or app, he could easily build fun projects. I said that there are tons of interesting APIs, especially ones managed by government, such as those that are population or health related.

After the walk, we set up his workstation in my office, and he proceeded to learn about APIs. 

"OK, I figured it out," he says about an hour later.

I walked over to his side of the office and looked at his screen, thinking he'd found some API resources and now understood the general concepts of how they work.

What I saw was a dropdown form field on a blank, white web page. He clicked on the dropdown, which displayed a list all of the U.S. states. He selected California, where we live. Below the dropdown were two lines of text: one for the state's population and another for the number of people who had been vaccinated.

"I'm using the Census population and CDC vaccine APIs," he said.

He figured out in an hour what I thought would keep him busy for a few days.

To keep him occupied, we started working on a dashboard of COVID information based on other API data provided by the U.S. Census Bureau and Centers for Disease Control and Prevention. We moved it to GitHub and used Bootstrap and Font Awesome to further build out the front end and make it look as aesthetically pleasing as the two of us could make it.

When I mentioned that it would be nice to include a list of vaccination sites, he pulled in location data from the Google Maps API.

Ultimately, we built a [COVID Dashboard](https://usa.govfresh.com/covid/) ([repository](https://github.com/govfresh/usa/tree/main/covid)) of U.S. state-by-state COVID-19 updates that includes:

* Total vaccination rates
* Number of vaccinations yesterday
* Mask mandate status
* Vaccination locations

When I look at the silver linings of the pandemic, this is one of them.

I'm also reminded that, when you let them, kids will never stop surprising you.

Stay tuned for more father-son civic hacking.