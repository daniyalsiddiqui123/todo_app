---
id: 1
title: Create CLI Todo Constitution
stage: constitution
date: 2025-12-31
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: Claude Code
command: sp.constitution
labels: [constitution, spec-driven-development, cli, python]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

Create a Project Constitution for a Python in-memory CLI Todo app.

Rules:

- Spec-driven development only

- No manual coding

- All changes require updated specs

- Clean architecture & SRP

- Deterministic, testable behavior

- Python 3.13+, UV

- CLI only, no persistence

Output a clear, enforceable constitution.md.

## Response snapshot

Created a comprehensive constitution for the CLI Todo App with 6 core principles:
1. Spec-Driven Development Only
2. No Manual Coding
3. Clean Architecture & SRP
4. Deterministic, Testable Behavior
5. Python 3.13+ & UV Package Manager
6. CLI Interface Only, No Persistence

Plus additional constraints, development workflow, and governance sections.

## Outcome

- ✅ Impact: Created initial project constitution with all required principles
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with comprehensive constitution
- 🔁 Next prompts: Plan and implement CLI Todo app features based on constitution
- 🧠 Reflection: Constitution provides clear guidelines for future development

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin spec creation for CLI Todo app