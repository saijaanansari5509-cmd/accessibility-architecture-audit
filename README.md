# Accessibility Baseline & Repository Architecture Audit

## Project Overview
This project documents an accessibility audit of the myScheme public website and provides a starter full-stack project structure.

## Audit Scope
- Lighthouse accessibility review
- Manual keyboard-only navigation
- Documentation of five accessibility findings
- Recommended remediation for each finding

## Audit Findings
1. Keyboard navigation and focus order
2. Language selector keyboard accessibility
3. Search field color contrast
4. Footer links keyboard accessibility
5. Accessibility widget keyboard focus

See `accessibility-audit-report.xlsx` for evidence, WCAG references, severity, user impact, recommendations, owner, and status.

## Project Structure
- `Client/` — Frontend HTML, styling, and user interface
- `Server/` — Node.js HTTP API and audit findings data
- `docs/` — Audit report and project documentation
- `tests/` — Manual testing checklist and test documentation

## Architecture Boundaries
The client is responsible for presenting the project overview and audit findings.
The server exposes JSON endpoints:
- `GET /api/health` — Checks whether the API is running
- `GET /api/findings` — Returns the recorded audit findings

The server stores findings in a structured JavaScript array. The client and server are separate components.

## Local Setup

### Requirements
- Node.js
- A web browser
- Visual Studio Code (recommended)

### Start the API
Open a terminal in the repository root and run:

```bash
cd Server
node server.js
