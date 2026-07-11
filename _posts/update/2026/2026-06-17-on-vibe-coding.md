---
layout: post
title: "The Reality of Vibe Coding: AI Generates Code, Engineers Make Decisions"
date: 2026-07-11 00:58:00
description: I spent weeks vibe coding with AI agents, and the funniest bug wasn't a crash. It was the AI confidently telling me a feature was done, then finding out the files were never even saved. Here's what that taught me about where AI actually helps, and where it still can't replace human judgment.
tags: artificial-intelligence ai ai-assisted-development software-development vibe-coding
categories: software-engineering
featured: false
---

Recently I started experimenting with **vibe coding**: building a handful of small utilities with an AI coding agent hooked into cloud LLMs like Claude, GPT, and Gemini. The agent ran locally, touched my actual project files, and edited code directly. It's roughly the workflow a lot of developers are on now.

It was _genuinely impressive_. Boilerplate that used to take a whole afternoon got done in minutes. Prototyping sped up, scaffolding appeared out of nowhere, unfamiliar APIs got explained on request.

Then the excitement wore off and one thing became obvious: **writing code is just one part of the job.**

## AI is a great accelerator

For a lot of tasks **it just works**. Project scaffolding, simple apps, refactoring repetitive code, explaining an unfamiliar library, drafting docs, sketching an approach. If you're a solo developer, that's a _real_ productivity jump. You start with something working instead of a blank file.

## Small mistakes still slip through

What surprised me was how often the agent made **small, quiet mistakes**. Not crashes. The kind where everything looks fine and the AI tells you it's done, and it just... _isn't_.

One example: I asked it to update a button's styling in a plain HTML/CSS/JS static site. It added the new class to the markup, no problem. What it _didn't_ do was add the matching rules to the stylesheet. As far as the AI was concerned, task complete. As far as the browser was concerned, _nothing had changed_. Not broken, just wrong.

You'd only catch that if you **already knew** what the result was supposed to look like.

## The funniest event I experience while "Vibe Coding"

At one point the agent told me, with total confidence, that a feature was implemented and ready to go. I opened the project folder.

**Nothing there.**

The files it generated had _never actually been saved_ to the project folder, it sits on the temporary folder of the agent. It hadn't lied exactly, it just missed a step in a longer chain of actions. Funny, but it stuck with me: **"task completed" is not the same thing as verified.**

## Engineering is more than code

The more I used it, the clearer it got that **generating code is the easy part**. The harder questions live somewhere else:

- Is this maintainable in six months?
- Does it introduce a security hole?
- Is the UX actually intuitive, or just functional?
- Will it hold up as the project grows?
- Is the architecture consistent with the rest of the codebase?
- **Does it solve the problem the user actually has?**

None of that is a code-generation problem. It's all about **judgment**, and it challenges your knowledge in system design.

## AI generates code. Engineers make decisions.

AI handed me a first pass on plenty of tasks while I built stuffs. But there were still dozens of calls it **couldn't** make for me: typography, visual hierarchy, color choices, performance tradeoffs, how assets get delivered, how the CSS is organized, whether the whole thing _actually feels good to use_.

The more polished and personalized I wanted the end result, the more of these decisions fell on **me**, not the model.

AI cut down on typing, while it still needs _you_ to decide where the decisions are going to be.

## AI Code Quality Needs Human Oversight

Code quality is another spot where AI needs a human checking its work. It runs, sure. But **"runs" and "clean" aren't the same thing.** I'd get functions doing three things at once, logic copy-pasted across files instead of pulled into one place, helper functions nobody asked for because the AI decided I might need them later.

[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and [YAGNI](https://id.wikipedia.org/wiki/YAGNI) go out the window the moment nobody's watching. The agent optimizes for _"this satisfies the request,"_ not _"this is code I'd want to maintain in six months."_ So you go back through it anyway. Trim what's unused, merge duplicated logic, cut the parts that overcomplicate a problem that was actually simple.

None of this makes AI-generated code bad. It just means **you can't hand it off and walk away.** Someone still has to read it and decide what stays.

## Closing Thoughts

I don't think this replaces software engineering. It **shifts where the time goes**: less writing boilerplate, more reviewing, validating, and deciding what's actually right for the project. The real value for me wasn't autonomous coding. It was having a **very fast collaborator** and more powerful search engine, as long as someone was still checking its result.

From what I've seen so far, **AI agents can't replace engineers**, at least not for the parts that matter most. Architecture, tradeoffs, the instinct for what's going to break later, _that's still a human thing_. AI is a **strength multiplier**, not a substitute for a software engineer. And if the vibe coding trend on social media is any indication, there's a decent chance we'll see a new kind of role show up in the near future: _engineers who specialize in cleaning up other people's vibe-coded projects so they're actually safe to maintain._

Anyway, that's just where things stand for me right now. Vibe coding's fun, and it genuinely makes shipping faster. But **I'm not ready to trust it unsupervised**, and I don't think anyone else should either, at least not yet.
