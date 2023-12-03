document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
  });
  