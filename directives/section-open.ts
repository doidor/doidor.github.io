import { escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./section-open.html', import.meta.url));

/**
 * ::section-open{icon="fas fa-briefcase" label="Currently" class="about-grid"}
 * Opens a labeled section with optional grid wrapper.
 * Must be paired with ::section-close.
 */
export const sectionOpen: DirectiveHandler = ({ attributes }) => {
  const label = escapeAttribute(attributes.label ?? '');
  const id = label.toLowerCase();
  const className = attributes.class ? escapeAttribute(attributes.class) : '';
  const gridOpen = className ? `\n<div class="${className}">` : '';

  return render({
    id,
    icon: escapeAttribute(attributes.icon ?? ''),
    label,
    gridOpen,
  });
};