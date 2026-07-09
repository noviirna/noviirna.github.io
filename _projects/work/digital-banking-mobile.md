---
layout: page
title: Retail Digital Banking App
description: 2021 - 2025<br>Mobile Application
  <br><br>Production • Android & iOS • Millions of users • App Modernization • Platform Migration • Agile Software Development Life Cycle
img:
importance: 1
category: professional-work
related_publications: false
toc:
  sidebar: left
---

> **ℹ️ Disclaimers**<br>
> <u>This project was developed under strict professional confidentiality obligations.</u>
> In accordance with banking regulations, UU PDP, and my previous NDA, architecture details and internal implementation specifics cannot be disclosed publicly.
> The tech stack listed below reflects the technologies I worked with directly.
> Recruiters, hiring managers, and those seeking freelance or consulting engagements are welcome to reach out via <a href="/profile" target="_blank">email</a> for further details.

[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)

<br>

## Role

- Solution Architect • Dec 2024 - Aug 2025
- Tech Lead • Jun 2022 - Dec 2024
- Software Developer • Dec 2021 - Jun 2022
- IT Analyst • Aug 2021 - Dec 2021

<br>

## Overview

This project centered on the large-scale architectural modernization of a premier Retail Digital Mobile Banking Platform, targeting millions of active users across both iOS and Android. In an era where mobile-first financial services demand seamless user experience, bulletproof security, and carrier-grade reliability, this initiative aimed to replatform the bank's core mobile banking services from a legacy Monolithic system into a highly resilient, distributed Microservices ecosystem built on a Cloud-Native infrastructure.

The project spanned the full modernization lifecycle from foundational architecture design and engineering standards definition to feature delivery and post-launch Business as Usual (BAU) operations. My involvement evolved across multiple roles throughout the initiative, beginning with establishing the architectural foundation and Microservices templates adopted by up to hundred of engineers, through hands-on backend development of core banking modules, and ultimately leading a dedicated squad as Tech Lead through replatforming execution and live production.

The modernized platform redefined how millions of users interact with their finances on mobile, delivering highly secure and personalized digital banking services; spanning instant user onboarding and eKYC verification, multi-account management, wealth services, payment transactions, and real-time fraud detection; ensuring a seamless, compliant, and reliable financial experience for both existing and new-to-bank customers.

<br>

## Technologies

- **Architecture & Design:** Microservices Architecture Frameworks • REST APIs • API Gateway • Reverse Proxy
- **Back-End & Microservices:** Microservices Architecture Frameworks • REST APIs • Message Queues.
- **DevOps & Observability:** Container Orchestration Platform • CI/CD Pipelines • Log Management & Observability • Infrastructure Monitoring • Application Performance Monitoring (APM)
- **Data & Storage:** Relational Databases • In memory data cache • Object Storage
- **Programming Language:** Java • JavaScript • Modern JavaScript Framework • Enterprise Java Framework • Rust
- **Development Tools & Processes:** OpenAPI Specification (OAS) • Technical Documentation • Issue Tracking & Agile Project Management
- **Security & Compliance:** Digital Identity Verification (eKYC Integration) • Fraud Detection
- **External Services Integration:** Payment Gateway Integration • SMS Gateway Integration • Push Notifications (FCM & APNS) • Email Notification Service

<br>

## Highlighted Initiatives

- **Digital Banking Transformation Initiative**: Led and contributed to the end-to-end architectural migration of a legacy Monolithic mobile banking platform to a distributed Microservices ecosystem on Cloud-Native infrastructure, serving millions of active users
- **Engineering Foundation & Standards**: Established Microservices templates, branching strategies, code standards, documentation standards, and onboarding materials adopted by hundreds of engineers across all development squads
- **Secure Authentication & Identity Management**: Engineered Login, Secret PIN, Device Registration, and Session Management systems to safeguard customer financial data across all banking transactions
- **Digital Onboarding & eKYC Integration**: Developed end-to-end digital onboarding flows for existing and new-to-bank customers, integrating Digital Identity Verification (eKYC) for regulatory compliance
- **Core Banking Feature Delivery**: Delivered Account Management, Wealth Services, Credit Card Application, and Dashboard Money Management.
- **Secret PIN Library & APIs**: Architected and developed a reusable Secret PIN Library & APIs adopted platform-wide across all payment and transaction features, ensuring consistent security standards.
- **Cut Over ETL Migration**: Engineered an ETL migration tool for data extraction, transformation, and encrypted loading during system cut over, ensuring zero data loss and backward compatibility for existing users.
- **Fraud Detection Collaboration**: Acted as technical PIC for fraud case resolution, tracing suspicious transactions across distributed Microservices and providing findings to the Fraud team
- **IT Procurement & Vendor Evaluation**: Participated in evaluation of eKYC and IT security vendors, assessing technical fit, compliance requirements, and integration complexity.

<br>

## Contributions & Impacts

