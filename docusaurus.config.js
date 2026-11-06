// @ts-check

// Footer Connect icons. Brand marks: Simple Icons (CC0); contact: Material icons (Apache-2.0).
const CONNECT_ICONS = {
  contact: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  coffee: 'M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z',
};
const connectIcon = (label, href, icon) => ({
  html: `<a class="footer__link-item es-connect" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label} (opens in a new tab)" title="${label}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${CONNECT_ICONS[icon]}"/></svg></a>`,
});

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
          // Icons, not words (as in every ES app's footer): the name is in aria-label and the hover title
          items: [
            connectIcon('Contact', 'https://edilsonsantos.co.za/contact', 'contact'),
            connectIcon('GitHub', 'https://github.com/edilsonsantos-co-za', 'github'),
            connectIcon('Buy me a coffee', 'https://buymeacoffee.com/edilsonsantos', 'coffee'),
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
