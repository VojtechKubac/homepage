<script>
  import { socialLinks } from '$lib/data/social.js';
  export let translate;

  let formData = {
    name: '',
    email: '',
    message: ''
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
  <h2 class="text-2xl font-bold mb-3 font-mono text-emerald-800 dark:text-emerald-400">
    {translate('contact.title')}
  </h2>
  <p class="text-sm text-stone-500 dark:text-stone-500 mb-10">
    {translate('contact.description')}
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
    <!-- Social Links -->
    <div class="reveal">
      <div class="space-y-3">
        {#each socialLinks as social}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all text-sm"
          >
            <span class="font-medium text-stone-700 dark:text-stone-300">{social.name}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Contact Form -->
    <form on:submit={handleSubmit} class="md:col-span-2 space-y-5 reveal">
      <div>
        <label for="name" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
          {translate('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          required
          class="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-colors text-sm"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
          {translate('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          required
          class="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-colors text-sm"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
          {translate('contact.message')}
        </label>
        <textarea
          id="message"
          bind:value={formData.message}
          required
          rows="4"
          class="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-colors resize-none text-sm"
        />
      </div>

      {#if submitStatus === 'success'}
        <div role="status" aria-live="polite" class="p-3 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm animate-fade-in">
          {translate('contact.success')}
        </div>
      {/if}

      {#if submitStatus === 'error'}
        <div role="alert" class="p-3 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 rounded-lg text-sm animate-fade-in">
          {translate('contact.error')}
        </div>
      {/if}

      <button
        type="submit"
        disabled={isSubmitting}
        class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded font-medium text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? translate('contact.sending') : translate('contact.send')}
      </button>
    </form>
  </div>

  <!-- Resume Download -->
  <div class="mt-12 reveal">
    <a
      href="/resume.pdf"
      download
      class="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded font-medium text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {translate('resume.download')}
    </a>
  </div>
</section>
