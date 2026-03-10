# PV & E-Car Energy Analytics

## Current State
- Dashboard has time filter bar with Tag/Monat/Jahr/Gesamt modes plus prev/next arrows
- No date range (von-bis) picker exists
- DataUpload.tsx has several hardcoded German strings that bypass t()
- translations.ts has uploadBasic/Premium keys but DataUpload.tsx uses some hardcoded strings

## Requested Changes (Diff)

### Add
- Date range picker (von-bis) in Dashboard filter bar: new "Zeitraum" mode tab that shows a popover with a range calendar (start date + end date). When a range is selected, data is filtered to rows within [start, end] inclusive. Both Basic and Premium data are filtered by this range.
- Translation keys for DataUpload missing strings: uploadCsvOnly, uploadColumns, uploadNoDatasets, uploadDeleteDescription, uploadDeleteAriaLabel, uploadSubtitle, uploadPvUploaded, uploadWattpilotUploaded, uploadPremiumUploaded, uploadPremiumCustom, uploadPremiumInfo1, uploadPremiumInfo2, uploadDataNote, uploadDataNoteBasic, uploadErrorLoading, uploadErrorNoBackend, uploadErrorCsvOnly, uploadErrorPv, uploadErrorWattpilot, uploadErrorPremium, uploadSuccessFile
- DataUpload.tsx: replace all hardcoded German strings with t() calls

### Modify
- Dashboard.tsx: add PeriodMode "zeitraum" with dateRange state {from: Date|null, to: Date|null}. Filter logic uses date range when in zeitraum mode. Filter bar shows new tab "Zeitraum" / "Range". When zeitraum is active, show a date range picker popover with label showing "DD.MM.YYYY – DD.MM.YYYY".
- translations.ts: add new keys for date range UI and DataUpload missing strings (both de and en)

### Remove
- Nothing removed

## Implementation Plan
1. Add new translation keys to translations.ts (date range + DataUpload missing strings) for both de and en
2. Update Dashboard.tsx:
   - Add "zeitraum" to PeriodMode type
   - Add dateRange state: { from: Date | null; to: Date | null }
   - Add filter functions for date range (filterRowsByRange, filterWattpilotByRange, filterPremiumByRange)
   - Add "Zeitraum"/"Range" tab button in filter bar
   - When zeitraum mode: show Popover with shadcn Calendar in range mode (two-month if needed), plus clear button
   - Display selected range as "DD.MM.YYYY – DD.MM.YYYY" label
   - Apply range filter in filteredPVRows, filteredWPRows, filteredPremiumRows memos
3. Update DataUpload.tsx: replace all hardcoded strings with t() calls using new keys
