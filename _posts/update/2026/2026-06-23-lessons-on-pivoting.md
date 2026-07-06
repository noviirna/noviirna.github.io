---
layout: post
title: lessons in pivoting - how my personal reference became a reusable blueprint
date: 2026-06-22 00:58:00
description: moving beyond simple demos and over-engineered setups. here is how i turned a personal reference into a reusable microservice blueprint, along with the unexpected lessons learned along the way.
tags: quarkus java rest-api microservice lesson-learned software-architecture
categories: software-development lesson-learned
featured: false
---

I had an old repository sitting around, a collection of JPA relation patterns I'd documented from past work experience. Nothing fancy, just "here's how to map 1:1, 1:M, M:M relationships without breaking things." It was useful as a personal reference, but I kept thinking it could be better.

The tutorials I found online fell into two camps: either oversimplified (Student → Course, no real constraints, no actual testing), or overengineered (full multi-layer architecture, DTOs everywhere, service patterns that hide what's actually happening with the database). Nothing in the middle, nothing that was actually I am looking for.

So I decided to rebuild that old repo from scratch with a new goal: **create something I'd actually reach for when starting a new microservice**, not just a reference document.

<br>

## Starting Point: Just Show JPA Relations Properly

The original idea was straightforward: use Quarkus Panache to keep things fast to set up, show the three relation types mapped correctly in Java, include proper integration tests so people can verify the patterns actually work.

I picked REST Data Panache specifically because it removes the controller boilerplate, which means less code to distract from what matters, which is the JPA mapping. The domain was intentionally simple (Student, Profile, Course, Enrollment) so the focus stayed on the relations, not on domain complexity.

<br>

## The Realization: Auto-Generated Code Needs Guidelines

Several days in, I started testing the endpoints with real scenarios. And I found out REST Data Panache had some limits that I hadn't anticipated:

- Lazy-loaded relations silently triggering N+1 queries in the serialization layer.
- Shared primary key inserts that looked correct but failed at persist time.
- Auto-generated Swagger documentation that contradicted what the endpoints actually returned, and needed.

I _could_ have switched to hand-written controllers at that point. But I realized something: the problem wasn't with Panache. It was that I was using it without guidelines.

So instead of abandoning it, I started documenting:

- Where exactly does it fail?
- Why does it fail?
- How do I fix this specific case without rewriting everything?

That's when the repo transformed from "here's how to map relations" to "here's how to use REST Data Panache for some specific use cases and here's where it stops working."

<br>

## The Second Realization: This Could Be a Starter Kit

By the time I'd fixed all the edge cases, I had something more valuable than a demo. I had:

- JPA patterns that actually work with auto-generated REST endpoints
- Fixed Swagger documentation (via OASFilter)
- A repeatable pattern for testing
- Clear guidance on when to stop using the auto-generated approach

And I thought: _this is what I'd want in hand when I'm initializing a new database wrapper microservice._

Throughout my professional experience, I’ve found that there is a type of microservices that simply manages a few tables, expose them via REST, and handle little to no business logic. REST Data Panache is ideal for this use case, as long as you are aware of its constraints.

That is why I rebranded this repository into a blueprint. It provides a practical guide for this specific context: how to do it, why these decisions matter, and where the boundaries are. This is precisely the type of guidance I often look for in references

<br>

## What This Taught Me

### On tutorials and references

Great documentation finds its sweet spot in transparency. Beyond being just simple or advanced, the best references explicitly define their limits and focus on why things work the way they do, transforming a simple walkthrough into a reliable blueprint.

### On velocity tools

Auto-generation is a fantastic multiplier, provided we know its boundaries. The goal isn't to find a tool that does everything, but to understand our tool's sweet spot, acknowledge its constraints, and complement it with clear strategies for anything outside that scope.

### On reusability

If you find yourself referencing a piece of code over and over, it’s earned the right to be extendable. A demo only becomes a true blueprint when every decision is backed by the "why."

### On pivoting

Do not fear rebranding or pivoting when early project assumptions fall short. True growth happens when we adapt our goals to match our constraints, uncovering insights we would have otherwise missed. As [Bob Ross](https://en.wikipedia.org/wiki/Bob_Ross) famously reminded us:

> "We don't make mistakes, we just have happy accidents."
>
> Bob Ross (1942-1995)

Every pivot is simply another way to find value in the unexpected.

<br>

[![repository](https://img.shields.io/badge/repository-black?style=for-the-badge&logo=github)](https://github.com/noviirna-labs/quarkus-panache-swagger-blueprint)
[![github pages](https://img.shields.io/badge/github_pages-dimgray?style=for-the-badge&logo=github)](https://noviirna-labs.github.io/quarkus-panache-swagger-blueprint)
[![see it in /projects](https://img.shields.io/badge/📁_see_the_project-darkslategrey?style=for-the-badge)](/projects/personal/quarkus-panache-swagger-blueprint)
