import { escapeAttribute, type DirectiveHandler } from '@doidor/markbook-core';

/**
 * ::section-close{class="about-grid"}
 * Closes a section opened by ::section-open.
 * If class was provided to section-open, also closes the grid div.
 */
export const sectionClose: DirectiveHandler = ({ attributes }) => {
  const hasClass = attributes.class !== undefined;
  const gridClose = hasClass ? '</div>\n' : '';
  return `${gridClose}</section>`;
};