- Established the technical foundation including Microservices templates, engineering standards, and onboarding documentation that enabled 100+ developers to onboard and contribute consistently across all squads
- Delivered core mobile banking features serving millions of active users, including authentication, onboarding, account management, payment, and personalization contributing to the bank's digital banking transaction volume growth
- Architected a Secret PIN Library and APIs adopted platform-wide, reducing duplication and ensuring consistent security implementation across all payment features
- Maintained SLA compliance and high availability in a regulated banking environment, responding to production incidents as On-Call Engineer and collaborating with SRE and performance testing teams to ensure system reliability
- Routinely collaborated with the Fraud team on a weekly basis as technical PIC for fraud case resolution, performing transaction tracing across distributed Microservices systems to provide technical findings and support active fraud investigations in a high-volume financial platform.
- Mentored interns and development program trainees, contributing to engineering capability growth within the organization

<br>

## Challenges

1. **Technical Complexity at Scale:** Operating across multiple squads and hundreds of developers introduced significant coordination overhead. Ensuring consistent behavior across all platforms iOS, Android, and Web while maintaining architectural standards was an ongoing challenge. Inter-squad friction arose frequently due to inconsistent communication and SOP adherence, making technical documentation as critical as feature delivery itself.
2. **Unclear Product Requirements & Misaligned Priorities:** Product requirements were frequently ambiguous, driven by timeline pressure rather than user needs or business understanding. This often required engineering to take on the additional burden of educating Product Owners on the product itself creating misaligned feature priorities and delivering features that saw low user adoption because they were built to satisfy internal stakeholders rather than actual user needs.
3. **High Turnover in a High-Pressure Environment:** The division experienced consistently high developer turnover due to demanding workloads and timelines that were difficult to negotiate. This created continuous knowledge gaps, onboarding overhead, and delivery risk particularly in a regulated environment where institutional knowledge is critical.
4. **Regulatory Compliance vs. Delivery Speed:** Operating under strict financial regulations and SLA requirements meant that changes required careful risk assessment before release. This created persistent tension with Product teams who pushed for rapid releases without fully accounting for compliance risks and potential impact on system stability.

<br>

## Solutions

1. **Cut Over Performance Crisis**: During the initial system cut over, actual user load significantly exceeded projections, resulting in widespread access failures. The team responded immediately with on-site database query optimization, container configuration tuning, and code-level optimizations stabilizing the system under load. A formal performance testing process was subsequently established in collaboration with the performance testing team to validate capacity before deploying the optimization.
2. **SSL Certificate Expiry Downtime**: A production downtime incident was traced to an expired SSL certificate that had not been renewed in time. In response, a dedicated monitoring and notification system was established to alert the relevant division ahead of certificate expiration, alongside a designated PIC rotation responsible for certificate lifecycle management preventing recurrence of the same class of incident.
3. **Inter-Squad Friction & SOP Adherence:** Standardized engineering SOPs, branching strategies, and communication protocols were defined and enforced across squads. Comprehensive onboarding documentation and a shared knowledge base were maintained to reduce dependency on individual knowledge and mitigate the impact of high turnover.
4. **Ambiguous Product Requirements:** Engineering worked proactively to bridge the gap between business intent and technical execution, engaging directly with Business Analysts and Business units to validate requirements upstream reducing rework and aligning feature delivery with actual user and business needs.

<br>

## Lessons Learned

1. **Constraints and boundaries enable scale:** Working with large, distributed teams revealed that without clearly defined rules, boundaries, and SOPs, entropy compounds quickly. The larger the team, the more critical it is to invest in structure upfront.
2. **Data-driven decisions are non-negotiable:** Every architectural and capacity decision must be grounded in real usage data especially in high-stakes, regulated environments.
3. **Documentation and onboarding are force multipliers:** In a high-turnover environment, institutional knowledge stored only in people's heads is a liability. Investing in documentation, onboarding materials, and peer-to-peer knowledge transfer directly impacts delivery velocity and system reliability.
4. **Cross-team and cross-business communication must be proactive:** Waiting for requirements to be handed down through a chain of misaligned stakeholders produces misaligned features. Direct, back-to-back communication with business units and cross-functional teams is essential to delivering features that actually solve real problems.
5. **Performance is a user experience concern, not just a technical one:** System performance directly impacts how users perceive and adopt a product. Resource optimization and performance considerations must be part of every feature analysis not an afterthought.
6. **Human-centric development matters more than feature volume:** Releasing many features that users do not need or adopt is not progress. Features should be driven by real user needs and validated by data not by internal stakeholder pressure or executive preferences.
7. **Complexity requires humility:** Working within large-scale systems with many moving parts and many types of people is fundamentally different from individual or small-team work. The most important skills are often non-technical communication, empathy, negotiation, and knowing when to escalate.

[![Back to Project](https://img.shields.io/badge/📁_see_projects-245641?style=for-the-badge)](/projects)
