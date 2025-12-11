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
      // Using Formspree - sign up at https://formspree.io and replace YOUR_FORM_ID
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

  function getSocialIcon(icon) {
    const icons = {
      github: '🔗',
      linkedin: '💼',
      twitter: '𝕏',
      email: '✉️'
    };
    return icons[icon] || '🔗';
  }
</script>

<section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-6 text-center">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('contact.title')}
      </span>
    </h2>
    <p class="text-lg text-slate-600 dark:text-slate-400 text-center mb-12">
      {translate('contact.description')}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      <!-- Social Links -->
      <div class="md:col-span-1">
        <h3 class="text-xl font-bold mb-6 text-slate-900 dark:text-white">Follow Me</h3>
        <div class="space-y-4">
          {#each socialLinks as social}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-lg transition-all hover:scale-105"
            >
              <span class="text-2xl">{getSocialIcon(social.icon)}</span>
              <span class="font-medium text-slate-900 dark:text-white">{social.name}</span>
            </a>
          {/each}
        </div>
      </div>

      <!-- Contact Form -->
      <form on:submit={handleSubmit} class="md:col-span-2 space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            {translate('contact.name')}
          </label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            {translate('contact.email')}
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            {translate('contact.message')}
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="5"
            class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        {#if submitStatus === 'success'}
          <div class="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg animate-fade-in">
            {translate('contact.success')}
          </div>
        {/if}

        {#if submitStatus === 'error'}
          <div class="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg animate-fade-in">
            {translate('contact.error')}
          </div>
        {/if}

        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? translate('contact.sending') : translate('contact.send')}
        </button>
      </form>
    </div>

    <!-- Resume Download -->
    <div class="mt-12 text-center">
      <a
        href="/resume.pdf"
        download
        class="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {translate('resume.download')}
      </a>
    </div>
  </div>
</section>

<style>
</style>
