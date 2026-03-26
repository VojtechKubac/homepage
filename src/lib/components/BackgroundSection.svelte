<script>
  import { experiences } from '$lib/data/experience.js';
  import { education } from '$lib/data/education.js';
  export let translate;
</script>

<section id="background">
  <!-- Experience -->
  <div class="mb-20">
    <h2 class="text-2xl font-bold mb-10 font-mono text-emerald-800 dark:text-emerald-400">
      {translate('experience.title')}
    </h2>
    <div class="space-y-10 reveal-stagger">
      {#each experiences as exp, i (i)}
        <div class="reveal" style="--stagger-index: {i}">
          <div class="border-l-2 border-emerald-600 dark:border-emerald-700 pl-6">
            <h3 class="text-lg font-bold text-stone-900 dark:text-stone-50">{exp.role}</h3>
            <p class="text-sm font-mono text-emerald-700 dark:text-emerald-500 font-medium">{exp.company}</p>
            <p class="text-xs text-stone-500 dark:text-stone-500 mt-1 mb-3 font-mono">{exp.period}</p>
            <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">{exp.description}</p>
            <div class="flex flex-wrap gap-1.5">
              {#each exp.technologies as tech}
                <span class="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-xs font-mono">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Education -->
  <div>
    <h2 class="text-2xl font-bold mb-10 font-mono text-emerald-800 dark:text-emerald-400">
      {translate('education.title')}
    </h2>
    <div class="space-y-10 reveal-stagger">
      {#each education as edu, i (i)}
        <div class="reveal" style="--stagger-index: {i}">
          <div class="border-l-2 border-stone-300 dark:border-stone-700 pl-6">
            <h3 class="text-lg font-bold text-stone-900 dark:text-stone-50">{edu.degree}</h3>
            <p class="text-sm font-mono text-emerald-700 dark:text-emerald-500 font-medium">{edu.school}</p>
            <p class="text-xs text-stone-500 dark:text-stone-500 mt-1 mb-3 font-mono">{edu.year}</p>
            <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{edu.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
