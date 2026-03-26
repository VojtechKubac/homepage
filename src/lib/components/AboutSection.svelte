<script>
  import { skills } from '$lib/data/skills.js';
  export let translate;

  const allCategories = [
    { key: 'frontend', items: skills.frontend },
    { key: 'backend', items: skills.backend },
    { key: 'tools', items: skills.tools },
  ];
</script>

<section id="about">
  <div class="max-w-3xl">
    <h2 class="mb-8 font-mono text-2xl font-bold text-emerald-800 dark:text-emerald-400">
      {translate('about.title')}
    </h2>
    <div class="reveal">
      <p class="mb-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
        {translate('about.description')}
      </p>
    </div>
  </div>

  <!-- Skills grid below about text -->
  <div class="mt-16">
    <h3
      class="mb-8 font-mono text-lg text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-500"
    >
      {translate('skills.title')}
    </h3>
    <div class="reveal-stagger grid grid-cols-1 gap-10 md:grid-cols-3">
      {#each allCategories as category, ci}
        <div class="reveal" style="--stagger-index: {ci}">
          <h4
            class="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-500"
          >
            {translate(`skills.${category.key}`)}
          </h4>
          <div class="flex flex-wrap gap-2">
            {#each category.items as skill}
              <span
                class="inline-flex items-center gap-2 rounded bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:bg-emerald-50 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-emerald-950"
              >
                <img src={skill.icon} alt="" class="h-4 w-4 object-contain" />
                {skill.name}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
