import { escapeHtml, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./about-item.html', import.meta.url));

/**
 * ::about-item{label="Role:" text="Principal Engineering Manager at Microsoft, leading Fluent UI"}
 * A single about/currently item with a bold label prefix.
 */
export const aboutItem: DirectiveHandler = ({ attributes }) => {
  return render({
    label: escapeHtml(attributes.label ?? ''),
    text: escapeHtml(attributes.text ?? ''),
  });
};