---
layout: post
title: "Lessons in Pivoting: How My Personal Reference Became a Reusable Blueprint"
date: 2026-06-22 00:58:00
description: I wanted something past another toy demo or an over-engineered setup nobody would actually use. Here's how a personal reference project turned into a reusable microservice blueprint, plus a few lessons I didn't see coming.
tags: quarkus java microservice software-engineering software-architecture
categories: lessons-learned
featured: true
---

I had an old repo sitting around, a collection of JPA relation patterns I'd documented from past work. Nothing fancy, just _"here's how to map 1:1, 1:M, M:M without breaking anything."_ Useful as a personal reference, but I kept thinking it could be more.

Most tutorials I found fell into one of two camps: **oversimplified** (Student → Course, no real constraints, no tests) or **overengineered** (full multi-layer setup, DTOs everywhere, service patterns that hide what's actually happening at the database). Nothing in between. Nothing that was actually what I was looking for.

So I rebuilt the old repo from scratch with a different goal: **create something I'd actually reach for when starting a new microservice**, not just a reference doc.

## Starting point: just show JPA relations properly

The original plan was simple: Use **Quarkus Panache** to keep setup fast, show the three relation types mapped correctly in Java, and add **real integration tests** so people could verify the patterns actually hold up.
I picked **REST Data Panache** specifically because it kills the controller boilerplate, less code getting in the way of what actually matters: the JPA mapping. The domain stayed intentionally small (`Student`, `Profile`, `Course`, `Enrollment`) so the focus stayed on relations, not on domain complexity for its own sake.

## The realization: auto-generated code needs guardrails

A few days in, I started testing the endpoints against real scenarios and ran into limits I hadn't seen coming:

- **Lazy-loaded relations** quietly triggering N+1 queries during serialization
- **Shared primary key inserts** that looked fine but failed at persist time
- **Auto-generated Swagger docs** that contradicted what the endpoints actually returned

> I could've bailed on Panache right there and switched to hand-written controllers. But the problem wasn't Panache. It was that I was using it **without any guardrails**.

So instead of dropping it, I started writing down: _where exactly does it fail, why does it fail, and how do you fix that specific case without rewriting the whole thing?_

That's the point where the repo stopped being "here's how to map relations" and became **"here's how to use REST Data Panache for specific cases, and here's exactly where it stops working."**

## The second realization: this could be a starter kit

By the time I'd worked through all the edge cases, I had something more useful than a demo:

- **JPA patterns** that actually work with auto-generated REST endpoints
- **Fixed Swagger docs** (via `OASFilter`)
- A **repeatable testing pattern**
- **Clear guidance** on when to stop leaning on the auto-generated approach

And it hit me: **this is exactly what I'd want on hand when spinning up a new database wrapper microservice.**

In my own experience there's a specific kind of microservice out there: _manages a handful of tables, exposes them over REST, carries almost no business logic._ REST Data Panache is a great fit for that, as long as you know where its limits are.

So I rebranded the repo into a **blueprint**. Not a tutorial, a practical guide for that exact context: _how to do it, why the decisions matter, where the edges are._ Which, honestly, is the kind of reference I go looking for and rarely find.

## What this taught me

- **On tutorials and references:** The good ones aren't simple or advanced, **they're transparent**. They name their own limits and explain why things work the way they do. That's what turns a walkthrough into something you'd trust as a blueprint.
- **On velocity tools:** Auto-generation is a **great multiplier once you know its edges**. The goal was never a tool that does everything. It's knowing where your tool's sweet spot ends and having a plan for what's outside it.
- **On reusability:** If you keep coming back to the same piece of code, **it's earned the right to be made extendable**. A demo only becomes a blueprint once every decision behind it has a "why" attached.
- **On pivoting:** **Don't be precious about early assumptions** when they stop holding up. Adjusting your goal to match your actual constraints tends to surface things you'd have missed otherwise. Bob Ross put it better than I can: _"We don't make mistakes, we just have happy accidents."_
  Today I learn that pivot is just another way of finding value in things you didn't plan for.

<br>

<a href="https://github.com/nirnawati-expt/quarkus-panache-swagger-blueprint" target="_blank"><img src="https://img.shields.io/badge/repository-black?style=for-the-badge&amp;logo=github" alt="repository"></a>
<a href="https://nirnawati-expt.github.io/quarkus-panache-swagger-blueprint/" target="_blank"><img src="https://img.shields.io/badge/github_pages-dimgray?style=for-the-badge&logo=github" alt="github pages"></a>
[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)
