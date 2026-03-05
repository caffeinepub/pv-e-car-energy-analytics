# PV & E-Car Energy Analytics

## Current State

- Full-stack app with II authentication, PV and Wattpilot CSV upload, dashboard with period filter (Tag/Monat/Jahr/Gesamt), KPI cards, and charts.
- Backend stores PV sessions, Wattpilot sessions, and analytics results per user (II principal).
- No tariff data model or revenue calculation exists yet.

## Requested Changes (Diff)

### Add

**Backend:**
- `TarifStufe` type: `{ id: Text; preis: Float; farbe: Text }` (one price level, CHF/kWh, with a color for grid display)
- `TarifZuordnung` type: 7x24 matrix (weekday 0-6, hour 0-23) mapping each slot to a `TarifStufe.id`
- `TarifPeriode` type: `{ id: Text; von: Text; bis: Text; stufen: [TarifStufe]; zuordnungBezug: TarifZuordnung; zuordnungEinspeisung: TarifZuordnung; owner: Principal }`
  - `von`/`bis` are date strings in `DD.MM.YYYY` format
  - `zuordnungBezug`: hour/weekday grid for Bezugstarif (grid draw)
  - `zuordnungEinspeisung`: hour/weekday grid for Einspeisetarif (feed-in)
- Stable map `tarifPerioden` keyed by `Text` (period id)
- CRUD endpoints: `addTarifPeriode`, `updateTarifPeriode`, `deleteTarifPeriode`, `getTarifPerioden`

**Frontend utilities (`utils/tariff.ts`):**
- `computeRevenue(pvRows, tarifPerioden)` — for each PV row, find the matching tariff period by date, look up weekday and hour (assume full-day average = hour 12), apply:
  - Bezugskosten = `netzbezug_kWh * preis_bezug`
  - Einspeisevergütung = `netzeinspeisung_kWh * preis_einspeisung`
  - Netto-Ertrag = Einspeisevergütung - Bezugskosten
- Aggregate results per day, month, year, and total

**Frontend components:**
- `TarifVerwaltung.tsx` — full tariff management page (list of periods, add/edit/delete)
- `TarifPeriodeDialog.tsx` — modal dialog for creating/editing a tariff period:
  - Von / Bis date fields (DD.MM.YYYY)
  - Two separate sections: Bezugstarif and Einspeisetarif
  - Each section: list of `TarifStufe` (color swatch + price input + CHF/kWh label + delete button), "Tarif hinzufügen" button
  - 7x24 grid (rows: MO/DI/MI/DO/FR/SA/SO, cols: 1-24) — click cell to cycle through available Tarifstufen (color fills)
  - OK / Abbrechen buttons
- Revenue KPI cards added to Dashboard: Einspeisevergütung, Bezugskosten, Netto-Ertrag (in CHF) — shown only when tariff periods exist and cover the selected period
- New tab "Tarife" in main navigation (App.tsx)

### Modify

- `App.tsx`: add "Tarife" tab alongside Dashboard and Daten hochladen
- `Dashboard.tsx`: import and use `computeRevenue`, display revenue KPI cards when tariffs are configured
- `main.mo`: add tariff period data model and CRUD

### Remove

Nothing removed.

## Implementation Plan

1. Update `main.mo`: add `TarifStufe`, `TarifZuordnung`, `TarifPeriode` types and stable map with CRUD endpoints
2. Create `src/frontend/src/utils/tariff.ts` with revenue calculation logic
3. Create `src/frontend/src/components/TarifPeriodeDialog.tsx` (modal for create/edit)
4. Create `src/frontend/src/components/TarifVerwaltung.tsx` (period list + management)
5. Update `Dashboard.tsx` to load tariff periods and display revenue KPIs
6. Update `App.tsx` to add "Tarife" navigation tab
