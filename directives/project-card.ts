import { escapeHtml, escapeAttribute, type DirectiveHandler } from '@doidor/markbook-core';

/**
 * ::project-card{href="..." name="..." desc="..."}
 * Leaf directive — renders a full project card.
 * Description passed as attribute since we can't nest containers.
 */
export const projectCardLeaf: DirectiveHandler = ({ attributes }) => {
  const href = escapeAttribute(attributes.href ?? '#');
  const name = escapeHtml(attributes.name ?? 'Project');
  const desc = escapeHtml(attributes.desc ?? '');
  return `<a class="project-card" href="${href}" target="_blank" rel="noopener">
<div class="project-header">
<span class="project-name">${name}</span>
<i class="fas fa-external-link-alt project-external"></i>
</div>
<p class="project-desc">${desc}</p>
</a>`;
};