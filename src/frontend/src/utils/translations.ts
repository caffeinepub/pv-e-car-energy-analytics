export type Lang = "de" | "en";

const translations = {
  de: {
    // General
    appName: "PV & E-Car Analytics",
    loading: "Wird geladen\u2026",
    save: "Speichern",
    saving: "Speichern\u2026",
    cancel: "Abbrechen",
    delete: "Löschen",
    edit: "Bearbeiten",
    add: "Hinzufügen",
    close: "Schliessen",
    yes: "Ja",
    no: "Nein",
    logout: "Abmelden",
    live: "LIVE",

    // Login
    loginTitle: "PV & E-Car Analytics",
    loginDescription:
      "Melde dich mit deiner Internet Identity an, um deine Energiedaten sicher zu verwalten.",
    loginSecurity:
      "Deine Daten sind verschlüsselt und ausschliesslich deiner Internet Identity zugeordnet.",
    loginButton: "Mit Internet Identity anmelden",
    loginLoggingIn: "Anmelden\u2026",

    // Registration
    registerTitle: "Willkommen! Richte dein Konto ein.",
    registerDescription:
      "Gib deiner PV-Anlage einen Namen, damit deine Daten klar zugeordnet werden können.",
    registerPvLabel: "Name der PV-Anlage",
    registerPvPlaceholder: "z.B. Dachanlage Süd",
    registerButton: "Registrieren",
    registerSaving: "Wird gespeichert\u2026",
    registerErrorName: "Bitte gib einen Namen für deine PV-Anlage ein.",
    registerErrorNoActor: "Verbindung zum Backend nicht verfügbar.",
    registerSuccess: "Registrierung erfolgreich!",
    registerError: "Registrierung fehlgeschlagen. Bitte versuche es erneut.",

    // Navigation tabs
    tabDashboard: "Dashboard",
    tabUpload: "Daten hochladen",
    tabTarife: "Tarife",
    tabVergleich: "Vergleich",
    tabEinstellungen: "Einstellungen",

    // Settings
    settingsProfile: "Profil",
    settingsProfileDescription: "Deine Kontoinformationen",
    settingsPvAnlage: "PV-Anlage",
    settingsPrincipal: "Principal",
    settingsCurrency: "Anzeigewährung",
    settingsCurrencyDescription:
      "Wähle die Währung für alle Kosten- und Ertragsanzeigen.",
    settingsCo2Title: "CO₂-Faktor",
    settingsCo2Description:
      "Gramm CO₂ pro verbrauchter kWh (Strommix). Standardwert für Schweizer Strommix: 0.128 kg/kWh.",
    settingsCo2Label: "kg CO₂/kWh",
    settingsCo2Invalid:
      "Ungültiger CO₂-Faktor. Bitte einen Wert zwischen 0 und 2 eingeben.",

    // Dashboard
    dashboardTimeDay: "Tag",
    dashboardTimeMonth: "Monat",
    dashboardTimeYear: "Jahr",
    dashboardTimeTotal: "Gesamt",
    dashboardGroupKennzahlen: "Kennzahlen",
    dashboardGroupErtraege: "Erträge & Kosten",
    dashboardGroupWattpilot: "Wattpilot Ladekosten",
    dashboardNoData: "Keine Daten vorhanden",
    dashboardNoDataHint: "Bitte Daten hochladen",
    dashboardColorLegendTitle: "Bedeutung der Farben",
    dashboardColorPv: "PV-Erzeugung (Solaranlage)",
    dashboardColorGrid: "Netzbezug",
    dashboardColorFeedIn: "Netzeinspeisung",
    dashboardColorEv: "E-Auto / Wattpilot",
    dashboardColorSelf: "Eigenverbrauch",
    dashboardModeBasic: "Basic",
    dashboardTimeRange: "Zeitraum",
    dashboardSelectRange: "Datum wählen",
    dashboardRangeClear: "Zurücksetzen",
    dashboardModePremium: "Premium",

    // KPI labels
    kpiProduktion: "PV Produktion",
    kpiEigenverbrauch: "Eigenverbrauch",
    kpiAutarkie: "Autarkiegrad",
    kpiNetzeinspeisung: "Netzeinspeisung",
    kpiNetzbezug: "Netzbezug",
    kpiCo2Savings: "CO₂ Einsparung",
    kpiEinspeiseverguetung: "Einspeisevergütung",
    kpiErsparnis: "Ersparnis",
    kpiErtrag: "Ertrag",
    kpiBezugskosten: "Bezugskosten",
    kpiNettoErtrag: "Netto-Ertrag",
    kpiWattpilotNetz: "Wattpilot Netz",
    kpiWattpilotPv: "Wattpilot PV",
    kpiWattpilotBatterie: "Wattpilot Batterie",
    kpiWattpilotGesamt: "Wattpilot Gesamt",
    kpiBatterieGeladen: "Batterie geladen",
    kpiBatterieEntladen: "Batterie entladen",
    kpiSoc: "Ø Ladestand",

    // DataUpload
    uploadBasicTitle: "Basic Import",
    uploadBasicDescription: "Separate CSV-Dateien für PV-Daten und Wattpilot",
    uploadPremiumTitle: "Premium Import",
    uploadPremiumDescription:
      "Benutzerdefinierte CSV-Datei mit 5-Minuten-Intervallen",
    uploadPvLabel: "PV-Daten CSV",
    uploadWattpilotLabel: "Wattpilot CSV",
    uploadPremiumLabel: "Premium CSV",
    uploadDropzone: "Datei hier ablegen oder klicken",
    uploadDemoLoad: "Demo-Daten laden",
    uploadDemoDelete: "Demo-Daten löschen",
    uploadDemoLoading: "Wird geladen\u2026",
    uploadDemoDeleting: "Wird gelöscht\u2026",
    uploadSuccess: "Daten erfolgreich hochgeladen",
    uploadError: "Fehler beim Hochladen",
    uploadProgress: "Teil {current} / {total}",
    uploadParsing: "Wird verarbeitet\u2026",
    uploadDatasets: "Datensätze",
    uploadFileStored: "Datei gespeichert",
    uploadFileSize: "Dateigrösse",
    uploadStatus: "Status",
    uploadDashboardSource: "Dashboard-Datenquelle",
    uploadSourceSelect: "Welche Daten sollen im Dashboard angezeigt werden?",
    uploadCsvOnly: "Nur .csv Dateien",
    uploadColumns: "Spalten:",
    uploadNoDatasets: "Keine Datensätze vorhanden",
    uploadDeleteDescription: '"{name}" wird dauerhaft gelöscht.',
    uploadDeleteAriaLabel: "Datensatz löschen",
    uploadSubtitle:
      "CSV-Dateien hochladen und Datenquelle für das Dashboard auswählen",
    uploadPvUploaded: "Hochgeladene PV-Datensätze ({count})",
    uploadWattpilotUploaded: "Hochgeladene Wattpilot-Datensätze ({count})",
    uploadPremiumUploaded: "Hochgeladene Premium-Datensätze ({count})",
    uploadPremiumCustom: "Benutzerdefiniert Premium",
    uploadPremiumInfo1:
      "Die Premium-Datei enthält PV- und Wattpilot-Daten in einer einzigen CSV.",
    uploadPremiumInfo2:
      "5-Minuten-Daten werden automatisch zu Stundenwerten aggregiert.",
    uploadDataNote: "Hinweis zur Datenverarbeitung",
    uploadDataNoteBasic:
      "Basic: PV-Daten in Wh werden automatisch in kWh umgerechnet.",
    uploadErrorLoading: "Datensätze konnten nicht geladen werden",
    uploadErrorNoBackend: "Keine Verbindung zum Backend",
    uploadErrorCsvOnly: "Bitte eine .csv Datei hochladen",
    uploadErrorPv: "Fehler beim Hochladen der PV-Daten",
    uploadErrorWattpilot: "Fehler beim Hochladen der Wattpilot-Daten",
    uploadErrorPremium: "Fehler beim Hochladen der Premium-Daten",
    uploadSuccessFile: '"{name}" erfolgreich hochgeladen',

    // Tarife
    tarifeTitle: "Tarifverwaltung",
    tarifeAdd: "Neue Tarifperiode",
    tarifeEmpty: "Keine Tarifperioden vorhanden",
    tarifeFrom: "Von",
    tarifeTo: "Bis",
    tarifeBezug: "Bezugstarif",
    tarifeEinspeisung: "Einspeisetarif",
    tarifeStufen: "Tarifstufen",
    tarifeGrid: "Stundentarif-Raster",
    tarifeWeekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    tarifeHour: "Uhr",
    tarifeColorAdd: "Farbe hinzufügen",
    tarifeColorPrice: "Preis ({currency}/kWh)",
    tarife24hView: "24h Ansicht",
    tarifeDeleteConfirm: "Tarifperiode wirklich löschen?",
    tarifeEditTitle: "Tarifperiode bearbeiten",
    tarifeNewTitle: "Neue Tarifperiode",
    tarife_period_label: "Periode",

    // Jahresvergleich
    vergleichTitle: "Jahresvergleich",
    vergleichYear1: "Jahr 1",
    vergleichYear2: "Jahr 2",
    vergleichSelectYear: "Jahr wählen",
    vergleichNoData: "Keine Daten für dieses Jahr",
    vergleichProduktion: "Produktion",
    vergleichVerbrauch: "Verbrauch",
    vergleichEinspeisung: "Einspeisung",
    vergleichNetzbezug: "Netzbezug",
    vergleichEigenverbrauch: "Eigenverbrauch",
    vergleichErtrag: "Ertrag",
    vergleichBezugskosten: "Bezugskosten",

    tarifeSubtitle: "Tarifperioden",
    tarifeEmptyHint: "Klicke auf 'Neue Tarifperiode' um zu beginnen.",
    tarifeDeleteDescription:
      "Die Periode {period} wird unwiderruflich gelöscht.",
    vergleichMonthlyComparison: "Monatsvergleich",
    vergleichValuesInKwh: "Werte in kWh",
    vergleichNoDataHint:
      "Lade PV-CSV-Daten hoch, um den Jahresvergleich zu nutzen.",
    vergleichNoDataYear: "Keine Daten für {year}",

    // Footer
    footerBuiltWith: "Erstellt mit",
    footerCopyright: "© {year} PV & E-Car Analytics",
  },
  en: {
    // General
    appName: "PV & E-Car Analytics",
    loading: "Loading\u2026",
    save: "Save",
    saving: "Saving\u2026",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    close: "Close",
    yes: "Yes",
    no: "No",
    logout: "Logout",
    live: "LIVE",

    // Login
    loginTitle: "PV & E-Car Analytics",
    loginDescription:
      "Sign in with your Internet Identity to securely manage your energy data.",
    loginSecurity:
      "Your data is encrypted and exclusively linked to your Internet Identity.",
    loginButton: "Sign in with Internet Identity",
    loginLoggingIn: "Signing in\u2026",

    // Registration
    registerTitle: "Welcome! Set up your account.",
    registerDescription:
      "Give your PV system a name so your data can be clearly identified.",
    registerPvLabel: "PV System Name",
    registerPvPlaceholder: "e.g. Rooftop South",
    registerButton: "Register",
    registerSaving: "Saving\u2026",
    registerErrorName: "Please enter a name for your PV system.",
    registerErrorNoActor: "Backend connection not available.",
    registerSuccess: "Registration successful!",
    registerError: "Registration failed. Please try again.",

    // Navigation tabs
    tabDashboard: "Dashboard",
    tabUpload: "Upload Data",
    tabTarife: "Tariffs",
    tabVergleich: "Comparison",
    tabEinstellungen: "Settings",

    // Settings
    settingsProfile: "Profile",
    settingsProfileDescription: "Your account information",
    settingsPvAnlage: "PV System",
    settingsPrincipal: "Principal",
    settingsCurrency: "Display Currency",
    settingsCurrencyDescription:
      "Select the currency for all cost and revenue displays.",
    settingsCo2Title: "CO₂ Factor",
    settingsCo2Description:
      "Grams of CO₂ per kWh consumed (energy mix). Default for Swiss energy mix: 0.128 kg/kWh.",
    settingsCo2Label: "kg CO₂/kWh",
    settingsCo2Invalid:
      "Invalid CO₂ factor. Please enter a value between 0 and 2.",

    // Dashboard
    dashboardTimeDay: "Day",
    dashboardTimeMonth: "Month",
    dashboardTimeYear: "Year",
    dashboardTimeTotal: "Total",
    dashboardGroupKennzahlen: "Key Metrics",
    dashboardGroupErtraege: "Revenue & Costs",
    dashboardGroupWattpilot: "Wattpilot Charging Costs",
    dashboardNoData: "No data available",
    dashboardNoDataHint: "Please upload data",
    dashboardColorLegendTitle: "Color Legend",
    dashboardColorPv: "PV Generation (Solar)",
    dashboardColorGrid: "Grid Consumption",
    dashboardColorFeedIn: "Grid Feed-in",
    dashboardColorEv: "EV / Wattpilot",
    dashboardColorSelf: "Self-consumption",
    dashboardModeBasic: "Basic",
    dashboardModePremium: "Premium",
    dashboardTimeRange: "Date Range",
    dashboardSelectRange: "Select date",
    dashboardRangeClear: "Reset",

    // KPI labels
    kpiProduktion: "PV Production",
    kpiEigenverbrauch: "Self-consumption",
    kpiAutarkie: "Self-sufficiency",
    kpiNetzeinspeisung: "Grid Feed-in",
    kpiNetzbezug: "Grid Consumption",
    kpiCo2Savings: "CO₂ Savings",
    kpiEinspeiseverguetung: "Feed-in Revenue",
    kpiErsparnis: "Savings",
    kpiErtrag: "Revenue",
    kpiBezugskosten: "Grid Costs",
    kpiNettoErtrag: "Net Revenue",
    kpiWattpilotNetz: "Wattpilot Grid",
    kpiWattpilotPv: "Wattpilot PV",
    kpiWattpilotBatterie: "Wattpilot Battery",
    kpiWattpilotGesamt: "Wattpilot Total",
    kpiBatterieGeladen: "Battery Charged",
    kpiBatterieEntladen: "Battery Discharged",
    kpiSoc: "Avg. State of Charge",

    // DataUpload
    uploadBasicTitle: "Basic Import",
    uploadBasicDescription: "Separate CSV files for PV data and Wattpilot",
    uploadPremiumTitle: "Premium Import",
    uploadPremiumDescription: "Custom CSV file with 5-minute intervals",
    uploadPvLabel: "PV Data CSV",
    uploadWattpilotLabel: "Wattpilot CSV",
    uploadPremiumLabel: "Premium CSV",
    uploadDropzone: "Drop file here or click",
    uploadDemoLoad: "Load Demo Data",
    uploadDemoDelete: "Delete Demo Data",
    uploadDemoLoading: "Loading\u2026",
    uploadDemoDeleting: "Deleting\u2026",
    uploadSuccess: "Data uploaded successfully",
    uploadError: "Upload error",
    uploadProgress: "Part {current} / {total}",
    uploadParsing: "Processing\u2026",
    uploadDatasets: "Records",
    uploadFileStored: "File stored",
    uploadFileSize: "File size",
    uploadStatus: "Status",
    uploadDashboardSource: "Dashboard Data Source",
    uploadSourceSelect: "Which data should be displayed in the dashboard?",
    uploadCsvOnly: "Only .csv files",
    uploadColumns: "Columns:",
    uploadNoDatasets: "No records available",
    uploadDeleteDescription: '"{name}" will be permanently deleted.',
    uploadDeleteAriaLabel: "Delete record",
    uploadSubtitle: "Upload CSV files and select data source for the dashboard",
    uploadPvUploaded: "Uploaded PV records ({count})",
    uploadWattpilotUploaded: "Uploaded Wattpilot records ({count})",
    uploadPremiumUploaded: "Uploaded Premium records ({count})",
    uploadPremiumCustom: "Custom Premium",
    uploadPremiumInfo1:
      "The Premium file contains PV and Wattpilot data in a single CSV.",
    uploadPremiumInfo2:
      "5-minute data is automatically aggregated to hourly values.",
    uploadDataNote: "Data Processing Note",
    uploadDataNoteBasic:
      "Basic: PV data in Wh is automatically converted to kWh.",
    uploadErrorLoading: "Could not load records",
    uploadErrorNoBackend: "No backend connection",
    uploadErrorCsvOnly: "Please upload a .csv file",
    uploadErrorPv: "Error uploading PV data",
    uploadErrorWattpilot: "Error uploading Wattpilot data",
    uploadErrorPremium: "Error uploading Premium data",
    uploadSuccessFile: '"{name}" uploaded successfully',

    // Tarife
    tarifeTitle: "Tariff Management",
    tarifeAdd: "New Tariff Period",
    tarifeEmpty: "No tariff periods defined",
    tarifeFrom: "From",
    tarifeTo: "To",
    tarifeBezug: "Purchase Tariff",
    tarifeEinspeisung: "Feed-in Tariff",
    tarifeStufen: "Tariff Levels",
    tarifeGrid: "Hourly Tariff Grid",
    tarifeWeekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    tarifeHour: "h",
    tarifeColorAdd: "Add color",
    tarifeColorPrice: "Price ({currency}/kWh)",
    tarife24hView: "24h View",
    tarifeDeleteConfirm: "Really delete this tariff period?",
    tarifeEditTitle: "Edit Tariff Period",
    tarifeNewTitle: "New Tariff Period",
    tarife_period_label: "Period",

    // Jahresvergleich
    vergleichTitle: "Year Comparison",
    vergleichYear1: "Year 1",
    vergleichYear2: "Year 2",
    vergleichSelectYear: "Select year",
    vergleichNoData: "No data for this year",
    vergleichProduktion: "Production",
    vergleichVerbrauch: "Consumption",
    vergleichEinspeisung: "Feed-in",
    vergleichNetzbezug: "Grid consumption",
    vergleichEigenverbrauch: "Self-consumption",
    vergleichErtrag: "Revenue",
    vergleichBezugskosten: "Grid costs",

    tarifeSubtitle: "Tariff Periods",
    tarifeEmptyHint: "Click 'New Tariff Period' to get started.",
    tarifeDeleteDescription: "The period {period} will be permanently deleted.",
    vergleichMonthlyComparison: "Monthly Comparison",
    vergleichValuesInKwh: "Values in kWh",
    vergleichNoDataHint: "Upload PV CSV data to use the year comparison.",
    vergleichNoDataYear: "No data for {year}",

    // Footer
    footerBuiltWith: "Built with",
    footerCopyright: "© {year} PV & E-Car Analytics",
  },
} as const;

export type TranslationKey = keyof typeof translations.de;
export type Translations = typeof translations.de;

export function getTranslations(lang: Lang): Translations {
  return translations[lang] as Translations;
}

export default translations;
