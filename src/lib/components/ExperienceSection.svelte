<script>
  import { experiences } from '$lib/data/experience.js';
  export let translate;
</script>

<section id="experience" class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-12 text-center text-4xl font-bold">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('experience.title')}
      </span>
    </h2>
    <div class="space-y-8">
      {#each experiences as exp, i (i)}
        <div class="animate-fade-in-up" style={`animation-delay: ${i * 100}ms`}>
          <div class="border-l-4 border-blue-600 py-2 pl-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p class="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
            <p class="mb-3 text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
            <p class="mb-4 text-slate-700 dark:text-slate-300">{exp.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each exp.technologies as tech (tech)}
                <span
                  class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
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
