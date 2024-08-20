---
title: "Metadata, Open Graph and government websites"
date: 2024-01-10
modified: 
description: "Complete metadata can have a significant impact on how citizens experience government digital services."
author: Luke Fretwell
img-feat: metadata-feat.png
img-og: metadata-og.png
img-twitter: metadata-twitter.png
img-alt: "File with code icon"
img-caption: "File with code icon via Font Awesome"
img-link: https://fontawesome.com
category:
  - Data
  - Design
  - Digital
feature: "true"
---

I’ve engaged with a significant number of federal, state and local government websites in various ways and am still surprised that many fail to meet basic web metadata best practices.

Some of these shortcomings are made by government vendors responsible for managing “no-code” web platforms, but I’ve also found that many digital government leaders don’t thoroughly understand the concept, which causes them to be overlooked.

In one case, USAJOBS postings weren’t showing associated images and, when shared on social media sites, were just uninteresting lines of text. In another case, because its meta robots indexing tag wasn’t properly configured, an internet search for a large U.S. city returned no results for the official government website.

In both cases, one simple line of code on a web page made a huge impact on how the public experienced or accessed these government digital services.

## Website metadata and Open Graph

Metadata is the information about a web page that is not visible on the page but is embedded in the `<header>` tag of the HTML code.

Metadata includes, but not limited to:

* Title tag (`<title>`): Defines a page title.
* Meta description (`description`): Describes the page content.
* Meta keywords (`keywords`): A list of keywords related to the page content.
* Meta robots (`robots`): Instructs search engines to crawl the page content.
* Viewport meta tag (`viewport`): Tells how to display the page on different devices.
* Canonical tag (`canonical`): Unique URL of the page to avoid duplicates in search results.
* Open Graph Protocol: Metadata for sharing to social networks.
* Twitter card tags (`twitter:card`): Image specific to Twitter posts.
* Language meta tag (`og:locale`): Sets language of the page content.

The[ Open Graph protocol](https://ogp.me/) is a standard used by social media companies to display page metadata when users share links. While some social media companies use proprietary tags (such as Twitter), most adhere to Open Graph to make it easier for web developers and content managers to universally serve up this information.

Digital.gov offers a simple [metadata resource](https://search.gov/indexing/metadata.html) with code examples and purpose for each tag. Mozilla has more [technical and comprehensive documentation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) for web page header elements.

## Metadata importance

While all of this may seem technical and inconsequential, complete metadata can have a significant impact on how citizens experience government digital services. It can be the difference between a user quickly assessing search or social sharing information and acting on it or just simply overlooking it.

Metadata plays an important role in the web experience, including how page information displays in:

* Search engine results 
* Social media posts
* Accessibility-oriented readers
* Browser tabs/bookmarks

For context, here’s how a USAJOBS jobs listing looked without complete metadata (specifically the Open Graph image tag):

<img src="/assets/img/posts/usajobs-meta-image.png" alt="USAJOBS jobs posting on social media" width="500px"/>

And how one looks after USAJOBS properly updated its metadata image tag:

<img src="/assets/img/posts/usajobs-meta-new.png" alt="USAJOBS jobs posting on social media" width="500px"/>

With one simple line of code, the visibility of job listings and the overall USAJOBS brand was immediately elevated.

While this is an aesthetic example of how metadata can impact the visibility of a government service, the textual and machine-readable components are just as important.

## Metadata code

This is metadata, Open Graph and Twitter card code for this web page:

``` html
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
<meta name="description" content="Complete metadata can have a significant impact on how citizens experience government digital services.">
<meta name="keywords" content="Data, Design, Digital">
<meta name="author" content="Luke Fretwell">
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta property="og:locale" content="en_US">
<link rel="canonical" href="https://govfresh.com/thoughts/metadata-open-graph-government-websites" />
<title>Metadata, Open Graph and government websites - GovFresh</title>
<meta property="og:site_name" content="GovFresh">
<meta property="og:type" content="article">
<meta property="og:title" content="Metadata, Open Graph and government websites">
<meta property="og:description" content="Complete metadata can have a significant impact on how citizens experience government digital services.">
<meta property="og:url" content="https://govfresh.com/thoughts/metadata-open-graph-government-websites">
<meta property="article:published_time" content="2024-01-08 00:00:00 -0800">
<meta name="dc.date" content="2024-01-08 00:00:00 -0800">
<meta name="dc.date.created" content="2024-01-08 00:00:00 -0800" />  
<meta name="dcterms.created" content="2024-01-08 00:00:00 -0800" />
<meta property="article:author" content="Luke Fretwell">
<meta property="linkedin:site" content="https://www.linkedin.com/company/govfresh"/>
<meta name="twitter:site" content="@govfresh">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Metadata, Open Graph and government websites">
<meta name="twitter:description" content="Complete metadata can have a significant impact on how citizens experience government digital services.">
<meta property="twitter:image" content="https://govfresh.com/assets/img/posts/opengraph-twitter.png">
<meta property="og:image" content="https://govfresh.com/assets/img/posts/opengraph-og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630"> 
<meta property="og:image:alt" content="Text of whitehouse.gov metadata">
```

And this is proper metadata from a [page](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/) on whitehouse.gov:

``` html
<meta charset="utf-8">
<meta name="google" content="notranslate">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<title>Delivering a Digital-First Public Experience | OMB | The White House</title>
<link rel="canonical" href="https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Delivering a Digital-First Public Experience | OMB | The White House" />
<meta property="og:description" content="View or download as a PDF.September 22, 2023M-23-22MEMORANDUM FOR HEADS OF EXECUTIVE DEPARTMENTS AND AGENCIESFROM: Shalanda D. Young, DirectorSUBJECT: Delivering a Digital-First Public Experience On This Page I. INTRODUCTION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This memorandum provides guidance to agencies on how to design and deliver websites and digital services to the public and to assist agencies as they&hellip;" />
<meta property="og:url" content="https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/" />
<meta property="og:site_name" content="The White House" />
<meta property="article:publisher" content="https://www.facebook.com/WhiteHouse/" />
<meta property="article:modified_time" content="2023-12-21T19:04:26+00:00" />
<meta property="og:image" content="https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@whitehouse" />
```

## Metadata testing

There are tools available to test how your web pages display in search results and social media posts, including [Google Search Console](https://search.google.com/search-console/about), [Facebook sharing debugger](https://developers.facebook.com/tools/debug/) and [Twitter validator](https://cards-dev.twitter.com/validator). Using these tools is a helpful way to understand where you stand with your web metadata.

## Parting thoughts

Failing to provide complete metadata is a shortcoming in government digital service delivery.

Digital government team members – product managers/owners, content designers, developers – should all be familiar with metadata and incorporate it into the review process. Giving attention to metadata is an opportunity to fully and effectively serve the citizen experience.

Every government website should have complete metadata. Having this shows a commitment to structured web data, a solid understanding of digital communications and an appreciation for the role both play in good government digital service delivery.

## Links

* [Metadata and tags you should include in your website](https://search.gov/indexing/metadata.html) (Digital.gov)
* [What's in the head? Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) (Mozilla Developer Network)
* [Open Graph protocol](https://ogp.me/)
* [A Guide to Sharing for Webmasters](https://developers.facebook.com/docs/sharing/webmasters/) (Meta)
* [Getting started with Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) (X)