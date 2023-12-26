---
title: "Trust the vote: How open source will change our elections"
date: 2012-02-13
description: After watching the documentary Hacking Democracy, I started researching how government uses voting technology to conduct elections. That's how I learned about the work of Open Source Digital Voting Foundation.
author: GovFresh
---



After watching the documentary <a href="http://govfresh.com/2012/01/hacking-democracy-and-open-source-voting/">Hacking Democracy</a>, I started researching how government uses voting technology to conduct elections. That's how I learned about the work of <a href="http://osdv.org">Open Source Digital Voting Foundation</a>.

I asked OSDV Co-Executive Director and Chief Development Officer Greg Miller to share what his organization is doing to make election software more open and secure and how others can help.

<h2>What is OSDV and how did it begin, evolve?</h2>

The Open Source Digital Voting (OSDV) Foundation was founded in November 2006 as a consequence of an off-hand conversation in a venture capital setting regarding <a href="http://en.wikipedia.org/wiki/Disintermediation">disintermediation</a> of markets. The elections technology industry proved to be a sound example of a malformed dysfunctional market, to the point where there were actually disincentives to truly innovate. We quickly realized that between these disincentives and barriers to entry erected through the creation of the <a href="http://en.wikipedia.org/wiki/Help_America_Vote_Act">Help America Vote Act</a> legislation (HAVA) -- such barriers that heavily favored the few incumbents and protected their market access and share -- there was very little likelihood things could or would improve for the use of computers in elections, especially for the so-called eVoting machinery that cast and counted (recorded) ballots. <a href="http://www.youtube.com/watch?v=pdEwSehpLd0&amp;feature=plcp&amp;context=C3d41012UDOEgsToPDskK7Sq11IGGWLkp_WkE04j7G">Indeed</a>, the very thing intended to lead us away from the hanging chad in 2002 had done nothing but build mistrust of any election using a computer by 2006.

I note that at the time of founding, our name, which was intentionally provocative, was intended to identify with two imperative concepts:

<ol>
	<li>That the only pathway to accuracy, transparency, verification, and security of what is nothing short of critical democracy infrastructure was open source; and</li>
	<li>That our charge was to apply open source to any machinery employed in the service of voting, in other words, "Digital Voting."</li>
</ol>

A funny thing happened along the way from 2006 to the present. Devices connected to the Internet proliferated at a rate that caught many of us who have noodled in packet switching network since the early days of the ARPANET by surprise. The rise of so-called smart phones in the past 24 months alone has validated the principles of the "stupid network." The intelligence lies on the edge, not the core and today any digital device is assumed to have or easily can obtained connection to the Internet. And we're rapidly moving from automobiles to refrigerators and televisions. This would come to bite our brand strategy squarely in the petard.

In 2010, for reasons beyond the scope of this discussion, we chose to engage in a project in the District of Columbia in order to successfully install a first piece of our open source elections administration software in production -- ballot generation and distribution. In the course of that, we also were involved in an experiment to digitally return the marked ballots. This was ONLY for overseas military voters. Almost predictably, the experiment which was open to a public test to attempt to compromise the system, failed due to some missteps in the data center we had no control over.

