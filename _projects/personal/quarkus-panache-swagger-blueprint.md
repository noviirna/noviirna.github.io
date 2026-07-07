---
layout: page
title: Quarkus Panache Swagger Blueprint
description: 2026<br>Starter Template
  <br><br>Open Source • Backend Template • Microservice • Database Wrapper • Cheatsheet • REST API • Java • Hibernate • JPA • Quarkus • Swagger • OpenAPI
img: assets/img/projects/quarkus-panache-swagger-blueprint/project-banner.png
importance: 2
category: personal
related_publications: false
toc:
  sidebar: left
---

[![repository](https://img.shields.io/badge/repository-black?style=for-the-badge&logo=github)](https://github.com/noviirna-labs/quarkus-panache-swagger-blueprint)
[![github pages](https://img.shields.io/badge/github_pages-dimgray?style=for-the-badge&logo=github)](https://noviirna-labs.github.io/quarkus-panache-swagger-blueprint)
[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)

<br>

## Overview

Quarkus REST Data Panache promises zero-code CRUD endpoints. In practice, the generated API often silently misbehaves
the moment your entities have real relationships, lazy-loaded relations that trigger N+1 queries, shared primary keys
that break insert and delete, Swagger schemas that document status codes the API never actually returns.

This template sits in the gap between "disposable demo" and "rewrite everything yourself." It leverages the rapid
prototyping speed of `PanacheEntityResource` while documenting exactly where and why the generated code needs to be
supplemented, and provides working, copy-rename-ready patterns for each of those cases.

The scope is intentionally narrow: a **database wrapper microservice**, a service that owns a small set of tables and
exposes them over REST for other internal services to consume, without carrying significant business logic.

<br>

## What This Template Covers

- **JPA relation mapping done right**, concrete before/after normalization showing why naive schemas break under JPA,
  and the specific techniques that fix them (`@MapsId` for shared PKs, junction entities for M:M).
- **Auto-generated CRUD that actually works**, override patterns for the cases REST Data Panache can't handle out of the
  box, including shared-primary-key insert/update and aggregate operations across dependent tables.
- **Swagger that reflects the real contract**, an OASFilter that corrects the status codes REST Data Panache gets
  wrong (e.g. `PUT` that documents `201` but only ever returns `204`).
- **A demonstrated N+1 problem**, two endpoints with identical response shapes: one silently fires an extra query per
  request, one doesn't. The difference is measurable, not just theoretical.

<br>

## Scope of Work

- **✅ What's in:** JPA relation patterns (1:1, 1:M, M:M), REST Data Panache override patterns, OpenAPI filter for status
  code correction, Bean Validation, N+1 demonstration, full javadoc and documentation.
- **❌ What's out:** Exception mapper/handler (left to the adopting team's conventions), API versioning, authentication,
  business logic of any kind.

<br>

### High Level System Design

This template is designed for one specific role inside a microservice architecture:

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  Service A       │      │  Service B       │      │  Service C       │
│  (business logic)│      │  (business logic)│      │  (business logic)│
└────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
         │                         │                         │
         └────────────┬────────────┴────────────┬────────────┘
                       ▼                         ▼
              ┌────────────────────────────────────────┐
              │        database wrapper service        │
              │   (REST Data Panache + Swagger)        │
              └──────────────────┬─────────────────────┘
                                  ▼
                            ┌───────────┐
                            │  Database │
                            └───────────┘
```

The use-case domain is a standard academic schema: `Student`, `Profile` (1:1 shared PK), `Course`, and `Enrollment` (M:M
junction), small enough to hold in your head, but covers all three relation types you'll encounter in real databases.

<br>

## Technologies

- Quarkus (REST Data Panache, Hibernate ORM Panache, Hibernate Validator, SmallRye OpenAPI)
- Jakarta JPA / Hibernate
- Jackson (JSON serialization)
- MicroProfile OpenAPI (OASFilter)
- H2 (development), configurable for PostgreSQL/MySQL in production
- JUnit 5 + REST Assured (integration tests)

<br>

## How I Built It

The starting point was a frustration I kept running into: Quarkus REST Data Panache is genuinely fast for prototyping,
but every time I used it in a service with real entity relationships, I'd end up either debugging silent N+1 queries,
rewriting endpoints that didn't handle shared primary keys, or explaining to teammates why the Swagger docs showed
status codes that never actually appeared.

The obvious fix, "just don't use `PanacheEntityResource`", felt like the wrong answer. The generated CRUD is fast to
stand up and genuinely useful for the cases it handles well. The problem wasn't the tool; it was the lack of a pattern
for using it correctly in a constrained scope.

So I defined the constraint first: **a database wrapper microservice**. A service that owns a few tables, exposes them
over REST, and doesn't carry business logic. That's exactly the use case where auto-generated CRUD pays off the most,
and where the specific failure modes are predictable enough to document and fix systematically.

From there, every decision followed from that constraint:

- **Unidirectional relationships only**, the parent doesn't need to know about the child in a service where each
  resource exposes its own data independently.
- **`@JsonIgnore` on relation fields + custom getter/setter**, the only reliable way to prevent lazy proxy
  initialization through auto-generated serialization, while still exposing flat FK ids in the request/response body.
- **`getReference()` for shared-PK inserts**, avoids an unnecessary `SELECT` against the parent table when only the FK
  value is needed to satisfy `@MapsId`.
- **OASFilter at startup**, corrects the OpenAPI spec generated by REST Data Panache to document what the API actually
  does, not what the generator assumes.
- **No exception mapper**, intentionally left out. Error handling conventions vary by team and company; a template that
  prescribes one creates more friction than it removes. The template documents where raw errors surface and what they
  look like, so adopters know exactly where to wire in their own handling.

The N+1 demonstration was added specifically because "this causes extra queries" is easy to say and hard to believe
until you see it. Two endpoints, same response shape, measurably different behavior, that's more convincing than any
amount of explanation.

<br>

## The Product

The deliverable is a working Quarkus project with a Swagger UI that's actually usable for testing, request bodies are
pre-shaped correctly, and the documented status codes reflect what the endpoints actually return.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="caption">Swagger UI showing all entity endpoints with correct status codes.<br>Example: PUT /student</div>
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/swagger_fixed_statuscode.png" title="PUT /student in swagger with fixed http status code response" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="caption">Flattened http request body payload.<br>Example: POST /enrollment request body<br>student.id and course.id presented as flat Long student_id and course_id in payload, not nested object<br></div>
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/swagger_payload_request_flat.png" title="flattened http request" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="caption">Flattened http response body payload.<br>Example: GET /enrollment/{id} response body body<br>student.id and course.id presented as flat Long student_id and course_id in payload, not nested object<br></div>
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/swagger_payload_response_flat.png" title="flattened http response" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>
<br>

Besides providing reusable template with optimized auto-generated swagger, it also provides demonstration the N+1 problem, and how to avoid it.
It provides two demo endpoints with the same response shape, same DTO, but one quietly fires an extra query per request and one doesn’t, that you
can try on your own when using this template project.

<div class="row">
    <div class="caption"><b>Demonstration: The Two Endpoints, both return the same http response body payload</b></div>
</div>
<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/demo_avoid-n+1_swagger-hit-to-api.png" title="The Optimized API test using swagger" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The Optimized API test using swagger</div>
    </div>
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/demo_n+1-problem_swagger-hit-to-api.png" title="The Unoptimized API test using swagger" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The Unoptimized API test using swagger</div>
    </div>
</div>
<div class="row">
    <div class="caption"><b>Demonstration: What’s Actually Happening Underneath</b></div>
</div>
<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/demo_avoid-n+1_log.png" title="The Optimized API test result" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The Optimized API test result: the log shown single SQL query from hibernate to database, 1 query call</div>
    </div>
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/demo_n+1-problem_log.png" title="The Unoptimized API test result" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The Unoptimized API test result: the log shown two SQL query from hibernate to database, 2 query call</div>
    </div>
</div>
<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/docs_n+1problem.png" title="The why behind the N+1 Problem" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Documented "why" behind the N+1 Problem</div>
    </div>
</div>

<br>

The deliverable also includes a comprehensive README with the technical reasoning behind every decision made to create
this blueprint.

<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/docs_cheatsheet.png" title="The cheatsheet" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The cheatsheet: tips, tricks & the reasoning behind them, every design decision in this repo explained with “why”</div>
    </div>
</div>
<br>
<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/quarkus-panache-swagger-blueprint/docs_usecase.png" title="The schema behind the examples" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The schema behind the examples: full before/after normalization writeup</div>
    </div>
</div>

<br>
<br>

## Challenges

- REST Data Panache's generated endpoints behave differently depending on the entity's relation type, the failure modes
  for shared-PK entities, FK-constrained entities, and lazy-loaded relations are each distinct and need separate fixes.
- Java record fields annotated with `@NotNull` alone don't cascade Bean Validation into nested objects, `@Valid` is also
  required, and the distinction isn't obvious from the annotation names.
- `@JsonIgnore` on a relation field prevents lazy loading issues but introduces a different problem: how to expose the
  FK id in the request/response body without the full nested object. Solved via custom getter/setter pairs that Jackson
  treats as a named property.
- OASFilter requires knowing the Quarkus-specific filter lifecycle, `RunStage.RUNTIME_STARTUP` vs build-time, and
  understanding that status code correction needs to happen after REST Data Panache has generated the initial spec.

<br>

## Solutions

- Documented each failure mode with its root cause, not just the fix, so adopters understand _when_ to apply a pattern,
  not just _how_.
- Used `@NotNull @Valid` together on record fields to enable cascading validation into nested entity constraints.
- Implemented custom getter/setter pairs on the owning side of lazy relations, keeping the relation field `@JsonIgnore`
  while exposing flat FK ids as named JSON properties through Jackson's property accessor convention.
- Separated OASFilter (path-matching, endpoint list) from OASFilterHelperPanache (per-HTTP-method correction logic) so
  each can grow independently without coupling.

<br>

## Lessons Learned

The most useful thing this project clarified isn't a Quarkus-specific trick, it's a broader principle about templates
and boilerplate: **the value isn't in what you include, it's in what you decide not to include and why.**

Every "missing" thing in this template (exception mapper, API versioning, business logic, complex cascades) is missing
for a specific reason tied to the scope. Documenting those reasons, in the README, in the cheatsheet, in the javadocs,
is what makes the difference between a template someone clones and discards, and one they actually understand well
enough to extend.

The other thing I'd take forward: when auto-generated code fails silently (no exception, just wrong behavior), the
failure mode is almost always about _when_ something happens relative to the Hibernate session lifecycle. That mental
model, "is the session still open? is the proxy initialized? is this being read during serialization or during a
transaction?", is more useful than any specific fix.

<br>

[![repository](https://img.shields.io/badge/repository-black?style=for-the-badge&logo=github)](https://github.com/noviirna-labs/quarkus-panache-swagger-blueprint)
[![github pages](https://img.shields.io/badge/github_pages-dimgray?style=for-the-badge&logo=github)](https://noviirna-labs.github.io/quarkus-panache-swagger-blueprint)
[![Back to Project](https://img.shields.io/badge/📁_see_projects-olive?style=for-the-badge)](/projects)
