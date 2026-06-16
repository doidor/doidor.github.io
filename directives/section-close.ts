import { htmlTemplate, type DirectiveHandler } from '@doidor/markbook-core';

const render = htmlTemplate(new URL('./section-close.html', import.meta.url));

/**
 * ::section-close{class="about-grid"}
 * Closes a section opened by ::section-open.
 * If class was provided, also closes the grid div.
 */
export const sectionClose: DirectiveHandler = ({ attributes }) => {
  const gridClose = attributes.class !== undefined ? '</div>\n' : '';
  return render({ gridClose });
};