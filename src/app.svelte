<script>
  import './styles.css';
  import { onMount } from 'svelte';
  import { language } from './lib/store';
  import { t } from './lib/i18n';
  import HeroSection from './lib/components/HeroSection.svelte';
  import AboutSection from './lib/components/AboutSection.svelte';
  import BackgroundSection from './lib/components/BackgroundSection.svelte';
  import ProjectsSection from './lib/components/ProjectsSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';

  let isDark = false;
  let translate = t('en');
  let currentLang = 'en';
  let activeTab = 'about';

  const tabs = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'background', labelKey: 'nav.background' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark = saved === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    updateTheme();

    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    language.set(savedLang);
    translate = t(savedLang);

    const savedTab = localStorage.getItem('activeTab');
    if (savedTab && tabs.some((tab) => tab.id === savedTab)) {
      activeTab = savedTab;
    }

    // Intersection Observer for scroll-triggered reveals
    let observer;
    let mutationObserver;

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      );
    }

    function observeReveals() {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (observer) {
          observer.observe(el);
        } else {
          el.classList.add('visible');
        }
      });
    }
    observeReveals();

    // Re-observe on tab switch
    const tabContent = document.getElementById('tab-content');
    if (tabContent) {
      mutationObserver = new MutationObserver(() => {
        setTimeout(observeReveals, 50);
      });
      mutationObserver.observe(tabContent, { childList: true, subtree: true });
    }

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  });

  language.subscribe((lang) => {
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

<div
  class="min-h-screen bg-stone-50 font-sans text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100"
>
  <!-- Navigation -->
  <nav
    class="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80"
  >
    <div class="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div
          class="font-mono text-xl font-bold tracking-tight text-emerald-800 dark:text-emerald-400"
        >
          Portfolio
        </div>

        <div class="flex items-center gap-3">
          <!-- Language Selector -->
          <div class="flex gap-1">
            {#each ['en', 'de', 'cs'] as lang (lang)}
              <button
                on:click={() => setLanguage(lang)}
                class="rounded px-2.5 py-1 font-mono text-xs font-medium uppercase transition-colors"
                class:bg-emerald-100={currentLang === lang}
                class:dark:bg-emerald-900={currentLang === lang}
                class:text-emerald-800={currentLang === lang}
                class:dark:text-emerald-300={currentLang === lang}
                class:text-stone-500={currentLang !== lang}
                class:dark:text-stone-500={currentLang !== lang}
                class:hover:text-stone-700={currentLang !== lang}
                class:dark:hover:text-stone-300={currentLang !== lang}
              >
                {lang}
              </button>
            {/each}
          </div>

          <!-- Dark Mode Toggle -->
          <button
            on:click={toggleDarkMode}
            class="rounded-lg bg-stone-200 p-2 text-stone-600 transition-colors hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
            aria-label="Toggle dark mode"
          >
            {#if isDark}
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            {:else}
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm.707 5.657a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l.707.707zM9 17a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="border-b border-stone-200 dark:border-stone-800">
    <div class="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <HeroSection {translate} />
    </div>
  </div>

  <!-- Tab Navigation -->
  <div
    class="sticky top-[65px] z-40 border-b border-stone-200 bg-stone-50/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80"
  >
    <div class="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6 lg:px-8">
      <div class="flex min-w-max gap-1" role="tablist">
        {#each tabs as tab (tab.id)}
          <button
            id="tab-{tab.id}"
            data-tab={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="tab-panel-{tab.id}"
            on:click={() => switchTab(tab.id)}
            class="shrink-0 whitespace-nowrap border-b-2 px-5 py-3 text-sm font-medium tracking-wide transition-all"
            class:border-emerald-600={activeTab === tab.id}
            class:dark:border-emerald-400={activeTab === tab.id}
            class:border-transparent={activeTab !== tab.id}
            class:text-emerald-800={activeTab === tab.id}
            class:dark:text-emerald-400={activeTab === tab.id}
            class:text-stone-500={activeTab !== tab.id}
            class:dark:text-stone-500={activeTab !== tab.id}
            class:hover:text-stone-700={activeTab !== tab.id}
            class:dark:hover:text-stone-300={activeTab !== tab.id}
          >
            {translate(tab.labelKey)}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Tab Content -->
  <main id="tab-content" class="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
    {#if activeTab === 'about'}
      <div id="tab-panel-about" role="tabpanel" aria-labelledby="tab-about">
        <AboutSection {translate} />
      </div>
    {:else if activeTab === 'background'}
      <div id="tab-panel-background" role="tabpanel" aria-labelledby="tab-background">
        <BackgroundSection {translate} />
      </div>
    {:else if activeTab === 'projects'}
      <div id="tab-panel-projects" role="tabpanel" aria-labelledby="tab-projects">
        <ProjectsSection {translate} />
      </div>
    {:else if activeTab === 'contact'}
      <div id="tab-panel-contact" role="tabpanel" aria-labelledby="tab-contact">
        <ContactSection {translate} />
      </div>
    {/if}
  </main>

  <!-- Footer -->
  <footer class="border-t border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
    <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <p class="text-center font-mono text-sm text-stone-500 dark:text-stone-500">
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
</div>
