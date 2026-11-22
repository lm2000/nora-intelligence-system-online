/** Copy exactly the displayed commands, with per-group accessible feedback.
 * @param {{button: {disabled: boolean}, status: {textContent: string | null}, code: {textContent: string | null}, clipboard?: Pick<Clipboard, 'writeText'>}} group
 */
export async function copyCommandGroup({ button, status, code, clipboard }) {
  if (button.disabled) return;
  button.disabled = true;
  status.textContent = 'Copying…';
  try {
    if (!clipboard) throw new Error('Clipboard unavailable');
    await clipboard.writeText(code.textContent ?? '');
    status.textContent = 'Commands copied.';
  } catch {
    status.textContent = 'Copy failed. Select the commands and copy them manually.';
  } finally {
    button.disabled = false;
  }
}
