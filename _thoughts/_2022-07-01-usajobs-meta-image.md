---
title: "A meta tag on USAJOBS posts could substantially increase the visibility of federal government job opportunities"
date: 2022-07-01
description: "One simple piece of code to the U.S. government's employment website could go a long way in increasing social media reach."
author: Luke Fretwell
img: lincoln-memorial-lights.jpg
img-feat: lincoln-memorial-lights-feat.jpg
img-alt: "Lincoln Memorial at night with car lights"
img-caption: Dmcooperphotography, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons
category:
  - Design
  - Digital
feature: ""
redirect_from:
  - /ideas/usajobs-meta-image/
---

## Idea

When USAJOBS listings are posted to social media, a meta image doesn't display. Adding a default image and one line of code to USAJOBS website would help to elevate visibility of the job listings on social media feeds.

_* Too long; didn’t read_

## Context

### Open Graph protocol

The [Open Graph protocol](https://ogp.me/) is a standard used by websites to designate web page metadata. One helpful purpose of this data is that it is used to display key information on social media posts, such as page title, description and an associated image.

This information is included in the `<meta>` tags in the `<head>` of a web page. There are many different metadata types, but a few common ones are:

* `og:title` - The title of your web page.
* `og:image` - An image that represents the page (or website) content.
* `og:url` - The complete URL of the web page.

### USAJOBS

[USAJOBS](https://usajobs.gov) is the official U.S. government website where agencies post federal employment opportunities.

## Issue

While it displays most of the basic `<meta>` tags, USAJOBS currently does not use the `meta property="og:image"` tag.

What a current USAJOBS listing looks like when posted to social media:

<img src="/assets/img/posts/usajobs-meta-image.png" alt="USAJOBS jobs posting on social media" width="500px"/>

If USAJOBS leveraged the `meta property="og:image"` tag, it could significantly increase social media visibility to the job posting, USAJOBS brand or agency advertising the job opportunity.

## Idea

* Add a `meta property="og:image"` for all USAJOBS postings.
* First option: Make the image inspiring, like the U.S. flag or a patriotic call to action (example: "Serve your country.")
* Second option: Make the image the logo of the agency posting the listing.
* Third option: Make the image the USAJOBS logo to bring visibility to the website as a place for federal government job opportunities.

## Update

USAJOBS has fixed this issue.

<img src="/assets/img/posts/usajobs-meta-new" alt="USAJOBS jobs posting on social media" width="500px"/>