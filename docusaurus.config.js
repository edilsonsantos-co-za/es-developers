// @ts-check

const config = {
  title: 'ES Documentation',
  tagline: 'Public documentation for the ES apps.',
  favicon: 'img/favicon.svg',
  url: 'https://developers.edilsonsantos.co.za',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Manrope:wght@500;600;700;800&display=swap',
  ],

  // The shared ES app launcher (<es-apps>); copy of es-marketplace/store/assets/es-apps.js
  scripts: [{ src: '/es-apps.js', defer: true }],

  themeConfig: {
    navbar: {
      items: [
        // Brand like every ES app: ES mark, name, small mono subtitle
        { type: 'html', position: 'left', className: 'navbar-es-brand', value: '<a class="es-brand" href="/" aria-label="ES Documentation home"><img class="es-brand-logo" src="/img/es-mark.svg" alt="" width="36" height="36"><span class="es-brand-text"><b>ES Documentation</b><small>For developers</small></span></a>' },
        { to: '/', label: 'Overview', position: 'left' },
        { to: '/apps/es-portfolio', label: 'Portfolio', position: 'left' },
        { to: '/apps/es-blog', label: 'Blog', position: 'left' },
        { to: '/apps/es-store', label: 'Store', position: 'left' },
        { to: '/guides/development', label: 'Guides', position: 'left' },
        { to: '/roadmap', label: 'Roadmap', position: 'left' },
        { href: 'https://github.com/edilsonsantos-co-za', position: 'right', className: 'navbar-github', 'aria-label': 'GitHub' },
        // Same order as every ES app: Buy me a coffee, then the launcher
        { href: 'https://buymeacoffee.com/edilsonsantos', label: 'Buy me a coffee', position: 'right', className: 'navbar-coffee', 'aria-label': 'Buy me a coffee' },
        { type: 'html', position: 'right', className: 'navbar-es-apps', value: '<es-apps current="developers"></es-apps>' },
      ],
    },
    // Same three columns as every ES app's footer: this app, the ES apps, connect
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Overview', to: '/' },
            { label: 'Development guide', to: '/guides/development' },
            { label: 'Publishing and releases', to: '/guides/publishing-and-releases' },
            { label: 'Roadmap', to: '/roadmap' },
          ],
        },
        {
          title: 'ES apps',
          items: [
            { label: 'Portfolio', href: 'https://edilsonsantos.co.za' },
            { label: 'Blog', href: 'https://blog.edilsonsantos.co.za' },
            { label: 'Store', href: 'https://store.edilsonsantos.co.za' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact', href: 'https://edilsonsantos.co.za/contact' },
            { label: 'GitHub', href: 'https://github.com/edilsonsantos-co-za' },
            { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/edilsonsantos' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Edilson Santos · Full-time professional software engineer, building cool projects in my spare time.`,
    },
    prism: {
      additionalLanguages: ['bash', 'docker'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
