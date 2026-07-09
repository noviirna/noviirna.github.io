---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
nav_order: 2
collection: projects
display_categories: [professional-work, personal]
horizontal: false
---

This portfolio is the closest thing I have to showing how I connect technology, organizations, and people in one place. My actual work lives inside proprietary systems or under NDA, so I can't show the real code or the real deck. What I can show is the shape of it: the challenge, what I did about it, what I took away. That's how the project write-ups are structured.

Alongside them are my personal side projects. Pure experiments & explorations, some of them just for fun, built with the constraints taken off. This is what I dig into when nobody's asking me to.

<!-- pages/projects.md -->

<br>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category font-weight-bold" style="color: var(--global-theme-color)">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
