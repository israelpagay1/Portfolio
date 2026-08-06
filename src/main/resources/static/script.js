// Placeholder script file for portfolio interactivity.
// Add interactivity here if you want to enhance the page.

// Simple contact form submission handler (posts JSON to /api/contact)
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = {
      name: document.getElementById('name')?.value || '',
      email: document.getElementById('email')?.value || '',
      message: document.getElementById('message')?.value || ''
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(r => {
      if(r.ok) {
        alert('Message sent — thank you!');
        form.reset();
      } else {
        alert('Failed to send message.');
      }
    }).catch(() => alert('Network error'));
  });
})();
