<script>
  import { education } from '$lib/data/education.js';
  export let translate;
</script>

<section id="education" class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-12 text-center text-4xl font-bold">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('education.title')}
      </span>
    </h2>
    <div class="space-y-8">
      {#each education as edu, i (i)}
        <div class="animate-fade-in-up" style="animation-delay: {i * 100}ms">
          <div class="border-l-4 border-purple-600 py-2 pl-6">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
            <p class="text-lg font-semibold text-purple-600 dark:text-purple-400">{edu.field}</p>
            <p class="text-base font-medium text-slate-700 dark:text-slate-300">
              {edu.school} · {edu.location}
            </p>
            <p class="mb-3 text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
            {#if edu.thesis}
              <p class="text-sm italic text-slate-600 dark:text-slate-400">
                {translate('education.thesis')}: {edu.thesis.title}
              </p>
              <p class="text-sm text-slate-500 dark:text-slate-500">
                {translate('education.supervisor')}: {edu.thesis.supervisor}
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
</style>
