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
      { name: 'C#', icon: devicon('csharp') },
      { name: 'Java', icon: devicon('java') },
      { name: 'TypeScript', icon: devicon('typescript') },
    ],
  },
  {
    key: 'build',
    items: [
      { name: 'CMake', icon: devicon('cmake') },
      { name: 'GCC / MinGW-w64' },
      { name: 'GitLab CI', icon: devicon('gitlab') },
      { name: 'GitHub Actions', icon: devicon('githubactions') },
      { name: 'Docker', icon: devicon('docker') },
    ],
  },
  {
    key: 'methods',
    items: [
      { name: 'FEM' },
      { name: 'FVM' },
      { name: 'Fluid–structure interaction' },
      { name: 'Aeroacoustics' },
      { name: 'Optimization' },
    ],
  },
  {
    key: 'simulation',
    items: [
      { name: 'OpenFOAM' },
      { name: 'CalculiX' },
      { name: 'NetGen' },
      { name: 'Gmsh' },
      { name: 'OpenCASCADE' },
    ],
  },
  {
    key: 'gui',
    items: [{ name: 'Qt', icon: devicon('qt') }, { name: 'VTK' }, { name: 'ParaView' }],
  },
  {
    key: 'databases',
    items: [
      { name: 'SQLite', icon: devicon('sqlite') },
      { name: 'PostgreSQL', icon: devicon('postgresql') },
    ],
  },
  {
    key: 'robotics',
    items: [
      { name: 'ROS 2', icon: simpleIcon('ros') },
      { name: 'PX4' },
      { name: 'Gazebo' },
      { name: 'Unity', icon: simpleIcon('unity') },
    ],
  },
  {
    key: 'web',
    items: [
      { name: 'Django', icon: devicon('django', 'plain') },
      { name: 'FastAPI', icon: devicon('fastapi') },
      { name: 'Spring Boot', icon: devicon('spring') },
      { name: 'React', icon: devicon('react') },
      { name: 'Svelte', icon: devicon('svelte') },
    ],
  },
  {
    key: 'aiAssisted',
    items: [
      { name: 'scikit-learn', icon: devicon('scikitlearn') },
      { name: 'Claude Code', icon: simpleIcon('anthropic') },
      { name: 'Cursor', icon: simpleIcon('cursor') },
    ],
  },
];
