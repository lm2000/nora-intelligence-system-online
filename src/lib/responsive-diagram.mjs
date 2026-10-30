/** Keep desktop topology visible; mobile readers can expand it on demand.
 * @param {HTMLDetailsElement} details
 * @param {MediaQueryList} narrowViewport
 */
export function bindDiagramDisclosure(details, narrowViewport) {
  const sync = () => { details.open = !narrowViewport.matches; };
  sync();
  narrowViewport.addEventListener('change', sync);
  return () => narrowViewport.removeEventListener('change', sync);
}
