/**
 * Grouped skills shown on the About tab.
 *
 * Icons are optional: items without a logo in devicon / simpleicons render as
 * text-only chips (same style, no image). To add a custom icon, drop an SVG
 * into `public/images/skills/` and set `icon: '/images/skills/<file>.svg'`.
 *
 * @typedef {{ name: string, icon?: string }} SkillItem
 * @typedef {{ key: string, items: SkillItem[] }} SkillCategory
 */

const devicon = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

// simpleicons serves monochrome SVGs; the hex suffix tints them so they read
// well on both stone-100 and stone-800 chip backgrounds. 047857 = emerald-700.
const simpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}/047857`;

/** Display order matches the array. */
/** @type {SkillCategory[]} */
export const skillCategories = [
  {
    key: 'languages',
    items: [
      { name: 'C++', icon: devicon('cplusplus') },
      { name: 'Python', icon: devicon('python') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Java', icon: devicon('java') },
    ],
  },
  {
    key: 'simulation',
    items: [
      { name: 'OpenFOAM' },
      { name: 'CalculiX' },
      { name: 'ParaView' },
      { name: 'VTK' },
      { name: 'Gmsh' },
      { name: 'NetGen' },
      { name: 'FEniCS' },
      { name: 'GROMACS' },
    ],
  },
  {
    key: 'serverSide',
    items: [
      { name: 'Django', icon: devicon('django', 'plain') },
      { name: 'FastAPI', icon: devicon('fastapi') },
      { name: 'Spring Boot', icon: devicon('spring') },
      { name: 'GraphQL', icon: devicon('graphql', 'plain') },
      { name: 'PostgreSQL', icon: devicon('postgresql') },
      { name: 'SQLite', icon: devicon('sqlite') },
    ],
  },
  {
    key: 'frontendUi',
    items: [
      { name: 'Svelte', icon: devicon('svelte') },
      { name: 'React', icon: devicon('react') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss') },
      { name: 'Qt', icon: devicon('qt') },
    ],
  },
  {
    key: 'robotics',
    items: [{ name: 'ROS', icon: simpleIcon('ros') }, { name: 'Gazebo' }],
  },
  {
    key: 'build',
    items: [
      { name: 'CMake', icon: devicon('cmake') },
      { name: 'CTest' },
      { name: 'GitLab CI', icon: devicon('gitlab') },
      { name: 'Docker', icon: devicon('docker') },
      { name: 'NSIS' },
    ],
  },
  {
    key: 'aiAssisted',
    items: [
      { name: 'Claude Code', icon: simpleIcon('anthropic') },
      { name: 'Cursor', icon: simpleIcon('cursor') },
      { name: 'RAG / LLM integration' },
    ],
  },
];
