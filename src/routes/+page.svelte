<script>
  import { language } from '$lib/store';
  import { t } from '$lib/i18n';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';
  import EducationSection from '$lib/components/EducationSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';

  let translate;
  language.subscribe(lang => {
    translate = t(lang);
  });
</script>

<svelte:head>
  <title>Personal Portfolio</title>
</svelte:head>

<div class="space-y-20">
  <HeroSection {translate} />
  <AboutSection {translate} />
  <ExperienceSection {translate} />
  <EducationSection {translate} />
  <SkillsSection {translate} />
  <ProjectsSection {translate} />
  <ContactSection {translate} />
</div>
