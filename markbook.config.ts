import { defineConfig } from '@doidor/markbook-core';
import { projectCardLeaf } from './directives/project-card.js';
import { links } from './directives/links.js';
import { aboutItem } from './directives/about-item.js';
import { section } from './directives/section.js';
import { aboutSection } from './directives/about-section.js';

export default defineConfig({
  title: 'Tudor Popa',
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
    section: { type: 'container', handler: section },
    'about-section': { type: 'leaf', handler: aboutSection },
    links: { type: 'leaf', handler: links },
  },
});