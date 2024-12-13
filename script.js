document.querySelector('.message-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Form validation or backend integration can be added here
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  
  // Reset form after submission
  this.reset();
});
