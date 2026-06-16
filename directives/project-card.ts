import { escapeHtml, escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./project-card.html', import.meta.url));

/**
 * ::project-card{href="..." name="..." desc="..."}
 * Leaf directive — renders a full project card.
 * Description passed as attribute since we can't nest containers.
 */
export const projectCardLeaf: DirectiveHandler = ({ attributes }) => {
  return render({
    href: escapeAttribute(attributes.href ?? '#'),
    name: escapeHtml(attributes.name ?? 'Project'),
    desc: escapeHtml(attributes.desc ?? ''),
  });
};