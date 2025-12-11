<script>
  import { projects } from '$lib/data/projects.js';
  export let translate;
</script>

<section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold mb-12 text-center">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('projects.title')}
      </span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, i (i)}
        <div
          class="animate-fade-in-up group rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style="animation-delay: {i * 100}ms"
        >
          <div class="relative overflow-hidden h-48">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p class="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              {#each project.technologies as tech}
                <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium">
                  {tech}
                </span>
              {/each}
            </div>
            <div class="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded font-medium hover:bg-slate-900 transition-colors text-center text-sm"
              >
                {translate('projects.viewRepo')}
              </a>
              {#if project.demo}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center text-sm"
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
</section>

<style>
</style>
