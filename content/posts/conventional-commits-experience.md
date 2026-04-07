---
title: Branch and commit conventions on GitHub
author: Mateo
publishedAt: 2026-04-07
tags: git, github, conventional-commits
excerpt: A personal reflection after one university term on how to apply documentation and conventions with technical judgment based on project context.
---

During a full university term, my professors emphasized a point that I now consider essential: documentation and conventions are not decorative process elements; they are part of technical work.

That experience changed how I work. Without clear rules for branches and commits, Git history becomes difficult to read, review, and maintain. With clear rules, the project gains traceability and the team communicates better.

I also learned something equally important: following a convention does not mean applying it rigidly. A convention provides guidance, but final decisions must respond to real project requirements.

![Branch workflow example](https://res.cloudinary.com/dhwxayqeg/image/upload/v1775595991/swappy-20260407-160427_jjwkpn.png)

![Branch types overview](https://res.cloudinary.com/dhwxayqeg/image/upload/v1775595991/swappy-20260407-160514_k4p1ih.png)

## Branches and commits serve different purposes

The most common mistake is treating them as equivalent. They are not.

- **Branch name**: indicates the work context (for example, a feature, a critical fix, or a release preparation).
- **Commit type**: describes the exact nature of the change (`feat`, `fix`, `docs`, `chore`, among others).

In many teams, most sprint work happens in `feature/...` branches, even when that same branch includes bug fixes or documentation updates. In that scenario, semantic precision comes from the commit message, not necessarily from the branch name.

For example, the following combination is valid and consistent:

- Branch: `feature/auth-login`
- Commits: `feat(auth): add login form`, `fix(auth): validate empty password`, `docs(auth): explain login flow`

Some teams also use `docs/...` or `chore/...` branches. That approach is valid if it is documented and applied consistently. The problem is not the selected convention; the problem is inconsistency.

## Practical criteria for applying conventions

1. Respect the documentation and conventions defined by the course or by the team.
2. Maintain consistency in branches and commits to improve review, auditing, and traceability.
3. Adapt how you apply conventions to project requirements; the most theoretically correct option is not always the most practical one.

A useful analogy is database design: normalization is good practice and a solid foundation, but it is not always optimal to push it to the extreme if that harms goals such as performance or operational simplicity. Git conventions work in a similar way: they are necessary as a framework, but they must coexist with real priorities such as performance, delivery timelines, and product needs.

Conventions are not an ornamental requirement. They are a technical coordination mechanism that organizes work and improves documentation quality across the project.

![Network graph example](https://res.cloudinary.com/dhwxayqeg/image/upload/v1775596507/644ec5c6-ddf8-4bed-83ed-5d79f50f496a.png)

My personal conclusion after this term is simple: documentation and conventions should be respected as a foundation, but applied with judgment according to context. In real projects, the right decision is the one that balances technical order with concrete requirements.
