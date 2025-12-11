<script>
  import { skills } from '$lib/data/skills.js';
  export let translate;
</script>

<section id="skills" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('skills.title')}
      </span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Frontend Skills -->
      <div class="animate-fade-in-up">
        <h3 class="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          {translate('skills.frontend')}
        </h3>
        <div class="space-y-4">
          {#each skills.frontend as skill}
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                <span class="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style="width: {skill.level}%"
                />
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="animate-fade-in-up" style="animation-delay: 100ms">
        <h3 class="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">
          {translate('skills.backend')}
        </h3>
        <div class="space-y-4">
          {#each skills.backend as skill}
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                <span class="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style="width: {skill.level}%"
                />
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Tools -->
      <div class="animate-fade-in-up" style="animation-delay: 200ms">
        <h3 class="text-2xl font-bold mb-6 text-amber-600 dark:text-amber-400">
          {translate('skills.tools')}
        </h3>
        <div class="space-y-4">
          {#each skills.tools as skill}
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                <span class="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-500"
                  style="width: {skill.level}%"
                />
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
