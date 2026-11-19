import { defineHastPlugin } from 'satteri';

const elements = (node, tag) => (node.children || []).filter(child => child.type === 'element' && (!tag || child.tagName === tag));

/** Add mobile field labels to the existing semantic tables, during Markdown rendering. */
export const researchTables = defineHastPlugin({
  name: 'research-tables',
  element: {
    filter: ['table'],
    visit(table, context) {
      const path = context.fileURL?.pathname || '';
      if (!/\/src\/content\/(ai-harness-landscape\.md|case-study\/[^/]+\.md)$/.test(path)) return;
      const head = elements(table, 'thead')[0];
      const bodies = elements(table, 'tbody');
      const headRows = head ? elements(head, 'tr') : [];
      if (headRows.length !== 1 || bodies.length !== 1) return;
      const headers = elements(headRows[0], 'th');
      const rows = elements(bodies[0], 'tr');
      const cells = rows.map(row => elements(row));
      if (!headers.length || !rows.length || headers.some(h => !context.textContent(h).trim()) ||
        cells.some(row => row.length !== headers.length) ||
        [...headers, ...cells.flat()].some(cell => Number(cell.properties.colSpan || 1) !== 1 || Number(cell.properties.rowSpan || 1) !== 1)) return;

      const count = (context.data.researchTableCount || 0) + 1;
      context.data.researchTableCount = count;
      const basename = path.split('/').pop().replace(/\.md$/, '');
      const labels = headers.map(header => context.textContent(header).trim());
      const ids = headers.map((header, index) => header.properties.id || `research-${basename}-${count}-column-${index + 1}`);
      const classes = table.properties.className || [];
      context.setProperty(table, 'className', [...(Array.isArray(classes) ? classes : String(classes).split(/\s+/)), 'research-table']);
      context.setProperty(table, 'role', 'table');
      context.setProperty(head, 'role', 'rowgroup');
      context.setProperty(headRows[0], 'role', 'row');
      context.setProperty(bodies[0], 'role', 'rowgroup');
      headers.forEach((header, index) => {
        context.setProperty(header, 'id', ids[index]);
        context.setProperty(header, 'scope', 'col');
        context.setProperty(header, 'role', 'columnheader');
      });
      rows.forEach((row, rowIndex) => {
        context.setProperty(row, 'role', 'row');
        cells[rowIndex].forEach((cell, index) => {
          context.setProperty(cell, 'headers', ids[index]);
          context.setProperty(cell, 'role', 'cell');
          context.prependChild(cell, {
            type: 'element', tagName: 'span',
            properties: { className: ['research-cell-label'], ariaHidden: 'true' },
            children: [{ type: 'text', value: labels[index] }],
          });
        });
      });
      context.wrapNode(table, {
        type: 'element', tagName: 'div',
        properties: { className: ['research-table-wrap'], tabIndex: 0, role: 'region', ariaLabel: `${labels[0]} table` },
        children: [],
      });
    },
  },
});
