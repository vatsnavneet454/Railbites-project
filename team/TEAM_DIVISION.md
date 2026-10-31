# RailBite — 5-person team division

Use this as a practical division of work. Each person owns a clear module, but everyone should coordinate through Git and agree on shared UI/data formats before coding.

## Person 1 — UI/UX and Landing Page
- Own `index.html` and the landing-page sections in `css/style.css`.
- Refine visual consistency, responsive layout, navigation and accessibility.
- Maintain the image credits in `IMAGE_CREDITS.md`.
- Deliverable: polished home page, mobile navigation, visual QA checklist.

## Person 2 — Authentication and User Roles
- Own `pages/login.html`, `pages/register.html`, and `js/auth.js`.
- Implement validation, duplicate-email checks, role selection and role-based redirect.
- Coordinate the storage key and user object shape with Person 5.
- Deliverable: passenger/vendor/expert registration and login flow.

## Person 3 — Passenger Workspace
- Own passenger-facing branch/section in `js/workspace.js` and review `pages/passenger.html`.
- Implement menu browsing, add-order interaction, PNR UI, feedback form and helper panel.
- Clearly label any non-live train/PNR information.
- Deliverable: passenger journey and food ordering interface.

## Person 4 — Vendor and Quality Workspaces
- Own vendor/expert sections in `js/workspace.js` and review `pages/vendor.html` and `pages/expert.html`.
- Implement menu management, incoming order view, hygiene inspection records and score display.
- Coordinate data fields with Person 3.
- Deliverable: vendor and quality expert workspaces.

## Person 5 — Data, Integration, Testing and Release
- Own `js/store.js`, `README.md`, integration checks and final ZIP.
- Define localStorage keys and object structures; test persistence, logout and role routing.
- Run the project in Chrome and Firefox; test desktop/mobile sizes.
- Maintain a bug list and combine team contributions.

## Team workflow
1. Person 5 creates the repository and shared `main` branch.
2. Each person works in a separate feature branch.
3. Agree on the data objects before parallel work:
   - user: `id, name, email, phone, role, password, joined`
   - order: `id, uid, passenger, item, price, status, date`
   - hygiene check: `vendor, score, notes, expert, date`
4. Merge one module at a time and test the complete journey after every merge.
5. Do not commit real passwords, personal data or API/database credentials.

## Suggested review order
Landing page → register → login → passenger flow → vendor flow → expert flow → persistence → responsive testing → ZIP/release.


## Added modules
- Person 3: PNR and station selector UI; label live lookup as unavailable until an authorised railway API is integrated.
- Person 4: food hygiene checklist, inspection records and complaint review workflow.
- Person 5: report charts, CSV export, localStorage integration and testing.
