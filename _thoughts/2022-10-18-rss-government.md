---
title: "Government RSS"
date: 2022-10-18
updated: 2024-08-07
description: "Every government website should have an RSS feed. This ensures there is an open, universal standard for syndicating government information."
author: Luke Fretwell
pattern: blueprint
img: rss-header.png
img-feat: rss-feat.png
img-alt: "RSS icon"
img-caption: "RSS icon via Feather"
img-link: https://feathericons.com/
category:
  - Data
  - Digital
feature: "true"
---

## TL;DR*

Every government website should have an RSS feed. This ensures there is an open, universal standard for syndicating government information.

## The problem

While it’s important that government shares information via distributed outlets – social media, email newsletters – there isn’t one universal, open standard that is free and easy to access. Relying on social media or email newsletters forces the public to submit personal information or join a private network to subscribe to official updates. This is a barrier to equal, unfettered access to government information.

## The solution

Defaulting to an open protocol to syndicate government information makes public communications universally accessible.

Government should lead on using an open standard for syndicating its website content. All government websites should have an RSS feed. RSS is an ideal information syndication option because it’s:

* An open protocol
* Free to access
* Easy to create
* Interoperable
* Machine-readable
* Privacy ensured

## The download

RSS, or [Really Simple Syndication](https://en.wikipedia.org/wiki/RSS), is an open protocol that was created in the late 1990s “that allows users and applications to access updates to websites in a standardized, computer-readable format.”

RSS is powered by a simple XML file (such as feed.xml or rss.xml) that syndicates updated content from a website. This information, or metadata, includes title, date, description, author and audio.

Examples of government RSS feeds include [Digital.gov](https://digital.gov/index.xml) and [DigitalVA](https://digital.va.gov/feed). Major news publications such as [The New York Times](https://www.nytimes.com/rss) have a variety of RSS feed subscriptions. Podcasts are syndicated using RSS.

Some content management systems like WordPress automatically build in RSS capability and link standards (example: [whitehouse.gov/feed](https://whitehouse.gov/feed)). And RSS readers like [Feedly](https://feedly.com/) make it easy to aggregate and subscribe to multiple RSS feeds.

Popular in the early days of the internet, RSS fell out of use with the rise of social media and proprietary interests in controlling how users accessed information (with the help of algorithms).

With evolving privacy concerns and government’s need to be platform agnostic – and this includes social media – it’s important that government universally adopts RSS.

As Wired’s Brian Barrett says in “[It's Time for an RSS Revival](https://www.wired.com/story/rss-readers-feedly-inoreader-old-reader/)”:

> “The modern web contains no shortage of horrors, from ubiquitous ad trackers to all-consuming platforms to YouTube comments, generally. Unfortunately, there's no panacea for what ails this internet we've built. But anyone weary of black-box algorithms controlling what you see online at least has a respite, one that's been there all along but has often gone ignored. Tired of Twitter? Facebook fatigued? It's time to head back to RSS.”

## Code review

Example RSS XML feed file code:

```
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title>GovFresh</title>
<link>http://www.govfresh.com/</link>
<description>Government. Fresh.</description>
<item>
<title>Government RSS</title>
<link>govfresh.com/thoughts/rss-government</link>
<guid>govfresh.com/thoughts/rss-government</guid>
<pubDate>Tues, 18 Oct 2022 13:20:00 GMT</pubDate>
<description>Defaulting to an open protocol to syndicate government information makes public communications universally accessible.</description>
</item>
<item>
<title>Pedigree and public interest technology</title>
<link>https://govfresh.com/thoughts/pedigree-public-interest-technology</link>
<guid>https://govfresh.com/thoughts/pedigree-public-interest-technology</guid>
<pubDate>Tues, 16 August 2022 13:20:00 GMT</pubDate>
<description>The community that supports digital government services should be undeniably representative of everyone.</description>
</item>
</channel>
</rss>
```

## Action item

* Set up an RSS feed for the government website you manage
* Publicly display the RSS icon alongside social media icons

## Assigned to

Government:

* Chief information officers
* Chief technology officers
* Communications teams

## Learn more

* [RSS on Wikipedia](https://en.wikipedia.org/wiki/RSS#Interoperability)
* [How to Create an RSS Feed](https://www.wikihow.com/Create-an-RSS-Feed)