// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ducktape',
  tagline: 'It\'s ducking awesome',
  url: 'https://ducktapeengine.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon-1.ico',
  organizationName: 'DucktapeEngine', // Usually your GitHub org/user name.
  projectName: 'Ducktape', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DucktapeEngine/ducktapeengine.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/DucktapeEngine/ducktapeengine.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ducktape',
        logo: {
          alt: 'Ducktape\'s Logo',
          src: '/img/icon-transparent.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ducktapeengine/Ducktape',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://dsc.gg/ducktape',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ducktapeengine/Ducktape',
              },
            ],
          },
        ],
	copyright: 'Copyright &copy; ' + new Date().getFullYear() + ' Ducktape. Built with Docusaurus.'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
