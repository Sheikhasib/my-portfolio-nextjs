---
description: Create a spec file and feature branch for a new portfolio feature
argument-hint: "Feature name, e.g. blog-section or contact-form-api"
allowed-tools: Read, Write, Glob, Bash(git:*)
---

You are a senior developer spinning up a new feature for Sheikh Hasib Uzzaman's
Next.js portfolio site. Always follow the conventions in AGENT.md if it exists.

User input: $ARGUMENTS

## Step 1 — Parse the arguments

From $ARGUMENTS extract:

1. `feature_title` — human readable title in Title Case
   - Example: "Blog Section" or "Contact Form API"
2. `feature_slug` — git and file safe slug
   - Lowercase, kebab-case
   - Only a-z, 0-9 and -
   - Maximum 40 characters
   - Example: blog-section, contact-form-api
3. `branch_name` — format: `feature/<feature_slug>`
   - Example: `feature/blog-section`

If you cannot infer these from $ARGUMENTS, ask the user
to clarify before proceeding.

## Step 2 — Research the codebase

Read these before writing the spec:

- `AGENT.md` — conventions and design-system notes, if present
- `@src/app` — existing routes and pages (App Router)
- `@src/components` — existing section components
- `@src/data` — existing data files (`projects.ts`, `skills.ts`, `timeline.ts`)
- `@src/app/globals.css` — existing `bp-*` utility classes and design tokens
- All files in `.opencode/specs/` — avoid duplicating existing specs

## Step 3 — Create the feature branch

Run:

```
git checkout -b <branch_name>
```

If the branch already exists, check it out instead and tell the user
you're continuing on an existing branch rather than creating a new one.

## Step 4 — Write the spec

Generate a spec document with this exact structure:

# Spec: <feature_title>

## Overview

One paragraph describing what this feature does and why it's being added
to the portfolio.

## Depends on

Which existing sections, components, or data files this feature builds on
(e.g. "Projects data in `src/data/projects.ts`", "Navbar section anchors").

## Routes

Any new App Router routes/pages needed:

- `path` — description — purpose

If no new routes: state "No new routes".

## Components

- **Create:** new component files with their path (`src/components/...`)
- **Modify:** existing components and what changes

## Data changes

New or updated entries needed in `src/data/*.ts` (or state "No data changes").

## Files to change

Every file that will be modified.

## Files to create

Every new file that will be created.

## New dependencies

Any new npm packages. If none: state "No new dependencies".

## Rules for implementation

Specific constraints to follow. Always include:

- Reuse existing `bp-*` classes and design tokens from `globals.css` —
  don't introduce a new visual style without flagging it first.
- Keep content data-driven: copy, links, and structured content belong in
  `src/data/*.ts`, not hardcoded inline in components.
- New sections should use the existing `SectionHeading` component so
  headers stay consistent.
- If the feature needs a backend endpoint, use a Next.js Route Handler
  (`src/app/api/.../route.ts`) — do not introduce a separate Express server.

## Definition of done

A specific testable checklist. Each item must be verifiable by running
`npm run dev` and checking the result in the browser.

---

## Step 5 — Save the spec

Save to: `.opencode/specs/<feature_slug>.md`

## Step 6 — Report to the user

Print a short summary in this exact format:

```
Branch:    <branch_name>
Spec file: .opencode/specs/<feature_slug>.md
Title:     <feature_title>
```

Then tell the user:
"Review the spec at `.opencode/specs/<feature_slug>.md`
then enter Plan Mode with Shift+Tab twice to begin implementation."

Do not print the full spec in chat unless explicitly asked.
