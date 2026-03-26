<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { getProjectsGroupedBySource } from '$lib/data/projects.js';

  export let translate;

  const grouped = getProjectsGroupedBySource();

  /** @type {string | null} */
  let expandedId = null;

  let columns = 1;

  /** @param {number} width */
  function columnsForWidth(width) {
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  onMount(() => {
    columns = columnsForWidth(window.innerWidth);
    const onResize = () => {
      columns = columnsForWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  });

  /**
   * @param {any[]} items
   * @param {string | null} activeId
   * @param {number} cols
   */
  function getInsertAfterIndex(items, activeId, cols) {
    if (!activeId) return null;
    const activeIndex = items.findIndex((p) => p.id === activeId);
    if (activeIndex < 0) return null;
    const rowStart = Math.floor(activeIndex / cols) * cols;
    const rowEnd = Math.min(items.length - 1, rowStart + cols - 1);
    return rowEnd;
  }

  /** @param {Event} event */
  function isFromLink(event) {
    const t = /** @type {HTMLElement | null} */ (event.target);
    return Boolean(t?.closest?.('a'));
  }

  /** @param {string} id */
  function toggleExpanded(id) {
    expandedId = expandedId === id ? null : id;
  }

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
    {@const insertAfterIndex = getInsertAfterIndex(items, expandedId, columns)}
    <div class="mb-14 last:mb-0">
      <h3
        class="text-xs font-mono font-semibold text-stone-500 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2 uppercase tracking-wider"
      >
        {translate(`projects.sources.${source}`)}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
        {#each items as project, i (project.id)}
          <div
            class="reveal group rounded-lg overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all duration-300 flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-emerald-400/40"
            style="--stagger-index: {i}"
            role="button"
            tabindex="0"
            aria-expanded={expandedId === project.id}
            on:click={(e) => {
              if (!isFromLink(e)) toggleExpanded(project.id);
            }}
            on:keydown={(e) => {
              if (e.target !== e.currentTarget) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExpanded(project.id);
              }
            }}
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
                <button
                  type="button"
                  class="flex-1 min-w-[7rem] px-3 py-1.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded text-xs font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                  aria-expanded={expandedId === project.id}
                  on:click|stopPropagation={() => toggleExpanded(project.id)}
                >
                  {expandedId === project.id
                    ? translate('projects.details.close')
                    : translate('projects.details.open')}
                </button>
              </div>
            </div>
          </div>

          {#if insertAfterIndex !== null && i === insertAfterIndex}
            {@const active = items.find((p) => p.id === expandedId)}
            {#if active}
              <div
                class="col-span-full reveal rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/30 p-5 md:p-6"
                style="--stagger-index: {i + 0.5}"
                transition:slide={{ duration: 180 }}
              >
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 class="text-base md:text-lg font-bold text-stone-900 dark:text-stone-50">
                      {active.title}
                    </h4>
                    {#if active.period}
                      <p class="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
                        <span class="font-mono font-semibold">{translate('projects.details.period')}</span>
                        <span class="mx-2 text-stone-400 dark:text-stone-600">•</span>
                        <span>{active.period.start}–{active.period.end}</span>
                      </p>
                    {/if}
                  </div>
                  <button
                    type="button"
                    class="shrink-0 px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 text-xs font-medium text-stone-700 dark:text-stone-200 hover:bg-white/60 dark:hover:bg-stone-900/60 transition-colors"
                    on:click={() => {
                      expandedId = null;
                    }}
                  >
                    {translate('projects.details.close')}
                  </button>
                </div>

                {#if active.periodNote || active.team}
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                    {#if active.team}
                      {translate('projects.details.teamPrefix')}{active.team.size}
                      {#if active.team.note}
                        {' '}
                        {active.team.note}
                      {/if}
                      {translate('projects.details.teamSuffix')}
                    {/if}
                    {#if active.periodNote}
                      {#if active.team}
                        {' '}
                      {/if}
                      {active.periodNote}
                    {/if}
                  </p>
                {/if}

                {#if active.longDescription}
                  <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                    {active.longDescription}
                  </p>
                {/if}

                {#if active.achievements?.length}
                  <div class="mt-4">
                    <h5 class="text-xs font-mono font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                      {translate('projects.details.achievements')}
                    </h5>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-stone-700 dark:text-stone-300">
                      {#each active.achievements as a}
                        <li>{a}</li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    </div>
  {/each}
</section>
