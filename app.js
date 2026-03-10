function greet() {
  const name = document.getElementById('nameInput').value.trim();
  const message = document.getElementById('message');

  if (name) {
    message.textContent = `Hello ${name}!`;
  } else {
    message.textContent = 'Please enter your name.';
  }
}

function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click();
  fileInput.onchange = function () {
    const file = fileInput.files[0];
    if (!file) return;
    const display = document.getElementById('fileDisplay');
    const reader = new FileReader();

    if (file.type.startsWith('image/')) {
      reader.onload = (e) => {
        display.innerHTML = `<img src="${e.target.result}" alt="${file.name}">`;
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith('text/')) {
      reader.onload = (e) => {
        display.innerHTML = `<pre>${e.target.result.replace(/</g, '&lt;')}</pre>`;
      };
      reader.readAsText(file);
    } else if (file.type === 'application/pdf') {
      reader.onload = (e) => {
        display.innerHTML = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="500px">`;
      };
      reader.readAsDataURL(file);
    } else {
      display.innerHTML = '<p>File type not supported for preview.</p>';
    }
  };
}
