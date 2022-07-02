---
date: 2022-07-01
title: "Add image meta tag to USAJOBS posts to increase social media reach"
description: "One simple piece of code to the U.S. government's employment website could go a long way in increasing the visibility of federal job opportunities."
author: Luke Fretwell
img-feat: 
done: 
warning: true
status-link: https://www.linkedin.com/feed/update/urn:li:activity:6945894020908810240?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6945894020908810240%2C6946209996678328320%29
category:
  - Digital
feature: ""
---

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

<img src="/assets/img/ideas/usajobs-meta-image.png" alt="USAJOBS jobs posting on social media" width="500px"/>

If USAJOBS leveraged the `meta property="og:image"` tag, it could significantly increase social media visibility to the job posting, USAJOBS brand or agency advertising the job opportunity.

## Idea

* Add a `meta property="og:image"` for all USAJOBS postings.
* First option: Make the image inspiring, like the U.S. flag or a patriotic call to action (example: "Serve your country.")
* Second option: Make the image the logo of the agency posting the listing.
* Third option: Make the image the USAJOBS logo to bring visibility to the website as a place for federal government job opportunities.