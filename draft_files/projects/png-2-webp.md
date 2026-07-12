---
layout: page
title: PNG to WebP Converter
description: 2026<br>Lightweight Web App
  <br><br>Production • Open   Source • 100% Client-side (Privacy-first) • Built with Human-In-The-Loop AI Workflow
img: https://pub-4d54749bd8904ce6a42f98b26e4787c3.r2.dev/assets/img/projects/png-to-webp-converter/png2webp_banner.webp
importance: 4
category: personal-exploration
related_publications: false
toc:
  sidebar: left
---

<a href="https://github.com/nirnawati-expt/png-to-webp-converter" target="_blank"><img src="https://img.shields.io/badge/repository-black?style=for-the-badge&amp;logo=github" alt="repository"></a>
<a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank"><img src="https://img.shields.io/badge/see_it_live-006d76?style=for-the-badge" alt="see it live"></a>
[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)

<br>

## Overview

A lightweight, 100% client-side web application for converting PNG images to WebP format. Designed with a striking terminal/console-inspired aesthetic.

_Note: This application was fully built and iterated upon by an AI coding assistant using [Antigravity](https://github.com/google/antigravity), powered by the **Gemini 3.1 Pro (High)** model._

## Key Features

- **100% Client-Side Processing**: No servers, no APIs, no external requests. Your images never leave your browser, ensuring complete privacy and security.
- **Single & Bulk Conversion**: Drop a single PNG or process multiple files in bulk.
- **Built-in Constraints**: Safely handles up to 50 files or 50 MB in total size per batch, preventing browser crashes. Limits are enforced via retro-styled terminal modals.
- **Smart ZIP Downloads**: When converting multiple files, the app automatically bundles all converted WebP images into a single `.zip` archive for easy downloading.
- **Terminal-Inspired UI**: A high-contrast design featuring a true black background, vibrant green text, blinking cursor animations, and monospace typography.
- **Drag & Drop Support**: Easily upload your PNG files by clicking the upload area or dragging and dropping files directly into the browser window. Each new upload **appends** to the existing queue — files already in the list are never replaced.
- **Editable File Queue**: Remove individual files from the queue before conversion using the `[ X ]` button next to each file. The queue is re-validated against the 50-file / 50 MB limits on every append.
- **Live Preview & Stats**: Instantly view your uploaded files, track real-time status indicators during bulk conversion, and see the exact bandwidth saved.
- **One-Shot Conversion Lock**: Once you click `> CONVERT TO WEBP`, both the convert button and the file input (including drag & drop) are locked for the rest of the session — preventing accidental re-submissions. Click `↻ START OVER` to reload the page and start fresh.

## How I Built It

Curious how this got built? [I wrote up the whole process, including what broke and what I fixed, in A First Attempt at Agentic Loop Design (and Where It Broke)]("/blog/2026/ discovery-on-how-i-build-ai-agent-workflow/")

## The Product

[screenshots]

<a href="https://github.com/nirnawati-expt/png-to-webp-converter" target="_blank"><img src="https://img.shields.io/badge/repository-black?style=for-the-badge&amp;logo=github" alt="repository"></a>
<a href="https://nirnawati-expt.github.io/png-to-webp-converter/" target="_blank"><img src="https://img.shields.io/badge/see_it_live-006d76?style=for-the-badge" alt="see it live"></a>
[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)
