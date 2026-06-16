import { defineConfig } from '@doidor/markbook-core';

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
  transformHtml: (html, page) => {
    // Fix canonical and og:url for homepage: /index.html → /
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