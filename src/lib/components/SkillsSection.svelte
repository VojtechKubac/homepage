<script>
  import { skills } from '$lib/data/skills.js';
  export let translate;
</script>

<section id="skills" class="py-8 px-4 sm:px-6 lg:px-8">
  <h2 class="text-4xl font-bold mb-12 text-center">
    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {translate('skills.title')}
    </span>
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <!-- Frontend Skills -->
    <div class="animate-fade-in-up">
      <h3 class="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">
        {translate('skills.frontend')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.frontend as skill}
          <div class="group flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-110">
            <img
              src={skill.icon}
              alt={skill.name}
              class="w-12 h-12 mb-3 object-contain filter dark:invert transition-transform group-hover:scale-125"
            />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Backend Skills -->
    <div class="animate-fade-in-up" style="animation-delay: 100ms">
      <h3 class="text-2xl font-bold mb-8 text-purple-600 dark:text-purple-400">
        {translate('skills.backend')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.backend as skill}
          <div class="group flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all hover:scale-110">
            <img
              src={skill.icon}
              alt={skill.name}
              class="w-12 h-12 mb-3 object-contain filter dark:invert transition-transform group-hover:scale-125"
            />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Tools -->
    <div class="animate-fade-in-up" style="animation-delay: 200ms">
      <h3 class="text-2xl font-bold mb-8 text-amber-600 dark:text-amber-400">
        {translate('skills.tools')}
      </h3>
      <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each skills.tools as skill}
          <div class="group flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all hover:scale-110">
            <img
              src={skill.icon}
              alt={skill.name}
              class="w-12 h-12 mb-3 object-contain filter dark:invert transition-transform group-hover:scale-125"
            />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
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
