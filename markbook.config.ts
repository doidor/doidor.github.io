import { defineConfig } from '@doidor/markbook-core';

export default defineConfig({
  title: 'tudorpopa.com',
  description: 'Tudor Popa - Engineering leader building software and teams. Currently leading Fluent UI at Microsoft.',
  siteUrl: 'https://tudorpopa.com',
  contentDir: 'pages',
  outDir: 'dist',
  publicDir: 'public',
  layoutsDir: 'layouts',
  layout: 'default',
  css: ['public/assets/css/main.css'],
  disableBaseCss: true,
  themeColor: '#4286f4',
  llmsButtons: false,
});