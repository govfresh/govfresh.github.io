---
title: "Visualize this: A week's worth of NYC subway entries and exits"
date: 2013-04-25
description: This animation visualizes one week's worth of turnstile data for the New York City Subway.
author: GovFresh
---

http://www.youtube.com/watch?v=g6EaMQDHu7Q

This animation visualizes one week's worth of turnstile data for the New York City Subway. The MTA compiles data weekly and makes it available <a href="http://www.mta.info/developers/turnstile.html">here</a>.

The data is far from usable in its raw format, and is broken into week-long chunks for a specific control area and also includes running counts for a turnstile at a given time (like an odometer).

Using a Ruby script and a lot of Excel-mashing, we can pull out a fixed number of entries and exits associated with a particular turnstile covering a set time period.

To map the data, we had to manually geocode the station UNIT IDs. This was time consuming and has been a major barrier to developers who wish to use this dataset, as the station identifiers are not referenced anywhere else, and do not match the station_id fields used in the GTFS data. A CSV with lat/lon for each UNIT ID is <a href="https://github.com/louiedog98/nycturnstiles">available on GitHub</a>.

Each dot represents approximately 50 people. There is no aggregate number of entries and exits for each station, and some have multiple turnstiles running at multiple intervals (most of the data includes counts at 4-hour intervals, but these are offset between some stations, and some outliers do not seem to follow the same conventions).

Data for a specific turnstile for a specific time period is pulled into the map as the visualization runs. The number of entries/exits is divided by 50 and each group of 50 will be represented by a dot. To make the motions more fluid, a start and end time are picked at random from the associated time period for that data, which is used to display and animate the dot.

Entry dots are placed at random within a radius of their target station, and animated to move towards the station. Exit dots start at the station, and are animated to a random point within the same radius. This simulates the movement patterns around each station and helps to visualize entry and exit flow.
