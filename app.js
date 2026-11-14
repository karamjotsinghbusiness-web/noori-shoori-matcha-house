'use strict';
const dialog = document.querySelector('#complaint-dialog');
let previousFocus;
for (const trigger of document.querySelectorAll('.complaint-trigger')) {
  trigger.addEventListener('click', () => {
    previousFocus = trigger;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
}
document.querySelector('#close-complaint').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  previousFocus?.focus();
});
const jokes = [
  'I tried to make a joke about matcha.\nIt wasn’t everyone’s cup of tea.',
  'Your iced matcha has arrived.\nMy personality is still out for delivery.',
  'Diljit has millions of fans.\nI have this website and a dream.',
  'This café has one customer.\nSomehow, the customer-service department is already overwhelmed.',
  'I was going to charge for these jokes.\nThe legal department advised against it.',
  'The matcha is premium.\nThe comedian came free with the website.'
];
let jokeIndex = 0;
document.querySelector('#another-joke').addEventListener('click', () => {
  jokeIndex = (jokeIndex + 1) % jokes.length;
  document.querySelector('#joke').textContent = jokes[jokeIndex];
});
const receiptToggle = document.querySelector('#receipt-toggle');
receiptToggle.addEventListener('click', () => {
  const expanded = receiptToggle.getAttribute('aria-expanded') === 'true';
  receiptToggle.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('#secret-note').hidden = expanded;
  receiptToggle.textContent = expanded ? 'P.S. There’s a little more ↓' : 'Fold the note back up ↑';
});
const form = document.querySelector('#complaint-form');
const message = document.querySelector('#complaint-message');
const category = document.querySelector('#complaint-category');
const fallback = document.querySelector('#email-fallback');
function updateMailLink() {
  const subject = 'Matcha House complaint: ' + category.value;
  const body = 'From Noori Shoori\n\n' + message.value.trim();
  fallback.href = 'mailto:sikhfamily9@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
message.addEventListener('input', () => { message.setCustomValidity(''); updateMailLink(); });
category.addEventListener('change', updateMailLink);
form.addEventListener('submit', (event) => {
  if (document.querySelector('#website').value) { event.preventDefault(); return; }
  if (message.value.trim().length < 3) {
    event.preventDefault();
    message.setCustomValidity('Give management at least three characters to work with.');
    message.reportValidity();
    return;
  }
  message.value = message.value.trim();
  updateMailLink();
  document.querySelector('#form-status').textContent = 'Opening the email service. Finish sending there, or return here to use your email app.';
});
updateMailLink();
