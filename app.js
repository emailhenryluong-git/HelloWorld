function greet() {
  const name = document.getElementById('nameInput').value.trim();
  const message = document.getElementById('message');

  if (name) {
    message.textContent = `Hello ${name}!`;
  } else {
    message.textContent = 'Please enter your name.';
  }
}
