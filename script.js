'use strict';
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
let statusTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(statusTimer);
  try {
    await navigator.clipboard.writeText('suwigor@gmail.com');
    copyStatus.textContent = 'Copied!';
  } catch {
    copyStatus.textContent = 'Select the address to copy.';
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.email-group > a'));
    selection.removeAllRanges();
    selection.addRange(range);
  }
  statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 4000);
});
