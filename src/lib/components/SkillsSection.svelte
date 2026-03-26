<script>
  import { skills } from '$lib/data/skills.js';
  export let translate;
</script>

<section id="skills" class="px-4 py-8 sm:px-6 lg:px-8">
  <h2 class="mb-12 text-center text-4xl font-bold">
    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {translate('skills.title')}
    </span>
  </h2>
  <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
    <!-- Frontend Skills -->
    <div class="animate-fade-in-up">
      <h3 class="mb-8 text-2xl font-bold text-blue-600 dark:text-blue-400">
        {translate('skills.frontend')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.frontend as skill}
          <div
            class="group flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 transition-all hover:scale-110 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-blue-900/30"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              class="mb-3 h-12 w-12 object-contain filter transition-transform group-hover:scale-125 dark:invert"
            />
            <span class="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Backend Skills -->
    <div class="animate-fade-in-up" style="animation-delay: 100ms">
      <h3 class="mb-8 text-2xl font-bold text-purple-600 dark:text-purple-400">
        {translate('skills.backend')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.backend as skill}
          <div
            class="group flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 transition-all hover:scale-110 hover:bg-purple-50 dark:bg-slate-900 dark:hover:bg-purple-900/30"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              class="mb-3 h-12 w-12 object-contain filter transition-transform group-hover:scale-125 dark:invert"
            />
            <span class="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Tools -->
    <div class="animate-fade-in-up" style="animation-delay: 200ms">
      <h3 class="mb-8 text-2xl font-bold text-amber-600 dark:text-amber-400">
        {translate('skills.tools')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.tools as skill}
          <div
            class="group flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4 transition-all hover:scale-110 hover:bg-amber-50 dark:bg-slate-900 dark:hover:bg-amber-900/30"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              class="mb-3 h-12 w-12 object-contain filter transition-transform group-hover:scale-125 dark:invert"
            />
            <span class="text-center text-sm font-medium text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
</style>
