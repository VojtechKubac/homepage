<script>
  import './styles.css';
  import { onMount } from 'svelte';
  import { language } from './lib/store';
  import { t } from './lib/i18n';
  import HeroSection from './lib/components/HeroSection.svelte';
  import AboutSection from './lib/components/AboutSection.svelte';
  import ExperienceSection from './lib/components/ExperienceSection.svelte';
  import EducationSection from './lib/components/EducationSection.svelte';
  import SkillsSection from './lib/components/SkillsSection.svelte';
  import ProjectsSection from './lib/components/ProjectsSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';

  let isDark = false;
  let translate = t('en');
  let currentLang = 'en';
  let activeTab = 'about'; // Start with about tab

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  onMount(() => {
    // Check for saved theme preference or use system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark = saved === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    updateTheme();

    // Restore language preference
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    language.set(savedLang);
    translate = t(savedLang);

    // Restore active tab
    const savedTab = localStorage.getItem('activeTab') || 'about';
    activeTab = savedTab;
  });

  language.subscribe(lang => {
    currentLang = lang;
    translate = t(lang);
  });

  function updateTheme() {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  function toggleDarkMode() {
    isDark = !isDark;
    updateTheme();
  }

  function setLanguage(lang) {
    language.set(lang);
    localStorage.setItem('language', lang);
  }

  function switchTab(tabId) {
    activeTab = tabId;
    localStorage.setItem('activeTab', tabId);
  }
</script>

<svelte:head>
  <title>Personal Portfolio</title>
</svelte:head>

<div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
  <!-- Navigation -->
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>

        <div class="flex items-center gap-4">
          <!-- Language Selector -->
          <div class="flex gap-2">
            <button
              on:click={() => setLanguage('en')}
              class="px-3 py-1 rounded-md text-sm font-medium transition-colors"
              class:bg-blue-100={currentLang === 'en'}
              class:dark:bg-blue-900={currentLang === 'en'}
            >
              EN
            </button>
            <button
              on:click={() => setLanguage('de')}
              class="px-3 py-1 rounded-md text-sm font-medium transition-colors"
              class:bg-blue-100={currentLang === 'de'}
              class:dark:bg-blue-900={currentLang === 'de'}
            >
              DE
            </button>
            <button
              on:click={() => setLanguage('cs')}
              class="px-3 py-1 rounded-md text-sm font-medium transition-colors"
              class:bg-blue-100={currentLang === 'cs'}
              class:dark:bg-blue-900={currentLang === 'cs'}
            >
              CS
            </button>
          </div>

          <!-- Dark Mode Toggle -->
          <button
            on:click={toggleDarkMode}
            class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {#if isDark}
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            {:else}
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm.707 5.657a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l.707.707zM9 17a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 border-b border-slate-200 dark:border-slate-800">
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <HeroSection {translate} />
    </main>
  </div>

  <!-- Tab Navigation -->
  <div class="sticky top-16 z-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex gap-2 overflow-x-auto">
        {#each tabs as tab (tab.id)}
          <button
            on:click={() => switchTab(tab.id)}
            class="px-4 py-3 font-medium text-sm whitespace-nowrap transition-all border-b-2"
            class:border-blue-600={activeTab === tab.id}
            class:border-transparent={activeTab !== tab.id}
            class:text-blue-600={activeTab === tab.id}
            class:dark:text-blue-400={activeTab === tab.id}
            class:text-slate-600={activeTab !== tab.id}
            class:dark:text-slate-400={activeTab !== tab.id}
            class:hover:text-slate-900={activeTab !== tab.id}
            class:dark:hover:text-slate-300={activeTab !== tab.id}
          >
            {tab.label}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Tab Content -->
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="animate-fade-in">
      {#if activeTab === 'about'}
        <AboutSection {translate} />
      {:else if activeTab === 'experience'}
        <ExperienceSection {translate} />
      {:else if activeTab === 'education'}
        <EducationSection {translate} />
      {:else if activeTab === 'skills'}
        <SkillsSection {translate} />
      {:else if activeTab === 'projects'}
        <ProjectsSection {translate} />
      {:else if activeTab === 'contact'}
        <ContactSection {translate} />
      {/if}
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p class="text-center text-slate-600 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
      </p>
    </div>
  </footer>
</div>