We were tarred and feathered for engaging in something we do NOT believe in (with today's public packet-switched network): Internet Voting. In the outcome of a gaggle of teachable moments we had our public relations agency (working in crisis mode), to perform some good old-fashion market testing for us. We asked them to test the market for consumer understanding of "digital voting." The results were somewhere between alarming and disturbing. Seventy-two percent of those surveyed equated "digital" with meaning something to do with the "Internet." And suddenly we realized people thought the foundation was about Internet Voting!  This year, we're beginning the process of evolving our name into OSET Foundation, as it more accurately reflects what we're actually about: Open Source Elections Technology.

The OSDV Foundation is about creating an open source elections technology framework based on open data standards that ultimately any elections jurisdictions can adopt, adapt and deploy to ensure accurate, transparent, verifiable and secure public elections.

To do all of this, we have created what is called the <a href="http://www.trustthevote.org/">TrustTheVote Project</a> to handle this work. The foundation knows another long-term project -- the repository to house all of the work -- will need to be created and sustained in order to archive and make it available. All of the resources will require more than just GitHub.

Today, we've successfully laid the data layer foundation, built the third party voter registration service, are working toward the state voter registration solution, developed and deployed universal ballot generation and blank ballot distribution tools, and have design work underway on election night reporting services and digital poll books. In five years we've come a long way, but there is a considerable portion of the journey toward real change remaining to traverse.

<h2>What do municipalities pay for proprietary elections technology?</h2>

Millions of dollars, <em>literally</em>. Complete voting systems plus back-end elections administration technology requires a significant enterprise grade solution investment. The real expense is in a "long tail" of service, support, maintenance and, hopefully, upgrades. But there are "costs" that are "paid" that extend beyond the equipment, deployment and maintenance itself. The very nature of the black box solutions, the two remaining vendors, plus a struggling third sell and service forces very little in the way of robust audit loops, introduce errors and omissions to the process of elections, and catalyze distrust, leading to nearly knee-jerk reactionary challenges, contests and legal fights over recounts.

Plenty has been written on the real costs. Let me offer at least a modicum of authority behind these statements: I was an appointed member and served for nearly 2 years (until the conclusion and our final report) on the San Francisco Voting Systems Task Force reporting to the commissioners. This was an extensive and in-depth effort by a 7-person task force to conduct a deep dive on the real direct and indirect costs of current elections technology, and to recommend a strategy going forward for San Francisco City and County's current and future election systems strategy and decisions.

<h2>Why is open source software better than proprietary?</h2>

There are megabytes of content on the topic of open source verses proprietary software. Perhaps the bad news is that I am not convinced that open source software is always better than the alternatives. And, in fact, it's more than just OSS versus proprietary. There are three popular models of software and two ways to analyze them: development and deployment. The three models are:

<ul>
	<li>Open source</li>
	<li>Disclosed source</li>
	<li>Closed source</li>
</ul>

By "deployment" in this sense, I am jacking the term to refer to a "business model." That is to say, for this discussion, there is no meaningful difference between the three models in terms of actual deploying the software into productive use, but there are business model implications in deployment itself. Quickly, let's consider what the three are (this deserves a table, probably).

<h3>Open source </h3>

<ul>
	<li><strong>Development view</strong>: The source code that comprises the software "app" or "service" is completely transparent and can be accessed, examined and studied. It may be developed by one or millions of developers in a loose highly distributed collaboration, typically made possible by the Internet and associated tools: source code repositories, wiki sites, blogs, discussion forums, test rigs, etc.</li>
	<li><strong>Deployment view:</strong> The software is subject to a special type of license that allows anyone accepting the license to freely access, obtain a copy of, borrow from, modify, enhance, extend or have unbridled use of the source code provided the typically agree to the following (OSS licenses vary depending on the philosophy or model, and that discussion is beyond the scope here), in general, that any modifications to the source code made are contributed back to the base of code for others to benefit from (including of course discovered and repaired defects or "bugs"); and not to place any further restrictions on downstream use of the code as modified by the licensee. I have really over-simplified this description and plead with readers to understand there is a whole bunch more to OSS licensing than what I've explained here, but this is sufficient to make the comparison.</li>
</ul>

<h3>Disclosed source</h3>

<ul>
	<li><strong>Development view</strong>: The source code is designed and developed typically in a commercial software development enterprise for purposes of licensing (selling) the software. The development processes may be very similar to that of OSS but, to be clear, the intent is to build a proprietary intellectual property asset.</li>
	<li><strong>Deployment view</strong>: Disclosed source is licensed and distributed like any commercial software product. The difference is, on request, the software source code may be examined, usually under supervision or in a controlled environment for audit or valuation purposes, for development partnership purposes to make technical assessments or decisions, and to be held in third party escrows for business purposes. The software license schema is that of a "right to use," "run time" or "object" license and NOT a source code license. And while the maker may well offer a source code license, if so, it is typically very expensive (compared to a simple run time license) and thoroughly restrictive on what can be done with the source code. The only reason typically anyone purchases a commercial source license is to have full control over maintenance and enhancements strictly for use within their own enterprise. They are rare. Object or run-time or right-to-use licenses are the popular means, and they only give revokable license to the machine code that is derived from the source code to run on a specified number of computers. Again, I have terribly over simplified this explanation, but at the end of the day, the hallmark distinction of "disclosed source" is that it enables customer or even potentially public examination of the software. The importance of this distinction in the setting of elections software will become very clear momentarily.</li>
</ul>

<h3>Closed source (Proprietary)</h3>

<ul>
	<li><strong>Development model:</strong> Identical to disclosed source with a notable exception: there is no publicly available source code examination allowed. The code is proprietary in nature and not available with any exceptions in a development setting restricted to decisions to do so by the code owners.</li>
	<li><strong>Deployment model:</strong> Identical to disclosed source with the further point that close source amounts to a "trade secret." This a useful distinction when thinking about patents. Since patents require a portion of disclosure of the preferred embodiment without compromising the law of trade secrets, sometimes, a decision is made as part of a patent strategy to make the source fully "disclosed source." This is an example of a nuance that requires me to reiterate that all of this is a gross oversimplification.</li>
</ul>

Now that you have this framework, let's consider the question again.

Within the context of elections and voting technology, I submit that open source is a better alternative, even though there is a strong case to be made for disclosed source. Here is why.

The disclosed source solution is intended by the commercial industry to address the major concerns of the elections verification community: <em>the black box nature of the code</em>. Their argument is that they can, in a highly controlled setting, allow an inspection of their source code for purposes of verifying its fitness and function. Maybe so.

But a basic premise of open source is that when thousands of eyes are looking, all bugs are shallow. This means that there can be no trap doors, back doors, hidden functionality or simply nuanced code or logic errors that might go undetected in a limited examination. And this further suggests that the perpetual harvest of enhancements and fixes I alluded to in the general terms of OSS licenses is enabled by such. And this is the argument from the development standpoint.

The argument for OSS in elections is even more compelling in the deployment view. The greatest challenge and cause of market dysfunction today is a toxic mix of lack of innovation and an inability to pay for it. This vicious cycle starts with lack of budget to pay for high performance voting equipment. The lack of market, so to speak, leads the vendor to lower investment in R&amp;D and capability offerings and innovation because there is no way to recover the investment in doing so.

By performing the heavy lifting of the R&amp;D to design and develop truly innovative voting systems in an OSS project, three key things happen:

<ol>
	<li>The opportunity to create truly trustworthy voting systems is enabled because absent the commercial model where the market dictates the extent to which it is commercially practical to innovate and to what extent the OSS project can do lots of things: for one, it can absorb other OSS innovations without being compelled to cross or sub license, and two, if it is a public or semi-public OSS project it can benefit from many many contributors (this can be a management challenge, but is addressable; our close ally Mozilla has done it well for instance);</li>
	<li>The municipality can actually afford to acquire it because of the OSS license which removes one of the largest cost components to the system; and</li>
	<li>Because of the nature of the OSS license, there is a perpetual harvest of improvements and repairs to the software that all licensees are entitled to acquire at no additional charge (for the software. We need to be careful and clear: this does not mean OSS is freeware; there remains the cost of hardware, the cost of deployment and maintenance and service support, which is where these enhancements and repairs are installed.)</li>
</ol>

Let me add that some authority exists for my comments above: I am a long-time recovering IP and technology licensing lawyer. But again, to my brethren of my former profession who may read this, of course it's dangerously oversimplified and fails to address several material points of the software licensing models. But this isn't intended to be a colloquium on software licensing, just a tortured summary in order to get at why we believe OSS for elections software is one instance where OSS is a better alternative to commercial models.

Again, I need to reiterate as an officer of a 501.c.3 organization, the principal reason why OSS is better is NOT to find a way around commercial software, but to specifically and directly do three things otherwise impossible in a currently dysfunctional marketplace:

<ol>
	<li>Help struggling, cash strapped municipalities of all sizes acquire truly trustworthy critical democracy infrastructure that otherwise is unlikely to be available due to the structural defects of that market for commercial voting equipment;</li>
	<li>Deliver true innovations that the commercial dynamics of the marketplace prevent; and</li>
	<li>Innovate through reinvention of the marketplace itself by designing, developing and making freely available the software and allowing the industry to refocus itself on what it commercially does best: deploy, maintain, and service the equipment, not designing and developing the underlying software.</li>
</ol>

<h2>What are the hurdles for municipalities adopting open source elections technology and how can they overcome these?</h2>

In 100 words or less, right? :-) Let me hit the high points.

