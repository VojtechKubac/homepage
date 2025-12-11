<script>
  import { experiences } from '$lib/data/experience.js';
  export let translate;
</script>

<section id="experience" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('experience.title')}
      </span>
    </h2>
    <div class="space-y-8">
      {#each experiences as exp, i (i)}
        <div class="animate-fade-in-up" style="animation-delay: {i * 100}ms">
          <div class="border-l-4 border-blue-600 pl-6 py-2">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.period}</p>
            <p class="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each exp.technologies as tech}
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
</style>
