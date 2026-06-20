---
uuid: 2d83377f-1e6f-4083-a36f-99aba059bf56
title: GitFlow for Noobies
tags:
  - git
  - workflow
  - devops
status: published
publishedAt: 2026-06-19 21:04:35
---

During university projects, I have noticed something that happens more often than it should: many students still share code through compressed `.zip` files instead of using version control. I do not think this always comes from laziness or bad practice; many times, it simply happens because no one has clearly explained how tools like Git can make collaboration easier.

Before diving in, it is important to clarify a common confusion: **Git** is the local version control system, **GitFlow** is a workflow for organizing branches, and **GitHub** is a platform for hosting repositories. GitHub is not the only option; alternatives such as **GitLab** and **Codeberg** also allow developers to host and collaborate on projects.

### What is GitFlow?

Created by **Vincent Driessen** in 2010, **GitFlow** is a branching workflow for Git designed to give teams a clear, predictable structure when working on software projects. Instead of everyone working directly on the same branch, each type of task has its own dedicated space, avoiding collaboration conflicts.

### The Branching Structure

In Driessen's model, branches are categorized by their role in the project lifecycle:

| Branch | Type | Description | Source Branch | Target Branch |
|---|---|---|---|---|
| **`main`** | Core | Contains the stable, production-ready version of the project. | - | - |
| **`develop`** | Core | Where the latest development changes are integrated for the next release. | - | - |
| **`feature/*`** | Temporary | Used to build new functionalities. | `develop` | `develop` |
| **`release/*`** | Temporary | Used to prepare and polish a new version for delivery. | `develop` | `main` |
| **`hotfix/*`** | Temporary | Used to quickly fix urgent problems in production. | `main` | `main` and `develop` |





TODO: 

ARREGLAR LAS TABLAS EN EL CSS PORQUE SE VEN DEL CULO XD

mencionar y arreglas la tabla la explicacion y hacer en mermeid el diagrama explicativo xd 
