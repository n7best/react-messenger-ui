/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'n7best',
    image: '/test-site/img/logo.png',
    infoLink: 'https://github.com/n7best',
    pinned: true,
  },
];

const siteConfig = {
  title: 'React Messenger UI' /* title for your website */,
  organizationName: 'n7best',
  tagline: 'Better Bot Responose',
  url: 'https://n7best.github.io/react-messenger-ui' /* your website url */,
  baseUrl: '/react-messenger-ui/' /* base url for your project */,
  projectName: 'react-messenger-ui',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#0081ff',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' n7best',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/n7best/react-messenger-ui',
};

module.exports = siteConfig;
