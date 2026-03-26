<script>
  import { skills } from '$lib/data/skills.js';
  export let translate;

  const allCategories = [
    { key: 'frontend', items: skills.frontend },
    { key: 'backend', items: skills.backend },
    { key: 'tools', items: skills.tools }
  ];
</script>

<section id="about">
  <div class="max-w-3xl">
    <h2 class="text-2xl font-bold mb-8 font-mono text-emerald-800 dark:text-emerald-400">
      {translate('about.title')}
    </h2>
    <div class="reveal">
      <p class="text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
        {translate('about.description')}
      </p>
    </div>
  </div>

  <!-- Skills grid below about text -->
  <div class="mt-16">
    <h3 class="text-lg font-semibold mb-8 font-mono text-stone-500 dark:text-stone-500 uppercase tracking-wider text-sm">
      {translate('skills.title')}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 reveal-stagger">
      {#each allCategories as category, ci}
        <div class="reveal" style="--stagger-index: {ci}">
          <h4 class="text-sm font-mono font-semibold mb-4 text-emerald-700 dark:text-emerald-500 uppercase tracking-wider">
            {translate(`skills.${category.key}`)}
          </h4>
          <div class="flex flex-wrap gap-2">
            {#each category.items as skill}
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors">
                <img
                  src={skill.icon}
                  alt=""
                  class="w-4 h-4 object-contain"
                />
                {skill.name}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
