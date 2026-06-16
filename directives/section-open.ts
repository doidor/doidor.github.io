import { escapeAttribute, type DirectiveHandler } from '@doidor/markbook-core';

/**
 * ::section-open{icon="fas fa-briefcase" label="Currently" class="about-grid"}
 * Opens a labeled section with optional grid wrapper.
 * Must be paired with ::section-close.
 */
export const sectionOpen: DirectiveHandler = ({ attributes }) => {
  const icon = escapeAttribute(attributes.icon ?? '');
  const label = escapeAttribute(attributes.label ?? '');
  const id = label.toLowerCase();
  const className = attributes.class ? escapeAttribute(attributes.class) : '';
  const gridOpen = className ? `\n<div class="${className}">` : '';

  return `<section id="${id}">
<div class="section-label"><i class="${icon}"></i> ${label}</div>${gridOpen}`;
};