The greatest hurdle we're working on is the requirements for certification, at least at a state level, and in some cases where there remains some lingering HAVA funding from the 2002 law, federal certification as well. Our solution is not finished yet, the two biggest pieces -- casting and counting -- are the elements that almost universally across the country require some sort of certification process. And we're working with NIST to establish some new guidelines for testing and certification models that states might adopt.

Beyond that, there are really no major hurdles. Commercial deployment services must be purchased or deployment must occur in-house by the county's IT department. This is where we believe our work will eventually catalyze a reinvention of the voting systems industry as we know it today. At the risk of pointing out the obvious: ANYone can take the OSS license we've crafted for our election technology. Anyone. That includes the current two+ vendors: ES&amp;S, Sequoia and Hart-Intercivic. One lingering hurdle we covered a while ago that relates back to the license is the county's ability to, under state procurement laws, be able to actually accept the OSS license. We developed our own public license called the OPL, modeled after the MPL (Mozilla Public License) because it turns out that the remaining dominant license scheme known as the GPL is legally unacceptable in most municipalities. Our OPL has been acknowledged by municipal attorneys to address the objections of other OSS licenses. It's the only one of its kind.

<h2>Who is using open source software for elections now? What is the timeline for releasing this?</h2>

You ask actually two important questions. To the extent of TrustTheVote Project software that we've developed and which does not require certification, our voter registration platform is in use by over ninety percent of the third-party registrars in the country, led by none other than Rock The Vote. Our blank ballot generation and distribution software (the "Ballot Design Studio") is in production in the Commonwealth of Virginia and the District of Columbia with plans to extend it to New Mexico and three other states. Likewise, the powerful mechanisms in the voter registration system that eliminate re-keying information and speed up the process by orders of magnitude is being tested by several states. Two states want to adopt and adapt our work on election night reporting services, and several are hankering for our digital poll book (the OSS is targeted for the Apple iPad initially, followed closely thereafter for OSS Android tablets soon after).

