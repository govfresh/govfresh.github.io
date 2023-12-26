---
title: "Metadata, Open Graph and government websites"
date: 2023-12-21
description: "Every government website should follow Open Graph protocol and have complete metadata."
author: Luke Fretwell
img: -header.png
img-feat: opengraph-feat.png
img-og: opengraph-og.png
img-twitter: opengraph-twitter.png
img-alt: "Open Graph logo"
img-caption: #""
img-link: 
category:
  - Data
  - Design
  - Digital
feature: "true"
---

Metadata, Open Graph and government websites

https://archive.govfresh.com/posts/usajobs-meta-image
https://ogp.me/#types

Every government website should have complete metadata. While this may seem inconsequential, it isn’t, and should . It also reflects an understanding of simple basic data architecture. While some metadata may be , much of it is helpful and relatively easy to include.

Some content management systems will seamlessly populate this information, .

Website metadata
Website metadata refers to the information about a webpage that is not visible on the page itself but is embedded in the HTML code. This metadata provides additional details about the webpage and its content, making it easier for search engines, browsers, and other services to understand and categorize the information. Metadata includes various elements such as title, description, keywords, author, character set, and more.

Source: [Mozilla Developer Network (MDN) - Metadata in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Metadata)

Open Graph
The Open Graph protocol is a standard used by websites to designate web page metadata. The information provided in Open Graph tags are used to display key information on social media posts, such as page title, description and an associated image.

Importance of Open Graph metadata
One helpful purpose of this data is that it is used to display key information on social media posts, such as page title, description and an associated image.
“OpenGraph tags are important because they provide structured information about a web page's content when shared on social media platforms. They help control how the content appears when shared, allowing for a more visually appealing and informative presentation. OpenGraph tags influence the title, description, image, and other elements displayed in social media previews, enhancing the user experience when links are shared.”
Metadata examples

   <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="description" content="Every government website should follow Open Graph protocol and have complete metadata.">
    <meta name="keywords" content="Data, Design, Digital">
    <meta name="author" content="Luke Fretwell">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="https://govfresh.com/assets/img/posts/opengraph-og.png">
   <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">    
    <meta property="og:image:alt" content="Open Graph logo">
   <meta property="article:author" content="Luke Fretwell">

Open Graph
   <meta property="og:site_name" content="GovFresh">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Metadata, Open Graph and government websites">
    <meta property="og:description" content="Every government website should follow Open Graph protocol and have complete metadata.">
    <meta property="og:url" content="http://localhost:4000/thoughts/open-graph-government-websites">

Twitter metadata

   <meta name="twitter:site" content="@govfresh">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Metadata, Open Graph and government websites">
    <meta name="twitter:description" content="Every government website should follow Open Graph protocol and have complete metadata.">
   <meta property="twitter:image" content="http://localhost:4000/assets/img/posts/opengraph-twitter.png">
    
    


This information is included in the <meta> tags in the <head> of a web page. There are many different metadata types, but a few common ones are:
og:title - The title of your web page.
og:type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
og:image - An image that represents the page (or website) content.
og:url - The complete URL of the web page.



