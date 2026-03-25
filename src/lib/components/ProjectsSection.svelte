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
    return `linear-gradient(135deg, hsl(${hue}, 55%, 42%) 0%, hsl(${hue2}, 50%, 32%) 100%)`;
  }
</script>

<section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('projects.title')}
      </span>
    </h2>

    {#each grouped as { source, items } (source)}
      <div class="mb-14 last:mb-0">
        <h3
          class="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2"
        >
          {translate(`projects.sources.${source}`)}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each items as project, i (project.id)}
            <div
              class="animate-fade-in-up group rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col"
              style="animation-delay: {i * 80}ms"
            >
              <div class="relative overflow-hidden h-48 shrink-0">
                {#if project.image}
                  <img
                    src={project.image}
                    alt=""
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                {:else}
                  <div
                    class="w-full h-full flex items-center justify-center text-white text-3xl font-bold tracking-wide group-hover:scale-105 transition-transform duration-300"
                    style:background={headerGradient(project.id)}
                  >
                    {monogram(project.title)}
                  </div>
                {/if}
              </div>
              <div class="p-6 flex flex-col flex-1">
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                <p class="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                {#if project.technologies?.length}
                  <div class="flex flex-wrap gap-2 mb-6">
                    {#each project.technologies as tech}
                      <span
                        class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    {/each}
                  </div>
                {/if}
                <div class="flex flex-wrap gap-3 mt-auto">
                  {#if project.link}
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 min-w-[8rem] px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded font-medium hover:bg-slate-900 transition-colors text-center text-sm"
                    >
                      {translate(project.link.labelKey)}
                    </a>
                  {/if}
                  {#if project.demo}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 min-w-[8rem] px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center text-sm"
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
  </div>
</section>

<style>
</style>
