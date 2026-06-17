import { escapeHtml, escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./project-card.html', import.meta.url));

/**
 * ::project-card{href="..." name="..." desc="..." tags="npm,github"}
 * Leaf directive — renders a full project card with optional tags.
 */
export const projectCardLeaf: DirectiveHandler = ({ attributes }) => {
  const href = attributes.href ?? '#';
  const name = attributes.name ?? 'Project';
  const desc = attributes.desc ?? '';

  const tags = (attributes.tags ?? 'npm,github').split(',').map(t => t.trim()).filter(Boolean);
  const iconMap: Record<string, string> = {
    npm: 'fab fa-npm',
    github: 'fab fa-github',
  };
  const tagHtml = tags.map(t => {
    const icon = iconMap[t] ?? 'fas fa-tag';
    return `    <span class="project-tag"><i class="${icon}"></i> ${escapeHtml(t)}</span>`;
  }).join('\n');

  return {
    html: render({
      href: escapeAttribute(href),
      name: escapeHtml(name),
      desc: escapeHtml(desc),
      tags: tagHtml,
    }),
    markdown: `[${name}](${href}) — ${desc}`,
  };
};