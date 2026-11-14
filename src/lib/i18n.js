const translations = {
  en: {
    app: {
      brand: 'Vojtěch Kubáč',
      darkModeAriaLabel: 'Toggle dark mode',
    },
    meta: {
      title: 'Vojtěch Kubáč | Portfolio',
      description:
        'C++ software engineer focused on scientific computing and engineering simulation (CFD, FEA, aeroacoustics).',
    },
    nav: {
      about: 'About',
      background: 'Background',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'I build software that has to be right.',
      subtitle:
        'Numerical code for engineering simulations, production web apps for healthcare, ' +
        'robot- and drone-swarm simulations.',
    },
    about: {
      title: 'About Me',
      description:
        "For 7 years I've developed numerical modules of TCAE, a commercial simulation application used for structural analysis, fluid dynamics, aeroacoustics and optimization, running on desktops and HPC clusters. The work covers the whole path from solver integration and numerical code to the database, GUI plugins and build and release tooling." +
        '\n\n' +
        "Beyond that, I've built robot- and drone-swarm simulations, route-optimization software and production web applications for healthcare clients." +
        '\n\n' +
        "AI agents write a good chunk of my code these days, usually several at once on separate branches. To keep quality up, I check their work as I go and don't ship anything I haven't tested and read." +
        '\n\n' +
        "Mathematician by training, I'm drawn to the lower layers: backend and systems engineering, performance-sensitive code (C++, Rust and the like).",
    },
    experience: {
      title: 'Experience',
      role: 'Role',
      company: 'Company',
      period: 'Period',
    },
    education: {
      title: 'Education',
      degree: 'Degree',
      school: 'School',
      year: 'Year',
      thesis: 'Thesis',
      supervisor: 'Supervisor',
    },
    skills: {
      title: 'Skills',
      languages: 'Languages',
      build: 'Build, CI & packaging',
      methods: 'Numerical methods',
      simulation: 'Simulation & meshing',
      gui: 'GUI & visualization',
      databases: 'Databases',
      robotics: 'Robotics & simulation',
      web: 'Web',
      aiAssisted: 'AI & ML',
    },
    projects: {
      title: 'Projects',
      demo: 'Live Demo',
      details: {
        open: 'Details',
        close: 'Close',
        period: 'Timeline',
        achievements: 'Highlights',
        teamPrefix: 'Worked with a team of ~',
        teamSuffix: ' developers',
        teamSolo: 'Sole developer.',
      },
      sources: {
        cfdSupport: 'CFD SUPPORT — TCAE (commercial CAE)',
        github: 'GitHub & personal',
        academic: 'Research',
        ententee: 'ententee (client work)',
      },
      links: {
        repository: 'View repository',
        cfdSupportSite: 'CFD SUPPORT',
        researchGroup: 'Research group',
        drChronoSite: 'DrChrono',
        ententeeSite: 'ententee',
      },
    },
    contact: {
      title: 'Get In Touch',
      description: 'Have a question or want to work together? Feel free to reach out!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    resume: {
      download: 'Download Resume',
    },
  },
  de: {
    app: {
      brand: 'Vojtěch Kubáč',
      darkModeAriaLabel: 'Dunkelmodus umschalten',
    },
    meta: {
      title: 'Vojtěch Kubáč | Portfolio',
      description:
        'C++-Softwareentwickler mit Schwerpunkt auf wissenschaftlichem Rechnen und technischer Simulation ' +
        '(CFD, FEA, Aeroakustik).',
    },
    nav: {
      about: 'Über mich',
      background: 'Werdegang',
      experience: 'Erfahrung',
      education: 'Ausbildung',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Ich baue Software, die stimmen muss.',
      subtitle:
        'Numerischer Code für technische Simulationen, produktive Webanwendungen für das Gesundheitswesen, ' +
        'Simulationen von Roboter- und Drohnenschwärmen.',
    },
    about: {
      title: 'Über mich',
      description:
        'Seit 7 Jahren entwickle ich numerische Module von TCAE, einer kommerziellen Simulationsanwendung für Strukturanalyse, Strömungsmechanik, Aeroakustik und Optimierung, die auf Desktops und HPC-Clustern läuft. Die Arbeit reicht von der Solver-Anbindung und numerischem Code bis zur Datenbank, zu GUI-Plugins und zu Build- und Release-Werkzeugen.' +
        '\n\n' +
        'Darüber hinaus habe ich Simulationen von Roboter- und Drohnenschwärmen, Software zur Tourenoptimierung und produktive Webanwendungen für Kunden im Gesundheitswesen gebaut.' +
        '\n\n' +
        'KI-Agenten schreiben inzwischen einen guten Teil meines Codes, meist mehrere gleichzeitig auf getrennten Branches. Damit die Qualität stimmt, prüfe ich ihre Arbeit laufend und liefere nichts aus, was ich nicht getestet und gelesen habe.' +
        '\n\n' +
        'Als Mathematiker zieht es mich zu den unteren Schichten: Backend- und Systementwicklung, performancekritischer Code (C++, Rust und Ähnliches).',
    },
    experience: {
      title: 'Erfahrung',
      role: 'Position',
      company: 'Unternehmen',
      period: 'Zeitraum',
    },
    education: {
      title: 'Ausbildung',
      degree: 'Abschluss',
      school: 'Schule',
      year: 'Jahr',
      thesis: 'Abschlussarbeit',
      supervisor: 'Betreuer',
    },
    skills: {
      title: 'Fähigkeiten',
      languages: 'Sprachen',
      build: 'Build, CI & Paketierung',
      methods: 'Numerische Methoden',
      simulation: 'Simulation & Vernetzung',
      gui: 'GUI & Visualisierung',
      databases: 'Datenbanken',
      robotics: 'Robotik & Simulation',
      web: 'Web',
      aiAssisted: 'KI & ML',
    },
    projects: {
      title: 'Projekte',
      demo: 'Live-Demo',
      details: {
        open: 'Details',
        close: 'Schließen',
        period: 'Zeitraum',
        achievements: 'Erfolge',
        teamPrefix: 'Mit einem Team von ca. ',
        teamSuffix: ' Entwicklern',
        teamSolo: 'Einziger Entwickler.',
      },
      sources: {
        cfdSupport: 'CFD SUPPORT — TCAE (kommerzielle CAE-Software)',
        github: 'GitHub & persönlich',
        academic: 'Forschung',
        ententee: 'ententee (Kundenarbeit)',
      },
      links: {
        repository: 'Repository ansehen',
        cfdSupportSite: 'CFD SUPPORT',
        researchGroup: 'Forschungsgruppe',
        drChronoSite: 'DrChrono',
        ententeeSite: 'ententee',
      },
    },
    contact: {
      title: 'Kontakt aufnehmen',
      description:
        'Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Zögern Sie nicht, sich zu melden!',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht erfolgreich versendet!',
      error: 'Fehler beim Versenden. Bitte versuchen Sie es später erneut.',
    },
    resume: {
      download: 'Lebenslauf herunterladen',
    },
  },
  cs: {
    app: {
      brand: 'Vojtěch Kubáč',
      darkModeAriaLabel: 'Přepnout tmavý režim',
    },
    meta: {
      title: 'Vojtěch Kubáč | Portfolio',
      description:
        'C++ softwarový inženýr se zaměřením na vědecké výpočty a inženýrské simulace (CFD, FEA, aeroakustika).',
    },
    nav: {
      about: 'O mně',
      background: 'Kariéra',
      experience: 'Zkušenosti',
      education: 'Vzdělání',
      skills: 'Dovednosti',
      projects: 'Projekty',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Stavím software, který musí fungovat správně.',
      subtitle:
        'Numerický kód pro inženýrské simulace, produkční webové aplikace pro zdravotnictví, ' +
        'simulace rojů robotů a dronů.',
    },
    about: {
      title: 'O mně',
      description:
        'Už 7 let vyvíjím numerické moduly TCAE, komerční simulační aplikace pro pevnostní analýzu, proudění, aeroakustiku a optimalizaci, která běží na osobních počítačích i HPC clusterech. Práce pokrývá celou cestu od napojení solverů a numerického kódu po databázi, GUI pluginy a nástroje pro build a vydávání.' +
        '\n\n' +
        'Kromě toho jsem stavěl simulace rojů robotů a dronů, software pro optimalizaci tras a produkční webové aplikace pro klienty ve zdravotnictví.' +
        '\n\n' +
        'Velkou část mého kódu dnes píšou AI agenti, obvykle několik najednou v oddělených větvích. Aby kvalita nešla dolů, kontroluju jejich práci průběžně a nevydám nic, co jsem neotestoval a nepřečetl.' +
        '\n\n' +
        'Jako matematika mě to táhne k nižším vrstvám: backendu a systémovému vývoji, výkonově náročnému kódu (C++, Rust a podobně).',
    },
    experience: {
      title: 'Zkušenosti',
      role: 'Pozice',
      company: 'Společnost',
      period: 'Období',
    },
    education: {
      title: 'Vzdělání',
      degree: 'Stupeň',
      school: 'Škola',
      year: 'Rok',
      thesis: 'Diplomová práce',
      supervisor: 'Vedoucí práce',
    },
    skills: {
      title: 'Dovednosti',
      languages: 'Jazyky',
      build: 'Build, CI a balíčkování',
      methods: 'Numerické metody',
      simulation: 'Simulace a síťování',
      gui: 'GUI a vizualizace',
      databases: 'Databáze',
      robotics: 'Robotika a simulace',
      web: 'Web',
      aiAssisted: 'AI a ML',
    },
    projects: {
      title: 'Projekty',
      demo: 'Živá ukázka',
      details: {
        open: 'Detaily',
        close: 'Zavřít',
        period: 'Období',
        achievements: 'Úspěchy',
        teamPrefix: 'Na projektu pracoval tým o velikosti cca ',
        teamSuffix: ' vývojářů',
        teamSolo: 'Jediný vývojář.',
      },
      sources: {
        cfdSupport: 'CFD Support',
        github: 'GitHub a osobní',
        academic: 'Výzkum',
        ententee: 'ententee',
      },
      links: {
        repository: 'Zobrazit repozitář',
        cfdSupportSite: 'CFD SUPPORT',
        researchGroup: 'Výzkumná skupina',
        drChronoSite: 'DrChrono',
        ententeeSite: 'ententee',
      },
    },
    contact: {
      title: 'Kontaktujte mě',
      description: 'Máte otázku nebo chcete spolupracovat? Neváhejte se ozvat!',
      name: 'Jméno',
      email: 'E-mail',
      message: 'Zpráva',
      send: 'Poslat zprávu',
      sending: 'Odesílání...',
      success: 'Zpráva byla úspěšně odeslána!',
      error: 'Chyba při odesílání zprávy. Zkuste to prosím později.',
    },
    resume: {
      download: 'Stáhnout CV',
    },
  },
};

