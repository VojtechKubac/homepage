<script>
  import { experiences } from '$lib/data/experience.js';
  import { education } from '$lib/data/education.js';
  export let translate;
</script>

<section id="background">
  <!-- Experience -->
  <div class="mb-20">
    <h2 class="mb-10 font-mono text-2xl font-bold text-emerald-800 dark:text-emerald-400">
      {translate('experience.title')}
    </h2>
    <div class="reveal-stagger space-y-10">
      {#each experiences as exp, i (i)}
        <div class="reveal" style="--stagger-index: {i}">
          <div class="border-l-2 border-emerald-600 pl-6 dark:border-emerald-700">
            <h3 class="text-lg font-bold text-stone-900 dark:text-stone-50">{exp.role}</h3>
            <p class="font-mono text-sm font-medium text-emerald-700 dark:text-emerald-500">
              {exp.company}
            </p>
            <p class="mb-3 mt-1 font-mono text-xs text-stone-500 dark:text-stone-500">
              {exp.period}
            </p>
            <p class="mb-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {exp.description}
            </p>
            <div class="flex flex-wrap gap-1.5">
              {#each exp.technologies as tech}
                <span
                  class="rounded bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
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

  <!-- Education -->
  <div>
    <h2 class="mb-10 font-mono text-2xl font-bold text-emerald-800 dark:text-emerald-400">
      {translate('education.title')}
    </h2>
    <div class="reveal-stagger space-y-10">
      {#each education as edu, i (i)}
        <div class="reveal" style="--stagger-index: {i}">
          <div class="border-l-2 border-stone-300 pl-6 dark:border-stone-700">
            <h3 class="text-lg font-bold text-stone-900 dark:text-stone-50">{edu.degree}</h3>
            <p class="font-mono text-sm font-medium text-emerald-700 dark:text-emerald-500">
              {edu.field}
            </p>
            <p class="text-sm text-stone-600 dark:text-stone-400">{edu.school} · {edu.location}</p>
            <p class="mb-3 mt-1 font-mono text-xs text-stone-500 dark:text-stone-500">
              {edu.period}
            </p>
            {#if edu.thesis}
              <p class="text-sm italic text-stone-600 dark:text-stone-400">
                {translate('education.thesis')}: {edu.thesis.title}
              </p>
              <p class="text-sm text-stone-500 dark:text-stone-500">
                {translate('education.supervisor')}: {edu.thesis.supervisor}
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
