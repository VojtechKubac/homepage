<script>
  export let translate;
</script>

<section class="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
  <div class="text-center">
    <div class="mb-8">
      <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
        <img
          src="https://via.placeholder.com/128?text=Profile"
          alt="Profile"
          class="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
    <h1 class="text-5xl sm:text-6xl font-bold mb-6">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {translate('hero.title')}
      </span>
    </h1>
    <p class="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
      {translate('hero.subtitle')}
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <a
        href="#contact"
        class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        {translate('contact.title')}
      </a>
      <a
        href="#projects"
        class="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
      >
        {translate('projects.title')}
      </a>
    </div>
  </div>
</section>

<style>
</style>
