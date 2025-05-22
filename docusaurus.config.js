// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const  organizationName = "CFTL-TAIA"; // Usually your GitHub org/user name.
const  projectName = "cftl-taia.github.io"; // Usually your repo name.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAIA - Tester avec l\'IA',
  tagline: 'Groupe de travail du CFTL sur l\'IA et le test',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://'+organizationName+'+.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  deploymentBranch : 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr-FR',
    locales: ['fr-FR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/'+organizationName+'/'+projectName+'/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/'+organizationName+'/'+projectName+'/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TAIA - Utilisation de l\'IA dans le Test',
        logo: {
          alt: 'IA dans le test Test',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },          
          {
            to: '/docs/category/Activités',
            sidebarId: 'tutorialSidebar',
            label: 'Activités de test',
            position: 'left',
          },
          {
            to: '/docs/category/Tutoriel',
            sidebarId: 'tutorialSidebar',
            label: 'Tutoriel JFTL 2025',
            position: 'left',
          },
          {
            sidebarId: 'tutorialSidebar',
            label: 'Enquête IA 2024',
            href: 'https://cftl.fr/actualites/jtia-2/',
            position: 'left',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/${organizationName}',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Docusaurus/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/'+organizationName+'/'+projectName,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CFTL - Groupe de Travail du test avec l'IA (TAIA), Généré avec Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
