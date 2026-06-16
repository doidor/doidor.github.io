import { escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./links.html', import.meta.url));

const LINKS = [
  { href: 'https://github.com/doidor', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tdrpopa/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://medium.com/@tdr.popa', icon: 'fab fa-medium', label: 'Medium' },
  { href: 'https://www.youtube.com/@doidor', icon: 'fab fa-youtube', label: 'YouTube' },
  { href: 'mailto:tdr.popa@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
  { href: 'https://github.com/doidor/resume/blob/master/resume.pdf', icon: 'fas fa-file-lines', label: 'Resume' },
];

/**
 * ::links
 * Renders the full links nav section.
 */
export const links: DirectiveHandler = () => {
  const items = LINKS.map(({ href, icon, label }) => {
    const ah = escapeAttribute(href);
    const ai = escapeAttribute(icon);
    const at = escapeAttribute(label);
    return `    <li><a href="${ah}" title="${at}"><i class="${ai}"></i> <span class="label">${label}</span></a></li>`;
  }).join('\n');

  const mdItems = LINKS.map(({ href, label }) => `- [${label}](${href})`).join('\n');

  return {
    html: render({ items }),
    markdown: `## Links\n\n${mdItems}`,
  };
};