export const ENGLISH_LOCALE = 'en';
export const FALLBACK_TO_ENGLISH_LOCALES = new Set(['de', 'cs']);
const translatorCacheByTable = new WeakMap();

function resolveKeyPath(locale, key, translationTable) {
  const keys = key.split('.');
  let value = translationTable[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value;
}

export function getTranslation(lang, key, translationTable = translations) {
  const localizedValue = resolveKeyPath(lang, key, translationTable);
  if (localizedValue !== undefined) {
    return localizedValue;
  }

  if (FALLBACK_TO_ENGLISH_LOCALES.has(lang)) {
    const englishValue = resolveKeyPath(ENGLISH_LOCALE, key, translationTable);
    if (englishValue !== undefined) {
      return englishValue;
    }
  }

  return key;
}

export const t = (lang, translationTable = translations) => {
  let translatorCacheByLang = translatorCacheByTable.get(translationTable);
  if (!translatorCacheByLang) {
    translatorCacheByLang = new Map();
    translatorCacheByTable.set(translationTable, translatorCacheByLang);
  }

  let translator = translatorCacheByLang.get(lang);
  if (!translator) {
    translator = (key) => getTranslation(lang, key, translationTable);
    translatorCacheByLang.set(lang, translator);
  }

  return translator;
};
