<script>
  export let translate;
</script>

<section class="animate-fade-in-up">
  <h1 class="mb-6 text-4xl font-bold leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
    {translate('hero.title')}
  </h1>
  <p
    class="mb-10 max-w-2xl text-lg font-light leading-relaxed text-stone-600 dark:text-stone-400 sm:text-xl"
  >
    {translate('hero.subtitle')}
  </p>
  <div class="flex flex-wrap gap-4">
    <button
      on:click={() => document.querySelector('[data-tab="contact"]')?.click()}
      class="rounded bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
    >
      {translate('contact.title')}
    </button>
    <button
      on:click={() => document.querySelector('[data-tab="projects"]')?.click()}
      class="rounded border border-emerald-700 px-6 py-2.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950"
    >
      {translate('projects.title')}
    </button>
  </div>
</section>
