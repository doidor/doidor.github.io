import { escapeHtml, escapeAttribute, type DirectiveHandler } from '@doidor/markbook-core';

/**
 * ::about-item{label="Role:" text="Principal Engineering Manager at Microsoft, leading Fluent UI"}
 * A single about/currently item with a bold label prefix.
 */
export const aboutItem: DirectiveHandler = ({ attributes }) => {
  const label = escapeHtml(attributes.label ?? '');
  const text = escapeHtml(attributes.text ?? '');
  return `<div class="about-item">
<span class="label">${label}</span> ${text}
</div>`;
};