The second and, in my view, more important question is when will we be ready to roll out the whole framework from ballot marking, to casting, counting, tabulation and back-end to run a real election? We're targeting 2016. We need additional funding (and admittedly a non-trivial amount and I can explain the why and how of that later) to make this happen. We also have to finish our work with test and certification models. But, to be sure, we have the attention of elections officials all over the country who regularly contact us to get an update. They are desperate, and I sincerely mean that, to have the opportunity to acquire a voting system that may be 7-10 times better than what they've ever used for about one-third to one-fourth the cost they have to pay today.

<h2>How can those interested learn more or get involved?</h2>

Thanks for asking, and this leads me to my last and really important point. Our work is not like building the next web browser, blogging platform, CMS, relational database or even operating system. We have a unique development model because of the fault tolerant nature of our work and the demand by those stakeholders who will decide whether to adopt the results (and that's not the citizen voter, they are an indirect beneficiary; its the elections officials who buy this stuff) to have a voice and the ability to review designs.

Moreover, on the one hand it may seem like elections apps ought to be simple. Some of them are. Building an entire new stack for a high speed OpScan device from HP or Toshiba or a fully accessible ballot marking device? Not so much. So, we have some admittedly high standards for the kinds of talent and experience we need to participate under the tutelage of the TTV Core Team.

Anyone who believes they have the design and development chops to participate in this caliber of a project, we always are really stoked to hear from you.

But we need more than just kick-ass rocket software architects, engineers and developers. All of this, as you can imagine, is going to become really highly visible work.

We also have a need for three other types of talent who are passionate about ensuring our critical democracy infrastructure. My group (the Foundation Development Team, not the Technology Development Team) needs:

<ol>
	<li><strong>Outreach help</strong>: volunteer for now, soon to be paid as new funding arrives. These are people who are talented and experienced in public relations and government relations who can help tell our story, engage the public in what should be a movement where we, the people, demand that government at all levels consider, classify and support making elections technology "critical democracy infrastructure" subject to the same requirements and resource support for all other types of critical infrastructure. No, it won't be connected to the Internet to cast ballots any time soon, but it will involve real digital innovation, some restricted use of the Net and constitute infrastructure on which our very democracy depends.</li>
	<li><strong>Funding help</strong>: we need talent in working two classes of funding: larger grants and individual contributions from the public that are required in order to pay for operational overhead, which isn't much but exists; and</li>
	<li><strong>Web and social media support</strong>: Lastly I need talent of three flavors: [a] those who like to maintain website content (our current CMS is WordPress); [b] those who are graphically inclined and enjoy illustration, and visual design for presentation materials; and [c] those who enjoy maintaining social media content (blogging, tweeting, Facebook maintenance, etc.)  This outreach is imperative.</li>
</ol>

I guess the good news for technical talent is there is opportunity to move up (as you prove yourself) into paid positions. For now, the foundation operations side of the house is still largely volunteer, but again, new funding hopefully in the near future will create new paid positions there too.

Anyone inclined to help in any of these areas should contact us straight away. I can be reached at gam@osdv.org</a> or 415.381.1414. For technical talent, contact our CTO John Sebes at <a href="mailto:jsebes@osdv.org">jsebes@osdv.org</a>. Both of us are crazy busy; we have about 1/2 dozen guys on the Core Tech Team, and I drift from 2-4 people.

We do have an executive search underway for the next executive director of the foundation and, while a short-list is emerging, I know our Board of Trustees is glad to hear of more interested candidates.

http://youtu.be/pdEwSehpLd0
