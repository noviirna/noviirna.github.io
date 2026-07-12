---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
nav_order: 2
collection: projects
display_categories: [professional-work, personal-exploration]
horizontal: false
---

This portfolio is the closest thing I have to showing how I connect technology, organizations, and people in one place. My actual work lives inside proprietary systems or under NDA, so I can't show the real code or the real deck. What I can show is the shape of it: the challenge, what I did about it, what I took away. That's how the project write-ups are structured.

Alongside them are my personal side projects. Pure experiments & explorations, some of them just for fun, built with the constraints taken off. This is what I dig into when nobody's asking me to.

<!-- pages/projects.md -->

<br>

<div class="projects">
<!-- PROJECTS THAT IS POSTED -->
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category font-weight-bold" style="color: var(--global-theme-color)"># {{ category }}</h2>
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
{% else %} <!-- Display projects without categories -->
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
<!-- OTHER TOOLS I BUILT (NOT POSTED PROJECTS) -->
<!--   <a id="other-tools-i-built" href=".#other-tools-i-built">
    <h2 class="category font-weight-bold" style="color: var(--global-theme-color)"># other-tools-i-built</h2>
  </a> -->
  <div class="row row-cols-1 row-cols-md-3">
    <!-- MINI TOOLS 1 : TODO buat PAGE Project nya-->
    <div class="col">
      <div class="card h-100 hoverable">
        <a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank">
          <figure>
            <picture>
              <img src="https://pub-4d54749bd8904ce6a42f98b26e4787c3.r2.dev/assets/img/projects/png-to-webp-converter/png2webp_banner.webp" class="card-img-top"  width="100%" height="auto" alt="project thumbnail" loading="eager" onerror=" this.onerror=null; document.querySelectorAll('.responsive-img-srcset').  forEach(function (n) { n.remove(); });">
            </picture>
          </figure>  
          <div class="card-body">
            <h2 class="card-title">PNG to WebP Converter</h2>
            <p class="card-text">2026<br>Lightweight Web App<br><br>Production • Open   Source • 100% Client-side (Privacy-first) • Built with Human-In-The-Loop AI   Workflow</p>
          </div>
        </a>
        <div class="card-body">
          <p class="card-text"><a href="/blog/2026/discovery-on-how-i-build-ai-agent-workflow/">From Simple Tool to Building Agentic Workflows Without Code→</a></p>  
        </div>
      </div>  
  </div>
  </div>
</div>
