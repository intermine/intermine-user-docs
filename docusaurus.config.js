/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'InterMine User Documentation',
  tagline: 'Documentation for using an InterMine webapp',
  url: 'http://intermine.org',
  baseUrl: '/intermine-user-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'intermine',
  projectName: 'intermine-user-docs',
  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
  themeConfig: {
    navbar: {
      title: 'InterMine User Documentation',
      hideOnScroll: true,
      logo: {
        alt: 'InterMine Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'http://intermine.org',
          label: 'InterMine',
          position: 'right',
        },
        {
          href: 'https://github.com/intermine/intermine-user-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} University of Cambridge. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/intermine/intermine-user-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
