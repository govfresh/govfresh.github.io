---
layout: news
title: "Government websites fail basic cybersecurity practices"
date: 2024-10-22
author: Luke Fretwell
description: "ScanGov adds security grades, scorecards."
img-feat: scangov-security.png
img-og: scangov-security.png
img-twitter: scangov-security.png
img-alt: "Screenshot of web page showing security scores for government websites"
img-caption: "Screenshot of ScanGov web page showing security grades and scores for government websites."
img-link: 
category:
  - Civic hacking
  - Cybersecurity
---

*(Disclosure: [ScanGov](https://scangov.org) is a project I maintain with my son.)*


ScanGov [released](https://docs.scangov.org/blog/new-gov-website-security-grades-scores) a new indicator that assesses how federal and state government websites fare on basic cybersecurity practices.

The scans grade on adoption of Content Security Policy, HTTP Strict Transport Security, X-Content-Type-Options and security.txt.


## Grades

[Overall](https://scangov.org/?field=security&level=1) average grade was an ‘F’. [Federal](https://scangov.org/?field=security&level=2) websites received an average score of 25% and [states](https://scangov.org/?field=security&level=3) 31%.

Seven federal websites received an ‘A’. No state websites scored an ‘A’, however, five received a ‘C’.


## Content Security Policy

[Content Security Policy](https://docs.scangov.org/content-security-policy) is a security feature that defines rules for safe content and protects websites from attacks like XSS and clickjacking.

“Website owners should also consider implementing a CSP,” says the [Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/news-events/news/website-security#:~:text=Implement%20a%20Content%20Security%20Policy) in a website security blog post. “Implementing a CSP lessens the chances of an attacker successfully loading and running malicious JavaScript on the end user machine.”


## HTTP Strict Transport Security

The Office of Management and Budget Memorandum [M-15-13](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2015/m-15-13.pdf) requires agencies to encrypt HTTP traffic that travels over the public internet to or from a federal system, using HTTPS and [HTTP Strict Transport Security](https://docs.scangov.org/https-hsts).

“Websites and services available over HTTPS must enable HTTP Strict Transport Security (HSTS)12 to instruct compliant browsers to assume HTTPS going forward,” says OMB. “This reduces the number of insecure redirects, and protects users against attacks that attempt to downgrade connections to plain HTTP.”

According to [CIO.gov](https://https.cio.gov/hsts/), “The policy should be deployed at https://domain.gov, not https://www.domain.gov.”


## X-Content-Type-Options

[X-Content-Type-Options](https://docs.scangov.org/x-content-type-options) prevents sites from masking a file type. cloud.gov sets this by [default](https://cloud.gov/docs/management/headers/) if applications do not already have it. It is also recommended by Open Worldwide Application Security Project, or OWASP, as part of its [security headers project](https://owasp.org/www-project-secure-headers/#div-headers).


## security.txt

[security.txt](https://docs.scangov.org/security-txt) is a text file located on the site root-level or `/.well-known/` directory that helps improve vulnerability disclosure by giving security researchers clear contact and reporting information. security.txt is an accepted standard ([RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)) by the [Internet Engineering Task Force](https://www.ietf.org/).

“In an effort to accelerate the delivery of *all* notifications, CISA supports using the ‘security.txt’ standard to streamline notifications and reduce the risk of compromise,” [says](https://www.cisa.gov/news-events/news/securitytxt-simple-file-big-value) CISA. “It not only helps our work but also supports other partners that try to warn organizations of internet-accessible vulnerabilities susceptible to cyber threat actors – this is most important for organizations aligned to our most valuable critical infrastructure sectors.”

CISA also recommends security.txt in its [Cross-Sector Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals): “All public-facing web domains have a security.txt file that conforms to the recommendations in RFC 9116.”
