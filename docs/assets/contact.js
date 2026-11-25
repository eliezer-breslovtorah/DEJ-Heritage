const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');
const submitButton = form.querySelector('button');
const endpoint = form.dataset.endpoint;

if (!endpoint) {
  statusMessage.textContent = 'Preview only. Message delivery has not been connected.';
}

submitButton.disabled = false;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!endpoint) {
    statusMessage.textContent = 'Preview only. Your message was not sent.';
    return;
  }

  submitButton.disabled = true;
  statusMessage.textContent = 'Sending…';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Message delivery failed');
    }

    form.reset();
    statusMessage.textContent = 'Thank you!';
  } catch {
    statusMessage.textContent = 'Your message could not be sent. Please try again.';
  } finally {
    submitButton.disabled = false;
  }
});
