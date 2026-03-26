<script>
  import { socialLinks } from '$lib/data/social.js';
  export let translate;

  let formData = {
    name: '',
    email: '',
    message: '',
  };

  let isSubmitting = false;
  let submitStatus = null;

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        submitStatus = 'success';
        formData = { name: '', email: '', message: '' };
        setTimeout(() => {
          submitStatus = null;
        }, 3000);
      } else {
        submitStatus = 'error';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact">
  <h2 class="mb-3 font-mono text-2xl font-bold text-emerald-800 dark:text-emerald-400">
    {translate('contact.title')}
  </h2>
  <p class="mb-10 text-sm text-stone-500 dark:text-stone-500">
    {translate('contact.description')}
  </p>

  <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
    <!-- Social Links -->
    <div class="reveal">
      <div class="space-y-3">
        {#each socialLinks as social (social.name)}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-3 text-sm transition-all hover:border-emerald-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-800"
          >
            <span class="font-medium text-stone-700 dark:text-stone-300">{social.name}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Contact Form -->
    <form on:submit={handleSubmit} class="reveal space-y-5 md:col-span-2">
      <div>
        <label
          for="name"
          class="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          {translate('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          required
          class="w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder-stone-600"
        />
      </div>

      <div>
        <label
          for="email"
          class="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          {translate('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          required
          class="w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder-stone-600"
        />
      </div>

      <div>
        <label
          for="message"
          class="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300"
        >
          {translate('contact.message')}
        </label>
        <textarea
          id="message"
          bind:value={formData.message}
          required
          rows="4"
          class="w-full resize-none rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder-stone-600"
        />
      </div>

      {#if submitStatus === 'success'}
        <div
          role="status"
          aria-live="polite"
          class="animate-fade-in rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
        >
          {translate('contact.success')}
        </div>
      {/if}

      {#if submitStatus === 'error'}
        <div
          role="alert"
          class="animate-fade-in rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-400"
        >
          {translate('contact.error')}
        </div>
      {/if}

      <button
        type="submit"
        disabled={isSubmitting}
        class="rounded bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-600 dark:hover:bg-emerald-700"
      >
        {isSubmitting ? translate('contact.sending') : translate('contact.send')}
      </button>
    </form>
  </div>

  <!-- Resume Download -->
  <div class="reveal mt-12">
    <a
      href="/resume.pdf"
      download
      class="inline-flex items-center gap-2 rounded border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {translate('resume.download')}
    </a>
  </div>
</section>
