<script>
  import { onMount, tick } from 'svelte';
  import { slide } from 'svelte/transition';
  import { getProjectsGroupedBySource } from '$lib/data/projects.js';

  export let translate;

  const grouped = getProjectsGroupedBySource();

  /** @type {string | null} */
  let expandedId = null;

  let columns = 1;

  /** @param {string} id */
  function detailsButtonId(id) {
    return `project-details-button-${id}`;
  }

  /** @param {string} id */
  function detailsPanelId(id) {
    return `project-details-panel-${id}`;
  }

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

  /** @param {string} id */
  function toggleExpanded(id) {
    expandedId = expandedId === id ? null : id;
  }

  /** @param {string} id */
  async function closeExpanded(id) {
    expandedId = null;
    await tick();
    document.getElementById(detailsButtonId(id))?.focus();
  }

  /** @param {string} title */
  function monogram(title) {
    const parts = title
      .replace(/[—–-].*$/, '')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
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
  <h2 class="mb-10 font-mono text-2xl font-bold text-emerald-800 dark:text-emerald-400">
    {translate('projects.title')}
  </h2>

  {#each grouped as { source, items } (source)}
    {@const insertAfterIndex = getInsertAfterIndex(items, expandedId, columns)}
    <div class="mb-14 last:mb-0">
      <h3
        class="mb-6 border-b border-stone-200 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-stone-500 dark:border-stone-800 dark:text-stone-500"
      >
        {translate(`projects.sources.${source}`)}
      </h3>
      <div class="reveal-stagger grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each items as project, i (project.id)}
          <div
            class="reveal group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-stone-200 bg-white transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-400/40 hover:border-emerald-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-800"
            style={`--stagger-index: ${i}`}
          >
            <div class="relative h-40 shrink-0 overflow-hidden">
              {#if project.image}
                <img
                  src={project.image}
                  alt={project.title}
                  class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              {:else}
                <div
                  class="flex h-full w-full items-center justify-center font-mono text-2xl font-bold tracking-widest text-white/80 transition-transform duration-300 group-hover:scale-105"
                  style:background={headerGradient(project.id)}
                >
                  {monogram(project.title)}
                </div>
              {/if}
            </div>
            <div class="flex flex-1 flex-col p-5">
              <h4 class="mb-1.5 text-base font-bold text-stone-900 dark:text-stone-50">
                {project.title}
              </h4>
              <p class="mb-4 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {project.description}
              </p>
              {#if project.technologies?.length}
                <div class="mb-4 flex flex-wrap gap-1.5">
                  {#each project.technologies as tech (tech)}
                    <span
                      class="rounded bg-stone-100 px-2 py-0.5 font-mono text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>
              {/if}
              <div class="mt-auto flex flex-wrap gap-2">
                {#if project.link}
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="min-w-[7rem] flex-1 rounded bg-stone-800 px-3 py-1.5 text-center text-xs font-medium text-white transition-colors hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600"
                  >
                    {translate(project.link.labelKey)}
                  </a>
                {/if}
                {#if project.demo}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="min-w-[7rem] flex-1 rounded border border-emerald-600 px-3 py-1.5 text-center text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950"
                  >
                    {translate('projects.demo')}
                  </a>
                {/if}
                <button
                  id={detailsButtonId(project.id)}
                  type="button"
                  class="min-w-[7rem] flex-1 rounded border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
                  aria-expanded={expandedId === project.id}
                  aria-controls={detailsPanelId(project.id)}
                  on:click={() => toggleExpanded(project.id)}
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
                id={detailsPanelId(active.id)}
                role="region"
                aria-labelledby={detailsButtonId(active.id)}
                class="reveal col-span-full rounded-lg border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/30 md:p-6"
                style={`--stagger-index: ${i + 0.5}`}
                transition:slide={{ duration: 180 }}
              >
                <div class="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h4 class="text-base font-bold text-stone-900 dark:text-stone-50 md:text-lg">
                      {active.title}
                    </h4>
                    {#if active.period}
                      <p class="mt-1 text-xs text-stone-600 dark:text-stone-400 md:text-sm">
                        <span class="font-mono font-semibold"
                          >{translate('projects.details.period')}</span
                        >
                        <span class="mx-2 text-stone-400 dark:text-stone-600">•</span>
                        <span>{active.period.start}–{active.period.end}</span>
                      </p>
                    {/if}
                  </div>
                  <button
                    type="button"
                    class="shrink-0 rounded border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-white/60 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-900/60"
                    on:click={() => closeExpanded(active.id)}
                  >
                    {translate('projects.details.close')}
                  </button>
                </div>

                {#if active.periodNote || active.team}
                  <p class="mb-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
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
                  <p class="mb-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    {active.longDescription}
                  </p>
                {/if}

                {#if active.achievements?.length}
                  <div class="mt-4">
                    <h5
                      class="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"
                    >
                      {translate('projects.details.achievements')}
                    </h5>
                    <ul class="list-disc space-y-1 pl-5 text-sm text-stone-700 dark:text-stone-300">
                      {#each active.achievements as a (a)}
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
