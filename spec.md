# PV & E-Car Energy Analytics

## Current State

- Dashboard with KPI cards (Kennzahlen, Erträge & Kosten, Wattpilot Ladekosten), collapsible groups, period filter (Tag/Monat/Jahr/Gesamt)
- Tabs: Dashboard, Daten hochladen, Tarife, Einstellungen
- Einstellungen-Tab: Profil info + Währungsauswahl (CurrencySelector)
- Backend: UserProfile has fields: principal, pvName, registeredAt, waehrung
- analytics.ts: aggregateByYear returns YearlyEnergy[]
- tariff.ts: computeRevenueByYear returns yearly revenue breakdown
- CurrencyContext: provides currency string globally

## Requested Changes (Diff)

### Add
1. **CO2-Einsparung feature:**
   - Backend: add `co2Faktor: Float` field to UserProfile (default 0.128 kg/kWh for Swiss mix)
   - Backend: new `updateCo2Faktor(co2Faktor: Float)` mutation
   - Einstellungen-Tab: new card "CO2-Faktor" with numeric input (kg/kWh), save button, persisted per II
   - Dashboard: new CO2-Kachel in "Kennzahlen" group showing kg CO2 saved = eigenverbrauch_kWh × co2Faktor
   - CO2Context (or extend CurrencyContext pattern) to make co2Faktor available app-wide

2. **Jahresvergleich-Tab:**
   - New tab "Vergleich" (with GitCompareArrows or BarChart2 icon) in the main TabsList
   - New component `JahresVergleich.tsx`
   - Two year selectors (Jahr 1, Jahr 2) — dropdowns populated from available years in loaded data
   - Side-by-side grouped bar chart comparing key metrics per month: Erzeugung, Verbrauch, Einspeisung, Netzbezug, Eigenverbrauch
   - Summary cards below: total Erzeugung, Ertrag (if tariffs available), CO2-Einsparung for each selected year
   - Only 2 years at a time; years are independently selectable

### Modify
- `UserProfile` type in backend.mo: add `co2Faktor: Float`
- `registerUser`: initialize co2Faktor to 0.128
- `backend.d.ts`: update UserProfile type to include co2Faktor
- `App.tsx SettingsPanel`: add CO2-Faktor input card
- `Dashboard.tsx`: add CO2-Einsparung MetricCard in Kennzahlen group
- `App.tsx MainApp`: add Vergleich tab

### Remove
- Nothing removed

## Implementation Plan

1. Update `main.mo`: add `co2Faktor: Float` to UserProfile, add `updateCo2Faktor` function, default 0.128
2. Create `Co2Context.tsx` — provides co2Faktor, loadCo2Faktor, saveCo2Faktor
3. Update `App.tsx`: wrap app in Co2Provider, add CO2-Faktor settings card in SettingsPanel, add Vergleich tab
4. Update `Dashboard.tsx`: read co2Faktor from context, add CO2-Einsparung kachel (eigenverbrauch × co2Faktor)
5. Create `JahresVergleich.tsx`: year selectors, grouped monthly bar chart, summary cards
6. Update backend.d.ts to include co2Faktor on UserProfile and updateCo2Faktor method
