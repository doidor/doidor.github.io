import { escapeHtml, escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./project-card.html', import.meta.url));

/**
 * ::project-card{href="..." name="..." desc="..."}
 * Leaf directive — renders a full project card.
 * Description passed as attribute since we can't nest containers.
 */
export const projectCardLeaf: DirectiveHandler = ({ attributes }) => {
  const href = attributes.href ?? '#';
  const name = attributes.name ?? 'Project';
  const desc = attributes.desc ?? '';
  return {
    html: render({
      href: escapeAttribute(href),
      name: escapeHtml(name),
      desc: escapeHtml(desc),
    }),
    markdown: `[${name}](${href}) — ${desc}`,
  };
};