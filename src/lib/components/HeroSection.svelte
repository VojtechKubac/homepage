<script>
  export let translate;
</script>

<section class="animate-fade-in-up">
  <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-stone-900 dark:text-stone-50 leading-tight">
    {translate('hero.title')}
  </h1>
  <p class="text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-10 font-light">
    {translate('hero.subtitle')}
  </p>
  <div class="flex gap-4 flex-wrap">
    <button
      on:click={() => document.querySelector('[data-tab="contact"]')?.click()}
      class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded font-medium text-sm transition-colors"
    >
      {translate('contact.title')}
    </button>
    <button
      on:click={() => document.querySelector('[data-tab="projects"]')?.click()}
      class="px-6 py-2.5 border border-emerald-700 dark:border-emerald-500 text-emerald-700 dark:text-emerald-400 rounded font-medium text-sm hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors"
    >
      {translate('projects.title')}
    </button>
  </div>
</section>
