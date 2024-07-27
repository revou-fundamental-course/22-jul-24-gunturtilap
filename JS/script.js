const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const destinationSelect = document.querySelector('#destination');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const destination = destinationSelect.value;

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      destination: destination
    })
  })
  .then(response => {
    // Handle response dari server
  })
  .catch(error => {
    // Handle error
  });
});
