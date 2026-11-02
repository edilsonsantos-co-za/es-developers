// @ts-check

const config = {
  title: 'ES Developers',
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

  themeConfig: {
    navbar: {
      title: 'ES Developers',
      items: [
        { to: '/', label: 'Overview', position: 'left' },
        { to: '/apps/es-portfolio', label: 'Portfolio', position: 'left' },
        { to: '/apps/es-blog', label: 'Blog', position: 'left' },
        { to: '/guides/development', label: 'Guides', position: 'left' },
        { to: '/roadmap', label: 'Roadmap', position: 'left' },
        { href: 'https://buymeacoffee.com/edilsonsantos', label: '☕ Buy me a coffee', position: 'right', className: 'navbar-coffee', 'aria-label': 'Buy me a coffee' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ES apps',
          items: [
            { label: 'ES Portfolio source (access may be required)', href: 'https://github.com/edilsonsantos-co-za/es-portfolio' },
            { label: 'ES Blog source (access may be required)', href: 'https://github.com/edilsonsantos-co-za/es-blog' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'Development guide', to: '/guides/development' },
            { label: 'Publishing and releases', to: '/guides/publishing-and-releases' },
          ],
        },
        {
          title: 'Support',
          items: [
            { label: '☕ Buy me a coffee', href: 'https://buymeacoffee.com/edilsonsantos' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ES Developers.`,
    },
    prism: {
      additionalLanguages: ['bash', 'docker'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
