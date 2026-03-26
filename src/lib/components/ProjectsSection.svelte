<script>
  import { getProjectsGroupedBySource } from '$lib/data/projects.js';

  export let translate;

  const grouped = getProjectsGroupedBySource();

  /** @param {string} title */
  function monogram(title) {
    const parts = title.replace(/[—–-].*$/, '').trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return title.slice(0, 2).toUpperCase();
  }

  /** @param {string} id */
  function headerGradient(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    const hue = h % 360;
    const hue2 = (hue + 40) % 360;
    return `linear-gradient(135deg, hsl(${hue}, 40%, 35%) 0%, hsl(${hue2}, 35%, 28%) 100%)`;
  }
</script>

<section id="projects">
  <h2 class="text-2xl font-bold mb-10 font-mono text-emerald-800 dark:text-emerald-400">
    {translate('projects.title')}
  </h2>

  {#each grouped as { source, items } (source)}
    <div class="mb-14 last:mb-0">
      <h3
        class="text-xs font-mono font-semibold text-stone-500 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2 uppercase tracking-wider"
      >
        {translate(`projects.sources.${source}`)}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
        {#each items as project, i (project.id)}
          <div
            class="reveal group rounded-lg overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all duration-300 flex flex-col"
            style="--stagger-index: {i}"
          >
            <div class="relative overflow-hidden h-40 shrink-0">
              {#if project.image}
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              {:else}
                <div
                  class="w-full h-full flex items-center justify-center text-white/80 text-2xl font-mono font-bold tracking-widest group-hover:scale-105 transition-transform duration-300"
                  style:background={headerGradient(project.id)}
                >
                  {monogram(project.title)}
                </div>
              {/if}
            </div>
            <div class="p-5 flex flex-col flex-1">
              <h4 class="text-base font-bold text-stone-900 dark:text-stone-50 mb-1.5">{project.title}</h4>
              <p class="text-stone-600 dark:text-stone-400 mb-4 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              {#if project.technologies?.length}
                <div class="flex flex-wrap gap-1.5 mb-4">
                  {#each project.technologies as tech}
                    <span
                      class="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>
              {/if}
              <div class="flex flex-wrap gap-2 mt-auto">
                {#if project.link}
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 min-w-[7rem] px-3 py-1.5 bg-stone-800 dark:bg-stone-700 text-white rounded text-xs font-medium hover:bg-stone-900 dark:hover:bg-stone-600 transition-colors text-center"
                  >
                    {translate(project.link.labelKey)}
                  </a>
                {/if}
                {#if project.demo}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 min-w-[7rem] px-3 py-1.5 border border-emerald-600 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400 rounded text-xs font-medium hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors text-center"
                  >
                    {translate('projects.demo')}
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>
