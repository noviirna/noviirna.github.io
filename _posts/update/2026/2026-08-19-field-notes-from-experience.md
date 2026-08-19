---
layout: post
title: "Designing for Scale: Field Notes From Building Enterprise Systems"
date: 2026-08-18 16:40:16
description: What I've picked up over years of building systems, borrowed from engineers I've worked with and software engineering materials I've read.
tags: system-design software-practices software-architecture
categories: software-engineering
featured: true
---

I'm not going to claim this is the right way to design software. It's just what I've picked up over years of building systems for millions of users, borrowed from engineers I've worked with and some software engineering materials I've read.

## Start With the Problem, Not the Stack

Before touching any technology/tool/stack, <u>figure out the problem you're actually solving</u>. What does the system serve. How big is the problem. What resources do you have. Who's going to use this thing once it ships.

I keep coming back to my experience building my own house from the ground up in my early twenties. <u>Same discipline applies: you don't pour a foundation before you know what's going on top of it</u>. The difference is that software is a digital asset instead of a physical one, so mistakes are easier to hide and harder to notice until it cost you.

The more I get into software engineering, the more I aware that <u>there's no perfect design</u>. What I try to do instead is <u>pick tools that do their job well, with a level of risk the users or the client can actually live with</u>. **Every decision is a trade-off**, and that gets riskier the bigger and more complex the system gets.

The cheat sheet below is what I lean on when a system needs to handle big traffic or data volume. **It's not universal**. It's aimed at commercial, high-load systems, such as retail banking and/or a medium to large digital marketplace. This note is a starting point for software design decision, because <u>the real evaluation happens later, once you know your actual constraints of your project</u>.

## 1. Horizontal Scalability

<u>Add more machines instead of making your existing machines bigger</u>. Martin Kleppmann describe it well in *Designing Data-Intensive Applications*: for very large datasets or very high query throughput, a single node stops being enough, and you have to break the work up across partitions rather than replicate the same data everywhere.

**What you get:** higher availability, better fault tolerance, less downtime.

**What it costs:** <u>more moving parts, added network latency, higher infrastructure and maintenance cost</u>.

**Where it actually gets hard:**
- **State management**. Sticky sessions versus a shared session store versus a client-side token like JWT, each with a different failure mode.
- **Data synchronization** across servers.
- **Debugging anything**, because now the stack trace lives on five machines instead of one.

## 2. Partitioning (When the Data Gets Big)

<u>Splitting a large dataset into smaller chunks, spread across nodes</u>. This is the same idea Kleppmann calls sharding, and he's blunt about the trade-off: it reduces load per node, but <u>resharding when you outgrow your original scheme is genuinely disruptive</u>, especially if the partition key was wrong from the start.

**What you get:** better query performance since a query only has to scan the relevant partition, better fault tolerance, lower latency if data is stored close to where it's used.

**What it costs:** pulling data across partitions gets harder, maintenance gets harder, and <u>a badly chosen partition key gives you a hot spot instead of even distribution</u>.

**Where it actually gets hard:**
- **Picking the right partition strategy** (horizontal, vertical, or domain-based) and the **right partition key**.
- **Repartitioning** once the data outgrows the original plan.
- **Keeping partitioned data consistent**.

Apache Cassandra is the example tool I reach for most when I need no SQL database with partitioning. Its [architecture documentation](https://cassandra.apache.org/doc/3.11/cassandra/data_modeling/intro.html#partitions) describes how data is distributed across a ring of nodes using consistent hashing on the partition key, with no single point of failure by design.

## 3. Load Balancing Across Servers

<u>Spreading traffic evenly so no single node/server gets most of the traffic while others sit idle</u>.

**What you get:** it's built-in in most platforms, enables high availability, lets you scale horizontally, and <u>lets you patch or restart nodes with zero downtime</u>.

**What it costs:** a wrong configuration can damage performance badly, and cloud load balancing service isn't free.

**Where it actually gets hard:** **performance tuning** across distributed nodes, and **debugging** when the problem could be in the balancer, the backend, or the network between them.

Red Hat OpenShift's HAProxy-based router is a good real-world example. It supports several balancing algorithms, round robin, least connections, source IP hashing, and since OpenShift 4.8 the default has shifted to a "power of two random choices" scheme specifically to even out load after a reload. Nginx works the same way at a smaller scale, as a reverse proxy sitting in front of your app servers.

## 4. Graceful Failure Handling

This is the one people skip until the outage happens. A system under load needs a <u>defined behavior for both temporary failures</u> (example: a downstream service is slow) <u>and permanent ones</u> (example: a downstream service is gone).

The **circuit breaker pattern** is the standard answer here. Martin Fowler's description is still the reference: you wrap a remote call in an object that watches for failures, and once failures cross a threshold, the breaker trips and <u>further calls fail immediately instead of piling up and waiting on a timeout</u>. That **"fail fast" behavior** is what stops one slow dependency from cascading into a full outage.

## Technologies I'd Put in This Bucket

- **NoSQL database:** Apache Cassandra. [Architecture docs](https://cassandra.apache.org/doc/latest/cassandra/architecture/index.html)
- **In-memory cache:** Redis Cluster, which splits the keyspace into 16,384 hash slots distributed across nodes. [Redis Cluster docs](https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/)
- **CDN:** Cloudflare, running on a global anycast network where every data center runs every service. [Cloudflare CDN reference architecture](https://developers.cloudflare.com/reference-architecture/architectures/cdn/)
- **Container platform with built-in load balancing:** Red Hat OpenShift, specifically its HAProxy-based router.
- **Reverse proxy:** Nginx.

## Further Reading

If you want the theory behind most of this, Martin Kleppmann's ***Designing Data-Intensive Applications*** is the book I'd point to first. It's the source of the notes above, which I refer to before implementing things in my own work.

For failure handling specifically, Fowler's original write-up on the [circuit breaker pattern](https://martinfowler.com/bliki/CircuitBreaker.html) is short and still worth reading directly rather than through a summary.

This is not intended to be a perfect cheat sheet, as <u>software doesn't have a perfect design</u>. Every tech practices/techniques on this list <u>buys you something at the cost of something else</u>: horizontal scalability trades simplicity for availability, partitioning trades query complexity for performance, a load balancer trades a new failure point for the ability to lose a node without losing the service. <u>The goal isn't to eliminate risks or drawbacks entirely. It's to pick the ones you can afford</u>, from the problem you are going to solve. 

At first, I documented this for myself so I wouldn't keep re-researching the same things when starting similar projects, which is what these notes are intended for. However, I think these field notes can help others too, so I decided to publish them. Hope it helps.