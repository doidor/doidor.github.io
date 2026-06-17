import { escapeAttribute, htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./section.html', import.meta.url));

/**
 * :::section{icon="fas fa-briefcase" label="Currently" class="about-grid"}
 * Container directive — wraps inner content (including nested directives)
 * in a labeled section with optional grid wrapper.
 */
export const section: DirectiveHandler = ({ attributes, innerHtml, innerMarkdown }) => {
  const label = attributes.label ?? '';
  const id = label.toLowerCase();
  const className = attributes.class ?? '';
  const gridOpen = className ? `<div class="${escapeAttribute(className)}">` : '';
  const gridClose = className ? '</div>' : '';

  return {
    html: render({
      id,
      icon: escapeAttribute(attributes.icon ?? ''),
      label,
      gridOpen,
      gridClose,
      innerHtml: innerHtml ?? '',
    }),
    markdown: `## ${label}\n\n${innerMarkdown ?? ''}`,
  };
};