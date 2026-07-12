---
layout: post
title: "Skill Files, Not Code: How I Built a Human-in-the-Loop Workflow for My AI Coding Agent"
date: 2026-07-12 18:58:00
description: "I let an AI agent build a simple utility tool, and ended up learning more about managing it than about the code itself. Turns out skill files can carry a whole workflow: plan, approve, execute, verify, rollback. Some parts of that workflow were broken until I actually checked. Here's what I found."
tags: agentic-ai ai-workflow human-in-the-loop no-code-workflow vibe-coding dev-workflow
categories: software-engineering
featured: false
---

This was my **first time vibe coding** locally, and my instinct going in was: _write good prompts, pick a smart model, ship._ Turns out that's the **smaller half** of the problem.

I like working with AI, but I want to be the one **deciding where the project goes**, and I still want to **understand** what the code is actually doing. That ruled out handing the whole thing off and letting an agent run unsupervised. What I ended up building instead is closer to a **human-in-the-loop workflow** defined through _skill files_: markdown documents that tell my AI coding agent how to plan, execute, and hand off work, with me **approving at each checkpoint**. _Not full agentic coding, just AI doing the typing while I stay in the driver's seat._

The tool itself is simple. A <a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank">**PNG to WebP converter**</a>, vanilla JS, HTML, CSS, no framework, runs **entirely client-side**. I built it because some of the converter I found online routes your image through a server just to compress it, which is a _strange amount of trust_ to ask for something this basic. **Mine doesn't send anything anywhere.** I use it myself.

What took longer than the tool was figuring out how to get an AI coding agent to work on it **reliably without me babysitting** every line. I didn't want to sit there approving each keystroke, but I also didn't want to let it run loose without clear direction. That's how you end up **burning tokens** on work that goes nowhere, or work that goes somewhere you didn't ask for.

### The part most people skip

Most advice about working with coding agents is about the prompt: _word it better, add examples, pick the smartest model._ Fair enough, but it puts **all the weight on one message** and _none on what happens after_. Workflow, task decomposition, who owns what, what happens when something fails, how a change gets reviewed. That part gets treated as an **afterthought**, if it's mentioned at all.

I ended up leaning on ideas that _already exist_ in regular software engineering:

- **Separation of concerns**
- **Single responsibility**
- **Small iterations**
- **Explicit scope**
- A **rollback strategy**
- **Human review**
- A clear **definition of done**

None of this is new. It's just _not usually applied_ to "AI writes my code" the way it's applied to a team of humans writing code.

### What actually worked

- **One skill doesn't fit every task.** Debugging and building a new feature are different jobs. I split mine into three: <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/.claude/skills/atomic-iteration/SKILL.md" target="_blank">`atomic-iteration`</a> for _planning and orchestration_, <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/.claude/skills/efficient-code/SKILL.md" target="_blank">`efficient-code`</a> for _the actual coding rules_, and <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/.claude/skills/semantic-git/SKILL.md" target="_blank">`semantic-git`</a> for _commits and PRs_. Each one is **narrow on purpose**.
- **Small instructions beat long ones.** Every extra paragraph in a system prompt is something the model has to hold onto, and the **important constraints get diluted** the longer the document gets. My skills and <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/CLAUDE.md" target="_blank">system instructions</a> for this project are deliberately short. When I added a rule, I tried to add it in the place it _actually belonged_ instead of restating it somewhere else.
- **Treat it like project management, not code generation.** This was the **real shift** for me. _The agent is the worker. The deliverable is source code. The scope is whatever files, tools, and constraints I hand it._ Once I started thinking about it that way instead of _"AI, write me a feature,"_ the whole thing got more predictable.
- **Narrow the scope aggressively.** Which files can be touched, which tools are available, what "done" actually means. Every bit of ambiguity I removed was **one less thing the agent had to guess at**, and _guessing is where things go sideways_.
- **Atomic iterations over full features.** Instead of asking for an entire feature in one go, I broke work into small goals: **one objective, one expected outcome, one review**, each time. This means _more oversight from me_, not less, but the output got **noticeably more reliable**. My job shifted from writing code to _checking incremental progress_, which feels closer to how you'd actually manage a **junior engineer** than to "automating software engineering."

### Where I actually got it wrong

I thought the three-skill setup was solid until I sat down and walked through it turn by turn with my AI coding agent, **checking for gaps**.

**Two of my skills both defined retry logic** for errors during execution, with no rule for which one takes priority. On paper that reads fine. In practice it means an agent hitting an error mid-task could interpret it as _one retry counter or two nested ones_, and get a different number of attempts depending on which reading it landed on. The fix wasn't adding more explanation, it was **deleting the duplicate**: retry logic now lives _only_ in <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/.claude/skills/efficient-code/SKILL.md" target="_blank">`efficient-code`</a>, and <a href="https://raw.githubusercontent.com/nirnawati-expt/png-to-webp-converter/refs/heads/main/.claude/skills/atomic-iteration/SKILL.md" target="_blank">`atomic-iteration`</a> just defers to it.

There was also **no rollback rule**. If a task failed after the max retries, what happened to the half-finished changes sitting in the working directory? _Nothing, is the honest answer._ Now a failed task **reverts its own file changes** to the last commit before halting, and anything depending on it gets marked _blocked_ instead of attempted.

**No context budget either.** Long enough iteration, and full diffs and logs from tasks that already finished just sit in context, getting reasoned over the same way as the task currently in progress. Completed tasks now **compress down to one line**. Only the _current task_ and anything _failed or blocked_ keep full detail.

And **no verification step** before I looked at it myself. The agent would finish a task and immediately hand it to me for manual review, _syntax errors and all_. Now there's a **lint/syntax check** before it ever reaches me, gated through the same retry counter instead of becoming its own separate failure mode. I'm not writing unit tests for a tool this size, so this is the **right amount of automated checking** for what I'm building. If I add one later, the plan is for test cases to come from the _same success criteria_ I already write during planning, not a separate spec.

None of these were things I would've caught reading my own skill files. They **only showed up** when I actually traced through what happens on a real error, _step by step_.

### Closing thoughts

Guardrails **reduce risk, they don't remove it**. A misread instruction, a conflicting rule between two skills, context the agent picked up wrong, any of that can still happen even with all of the above in place. **Human review isn't a fallback for when the system fails. It's part of the system.**

I went into this expecting the hard part to be getting the AI to write good code. It mostly does, when the code itself is the whole job. **The hard part was everything around it**: deciding what "one task" even means, what happens when a task fails halfway through, how much of the conversation history is worth keeping. That's **project management with extra steps**, and pretending otherwise is how you end up _debugging an agent instead of your app_.

There's **one thing I'm still deliberately not handing over**: I _don't_ let the agent write and grade its own tests. Its job is to satisfy whatever I asked for, so a test suite it writes for its own code tends to _confirm the code did what it thinks it should do_, not what it should **actually** do. If I add tests later, the test cases come from **success criteria I write during planning**, not from the agent guessing at what "correct" means after the fact.

None of this made the tool itself more interesting. It's still a <a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank">PNG to WebP tool</a>, nothing flashy. But **the workflow is the part I'd actually reuse** on the next thing I build, and that's a strange place for the real learning to end up.

<a href="https://github.com/nirnawati-expt/png-to-webp-converter" target="_blank"><img src="https://img.shields.io/badge/repository-black?style=for-the-badge&amp;logo=github" alt="repository"></a>
<a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank"><img src="https://img.shields.io/badge/🔎_Checkout_The_Tool-006d76?style=for-the-badge" alt="checkout the tool"></a>
