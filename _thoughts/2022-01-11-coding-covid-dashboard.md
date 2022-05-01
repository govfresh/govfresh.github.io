---
title: "Coding a COVID-19 dashboard (with my 13 year-old son)"
date: 2022-01-11
description: "Adventures in father-son civic hacking."
author: Luke Fretwell
pattern: pattern-1
#img: 
#  - <svg viewBox="0 0 556 556" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M538.56 344.64C520.08 353.601 512.24 312.16 482.001 304.32C477.52 339.039 464.079 372.082 443.36 400.64C469.122 416.32 502.161 392.242 508.321 415.761C515.04 441.523 438.88 517.681 414.801 509.281C395.199 502.562 419.281 467.84 403.602 441.519C375.043 463.917 340.883 477.917 304.481 482.398C312.321 512.078 353.2 519.918 344.243 538.398C333.602 561.359 225.523 561.359 212.083 538.398C199.763 517.117 240.083 510.957 247.364 481.839C212.645 476.8 179.602 462.8 152.165 440.96C136.485 467.28 160.005 501.999 140.966 508.722C117.443 517.679 41.282 441.519 48.001 415.761C54.1612 392.241 87.2 416.32 112.962 400.64C92.243 372.64 78.802 339.601 74.321 304.32C44.079 312.16 36.801 353.601 17.762 344.64C-5.199 333.999 -5.199 225.92 17.762 212.48C39.043 200.16 45.203 241.039 74.883 247.761C79.9221 213.042 93.922 180.562 115.762 152.562C88.883 135.761 54.16 160.402 46.883 140.8C38.4807 117.28 114.641 41.12 140.399 47.839C164.481 53.9992 139.282 87.601 156.079 113.921C182.958 93.761 214.88 80.882 248.477 75.843C241.758 45.605 200.317 39.445 212.637 18.163C226.078 -4.79799 334.157 -4.79799 344.797 18.163C353.758 37.202 311.758 44.483 304.477 75.284C339.196 79.7645 372.239 93.206 400.239 113.925C417.04 87.601 392.399 53.999 415.923 47.839C441.681 41.1202 517.843 117.28 509.443 141.359C502.162 160.961 467.443 136.879 441.123 153.121C462.404 180.562 476.963 213.601 482.002 248.32C511.682 241.039 517.842 200.718 539.123 213.039C561.521 225.922 561.521 333.999 538.56 344.639L538.56 344.64Z" fill="#ffffff"/></svg>
img-feat: 
img-alt: ""
img-caption: "Icon: Covid by Roman Lychkov from NounProject.com"
img-link: https://thenounproject.com/icon/covid-3674642/
category:
  - Data
  - Digital
  - Hacking
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