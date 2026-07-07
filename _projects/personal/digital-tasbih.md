---
layout: page
title: Digital Tasbih
description: 2026<br>Lightweight Web App
  <br><br>Production • Personal Tools • Browser-based • AI Assisted Development • bolt.new • Privacy-conscious design • Experimental
img: assets/img/projects/digital-tasbih/digital-tasbih-project-banner.png
importance: 3
category: personal
related_publications: false
toc:
  sidebar: left
---

<br>

[![⚡ See it Live](https://img.shields.io/badge/⚡_See_it_Live-006d76?style=for-the-badge&logo=bolt)](https://digital-tasbih-web-a-aq35.bolt.host/)
[![repository](https://img.shields.io/badge/repository-black?style=for-the-badge&logo=github)](https://github.com/noviirna-labs/islamic-tally-counter-webclient)
[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)

<br>

## Overview

Coming from a software engineering background, I know how to build complex systems. This project was a deliberate
exercise in the opposite, how little can I build and still solve the problem completely?

I needed a digital tasbih. Not an app with accounts, cloud sync, or analytics. Just a counter that remembers where I
left off when I close the browser; without sending a single byte of my data anywhere. Most Islamic apps do too much. I
wanted just enough.

This project was also my first real test of vibe coding, not as a gimmick, but as a discipline check: how well can
engineering instinct translate into clear AI prompts before a single line of code is written?

Turns out, pretty well.

<br>

## Key Features

- Large tap button optimized for one-handed mobile use
- Counter persists across sessions via Local Storage. No cloud, no account needed
- Reset button to start a new dhikr from zero
- Configurable target (33, 99, or custom) with a completion indicator
- Calm, minimal UI inspired by Muslim Pro; deep green and gold, no clutter

<br>

## Scope of Work

Intentionally narrow. The scope was defined before the first prompt was written:

- **✅ What's in:** counter, persistence, reset, target
- **❌ What's out:** login, cloud sync, multiple counters, sounds, history

Defining the boundary before touching the AI tool was the single biggest factor in shipping this fast and clean.

<br>
### High Level System Design

- Client-side only
- Local Storage as the persistence layer
- Single-page, no routing, keep it as simple as possible
- All data stays on the device's browser. The counter is stored in Local Storage — no backend, no database, no network requests after the initial page load. There's nothing to track, nothing to sync, nothing to leak.

<br>
## Technologies

- AI-assisted development
- Local Storage API
- Browser-native web app. No backend, No framework overhead

<br>

## How I built it

Before writing anything, I almost didn't start. No experience with full app generation meant I wasn't sure if what I had
in mind was even "promptable". On top of that, the sheer number of tools out there, from Cursor to Lovable, was honestly
overwhelming.

So I did what I'd do before any engineering decision, I researched it first. Read forums, threads, and success stories
from people who'd shipped real things through vibe coding. The pattern was clear: the ones who got it right in fewer
iterations weren't better at prompting. They were better at knowing what they wanted.
That research also led me to the tools themselves. After comparing options, I landed on Bolt. It runs entirely in the
browser, no local setup, no environment configuration, just describe what you want and it builds. For a quick personal
tool where I wanted zero friction between idea and output, it was the right fit.

That's when it clicked: requirements clarity isn't a prompting skill, it's an engineering habit I already had. So I
wrote the prompt the way I'd write a requirements doc. Detailed, specific, bounded. What it does, what it looks like,
what it doesn't need, what "done" means.

One prompt. First try. App shipped.

I intentionally wrote it as if I weren't a developer, just what user needs. And it built exactly what I needed.

See the exact prompt I used and how bolt.new turned it into a working app in one shot. Feel free to try it yourself.

     ---
     ## MY APP: Islamic Tally Counter (Tasbih)

     What I want to build:
     A simple digital tasbih (Islamic prayer counter) that works in the browser.
     The user taps a big button to count their dhikr (e.g. SubhanAllah, Alhamdulillah).
     When they close and reopen the app, it remembers where they left off.
     What it should look and feel like:
     Calm and spiritual. Think deep green and gold colors, clean and minimal.
     One big counter number in the center of the screen.
     One large tap button — easy to press with a thumb on mobile.
     One smaller tap button on the left, to reset the counter when user want to start another dhikr from count 0.
     A small reset button to go back to zero.
     Inspired by the Muslim Pro app — clean, no clutter.
     Core features I need:

     Big tap button that adds 1 to the counter each press
     Counter remembers my last count when I close and reopen the app
     Reset button to start from zero
     A target number I can set (33, 99, or custom) — show me when I reach it What I don't need right now:
     Login or accounts
     Saving to the internet
     Multiple counters
     Sounds
     ---
     I have no coding experience. You are the engineer — make all decisions.
     Give me complete, ready-to-run files every time. Never give partial code.
     After each update, tell me in one simple sentence: what changed and what I should see.
     If you need to choose between options, just pick the best one and tell me why in plain English.
     Let's start with a working version I can open in my browser and tap right away.
     ---

<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/bolt.new_1_build_app.png" title="the prompt execution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Post the prompt. And here's what came out.
</div>

At first, I was a bit skeptical, did it actually build what I needed? So I tested it in the preview section. Turns out, it did exactly what I wanted. So I decided to publish it. The process was surprisingly simple when you don't need a custom domain, you just send a prompt like this.

<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/bolt.new_2_publish_app.png" title="published app" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Wait for a bit.. And voila, after you get the message back, your app is published and hosted by bolt.
</div>

<br>

## The Product

After publishing, I instinctively opened it on my phone, the most accessible device for a tasbih. After using it for several days, the app ran perfectly across browsers, Safari and Chrome, on both mobile and desktop.

Checkout the app in action: <a href="https://digital-tasbih-web-a-aq35.bolt.host/" target="_blank"><img alt="⚡ See it Live" src="https://img.shields.io/badge/⚡_See_it_Live-blue?style=for-the-badge&logo=bolt"></a>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_1.png" title="single page application" class="img-fluid rounded z-depth-1" %}
        <div class="caption">This is a single web page application<br></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_2.png" title="set target of dhikr" class="img-fluid rounded z-depth-1" %}
        <div class="caption">You can set the target of your dhikr<br></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_3.png" title="count by tapping the TAP button" class="img-fluid rounded z-depth-1" %}
        <div class="caption">You can begin your dhikr, it will count +1 when you tap the "TAP" button<br></div>
    </div>

</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_4.png" title="message when reaching the dhikr target" class="img-fluid rounded z-depth-1" %}
        <div class="caption">After reaching the target, the screen will show notification message that you reach the dhikr target<br></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_5.png" title="still able to continue dhikr after reaching the target" class="img-fluid rounded z-depth-1" %}
        <div class="caption">If you want to count more than the target, the app give you freedom to continue your dhikr<br></div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/digital-tasbih/digital-tasbih-web-a-aq35.bolt.host_6.png" title="reset the dhikr count back to zero" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Or if you want to reset your count after reaching the target, you can just tap "reset", and the counter will be back to 0, with the target unchanged<br></div>
    </div>

</div>

<br>

## Challenges

- Familiar with AI-assisted coding through code completion, but had no experience building an app from scratch without writing a single line of code myself.
- Didn't know how to structure prompts for full app generation, it's a different skill from using autocomplete.
- Most tutorials assume you already know what you want to build in detail, mine was just a vague need.

<br>

## Solutions

- Read documentation and success stories from products built through vibe coding
- Key insight: for apps without complex security or logic, a well-constrained prompt is almost all you need
- Defined the app's boundaries clearly before touching any tool. What's in, what's out, what "done" looks like
- Shipped fast, before second-guessing crept in

<br>

## Lessons Learned

Good prompting is just good requirements gathering. The AI doesn't read between the lines like humans do, it builds
exactly what you describe. If you know what you want as a user and can articulate it with clear goals, constraints, and
boundaries, you already have most of what you need to ship something real.

The hard part isn't the AI. It's knowing what you want before you ask.

<br>

[![⚡ See it Live](https://img.shields.io/badge/⚡_See_it_Live-blue?style=for-the-badge&logo=bolt)](https://digital-tasbih-web-a-aq35.bolt.host/)
[![repository](https://img.shields.io/badge/repository-black?style=for-the-badge&logo=github)](https://github.com/noviirna-labs/islamic-tally-counter-webclient)
[![Back to Project](https://img.shields.io/badge/📁_see_projects-olive?style=for-the-badge)](/projects)
