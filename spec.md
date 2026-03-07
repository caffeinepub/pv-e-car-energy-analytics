# PV & E-Car Energy Analytics

## Current State

- Dashboard has a "Demo-Daten laden" button in the empty state.
- Demo data (`DEMO_PV_CSV`, `DEMO_WATTPILOT_CSV`) is defined inline in `Dashboard.tsx` and covers only January 2024 (15 days). No Wattpilot data existed in previous iterations for the demo beyond Jan 2024.
- There is no "Delete demo data" button anywhere.
- The backend has `addPVSession`, `addWattpilotSession`, `deleteSession` APIs.
- Sessions are identified by a UUID `id` and a `name` string.
- The demo data is uploaded with names "Demo PV-Daten" and "Demo Wattpilot-Daten".
- Tariff periods are managed separately and not touched here.

## Requested Changes (Diff)

### Add
- Extended demo PV data covering all 12 months of **2024** and all 12 months of **2025** (realistic seasonal PV profile, one row per day, ~365 rows per year = ~730 rows total).
- Extended demo Wattpilot data covering all 12 months of **2024** and all 12 months of **2025** (matching dates, realistic EV charging split between PV/Grid/Battery).
- A demo tariff period covering 2024-01-01 to 2025-12-31 with a simple flat bezug rate (0.28 CHF/kWh) and einspeisung rate (0.10 CHF/kWh), stored as part of the demo load so financial KPIs are visible immediately.
- A **"Demo-Daten löschen"** button that:
  - Is **only visible** when demo data is currently loaded (i.e. the PV sessions list contains a session named "Demo PV-Daten 2024-2025").
  - Deletes only the demo PV session, demo Wattpilot session, and demo tariff period (identified by name/id stored at load time).
  - Shows a confirmation AlertDialog before deleting.
  - After deletion, resets the dashboard to the empty state.

### Modify
- `DEMO_PV_CSV`: Replace the existing 15-row January-2024 snippet with a full 2-year dataset (2024 + 2025, all months, one row per day). Use realistic seasonal values: low in winter (Jan/Feb/Nov/Dec ~5–15 kWh/day generation), high in summer (May–Aug ~25–45 kWh/day).
- `DEMO_WATTPILOT_CSV`: Replace the existing 15-row snippet with matching 2-year Wattpilot data. Use realistic daily charging split: PV share higher in summer (~60–80%), lower in winter (~30–50%).
- `handleLoadDemoData`: After uploading PV + Wattpilot demo sessions, also call `actor.addTarifPeriode(...)` to add a demo tariff period with flat rates so financial metrics render without manual tariff entry.
- Demo sessions should be uploaded with the name **"Demo PV-Daten 2024-2025"** and **"Demo Wattpilot-Daten 2024-2025"** to allow detection.
- The empty-state button label changes to "Demo-Daten laden (2024–2025)".
- When demo data IS loaded, show a secondary "Demo-Daten löschen" button near the period filter bar (not just in the empty state).

### Remove
- The old 15-row DEMO_PV_CSV and DEMO_WATTPILOT_CSV constants.

## Implementation Plan

1. **Generate extended demo data constants** in `Dashboard.tsx`:
   - `DEMO_PV_CSV_2YR`: header + ~730 rows (01.01.2024–31.12.2025), seasonal generation curve.
   - `DEMO_WATTPILOT_CSV_2YR`: header + ~730 rows, matching dates, seasonal EV charging split.
   - `DEMO_TARIF_PERIODE`: a `TarifPeriode` object with flat bezug (0.28) and einspeisung (0.10) rates, all 7×24 grid slots assigned to single stufe, covering 2024-01-01 to 2025-12-31.

2. **Add demo detection state**: After loading sessions, check if any PV session is named "Demo PV-Daten 2024-2025". Expose `isDemoLoaded: boolean` and `demoPVSessionId / demoWPSessionId / demoTarifId` tracked in state (set when demo is loaded, cleared on delete).

3. **Update `handleLoadDemoData`**:
   - Upload new 2-year CSV data with name "Demo PV-Daten 2024-2025" / "Demo Wattpilot-Daten 2024-2025".
   - Call `actor.addTarifPeriode(DEMO_TARIF_PERIODE)`.
   - Store returned IDs in state so the delete handler knows what to remove.

4. **Implement `handleDeleteDemoData`**:
   - Delete PV session, Wattpilot session, tariff periode by stored IDs.
   - Clear `allPVRows`, `allWPRows`, `allTarifPerioden` (or reload from backend).
   - Show success toast.

5. **UI placement of delete button**:
   - In the period filter bar (top of dashboard), conditionally render a "Demo-Daten löschen" button when `isDemoLoaded` is true.
   - Wrap in AlertDialog for confirmation.
   - `data-ocid="dashboard.demo_delete_button"` on the trigger, `data-ocid="dashboard.demo_delete.confirm_button"` on confirm.
