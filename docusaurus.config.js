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
            to: '/docs/category/cas-dusage',
            sidebarId: 'SidebarTAIA',
            label: 'Cas d\'usages',
            position: 'left',
          },  
          {
            sidebarId: 'SidebarTAIA',
            label: 'JTIA 2025',
            href: 'https://cftl.fr/actualites/jtia-2/',
            position: 'left',
          },
          {
            sidebarId: 'SidebarTAIA',
            label: 'Enquête IA 2025',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSddx2tJvI9_nEsq57fb2DQYv8DWiyZvTlvgslUXP-GIzWWEQQ/viewform',
            position: 'left',
          },
          {
            to: '/docs/contributors',
            sidebarId: 'SidebarTAIA',
            label: 'Contributeurs',
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
                label: 'Tutorial Docusaurus',
                to: '/docs/Documentation/Docusaurus/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'CFTL',
                href: 'https://cftl.fr/',
              },
              {
                label: 'Nous contacter',
                href: 'mailto:cftl.taia@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/'+organizationName+'/'+projectName,
              },
              {
                label: 'Licence CC-BY-SA-4.0',
                href: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
              },
              {
                label: 'Tutoriel JFTL 2025',
                to: '/docs/TutorielJFTL/Welcome',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CFTL - Groupe de Travail "Tester avec l’Intelligence Artificielle" (TAIA), Généré avec Docusaurus. Licence CC-BY-SA-4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
