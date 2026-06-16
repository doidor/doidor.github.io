import { defineConfig } from '@doidor/markbook-core';
import { projectCardLeaf } from './directives/project-card.js';
import { links } from './directives/links.js';
import { aboutItem } from './directives/about-item.js';
import { sectionOpen } from './directives/section-open.js';
import { sectionClose } from './directives/section-close.js';

export default defineConfig({
  description: 'Engineering leader building software and teams. Currently leading Fluent UI at Microsoft.',
  siteUrl: 'https://tudorpopa.com',
  contentDir: 'pages',
  outDir: 'dist',
  publicDir: 'public',
  layoutsDir: 'layouts',
  layout: 'default',
  css: ['./public/assets/css/main.css'],
  disableBaseCss: true,
  themeColor: '#4286f4',
  llmsButtons: false,
  search: false,
  directives: {
    'project-card': { type: 'leaf', handler: projectCardLeaf },
    'about-item': { type: 'leaf', handler: aboutItem },
    'section-open': { type: 'leaf', handler: sectionOpen },
    'section-close': { type: 'leaf', handler: sectionClose },
    links: { type: 'leaf', handler: links },
  },
  transformHtml: (html, page) => {
    return html
      .replace(
        '<link rel="canonical" href="https://tudorpopa.com/index.html">',
        '<link rel="canonical" href="https://tudorpopa.com/">',
      )
      .replace(
        '<meta property="og:url" content="https://tudorpopa.com/index.html">',
        '<meta property="og:url" content="https://tudorpopa.com/">',
      );
  },
});