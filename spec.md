# PV & E-Car Energy Analytics

## Current State
The app is fully functional with German-only UI. All text strings are hardcoded in German in App.tsx (702 lines), Dashboard.tsx (1998 lines), DataUpload.tsx (854 lines), JahresVergleich.tsx (582 lines), TarifVerwaltung.tsx (373 lines), TarifPeriodeDialog.tsx (532 lines), MetricCard.tsx (108 lines), CurrencySelector.tsx (131 lines).

## Requested Changes (Diff)

### Add
- `src/frontend/src/contexts/LanguageContext.tsx` — React context providing `lang` ('de'|'en'), `setLang`, and `t(key)` translation function; language persisted in localStorage.
- `src/frontend/src/utils/translations.ts` — Complete DE/EN translation dictionary for all user-visible strings.
- Language switcher button (DE | EN) in the app header, right side, next to logout button.
- Language switcher on the Login and Registration screens (top right).

### Modify
- All components: replace hardcoded German strings with `t('key')` calls from `useLanguage()` hook.
- App.tsx: wrap with `LanguageProvider`, add switcher in header.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `translations.ts` with DE/EN keys for all strings.
2. Create `LanguageContext.tsx` with provider, hook, and localStorage persistence.
3. Update App.tsx: add LanguageProvider wrapper, add language switcher in header and on login/register screens, replace all German strings with t() calls.
4. Update Dashboard.tsx: replace all German strings with t() calls.
5. Update DataUpload.tsx: replace all German strings with t() calls.
6. Update TarifVerwaltung.tsx and TarifPeriodeDialog.tsx: replace strings.
7. Update JahresVergleich.tsx, MetricCard.tsx, CurrencySelector.tsx: replace strings.
