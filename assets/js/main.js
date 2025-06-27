// Filter team members
const filterInput = document.getElementById('team-filter');
const members = document.querySelectorAll('.team-member');

if (filterInput) {
  filterInput.addEventListener('input', () => {
    const keyword = filterInput.value.toLowerCase();

    members.forEach(member => {
      const name = member.querySelector('h3').textContent.toLowerCase();
      const role = member.querySelector('p').textContent.toLowerCase();
      const match = name.includes(keyword) || role.includes(keyword);

      member.style.display = match ? 'block' : 'none';
    });
  });
}

// Contact form validation
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    let isValid = true;

    // Clear any previous errors
    form.querySelectorAll('.error').forEach(el => el.remove());

    const showError = (input, msg) => {
      const error = document.createElement('div');
      error.className = 'error';
      error.textContent = msg;
      input.parentNode.insertBefore(error, input.nextSibling);
      isValid = false;
    };

    if (name === '') showError(form.name, 'Name is required');
    if (!/^\S+@\S+\.\S+$/.test(email)) showError(form.email, 'Valid email is required');
    if (message.length < 10) showError(form.message, 'Message must be at least 10 characters');

    if (isValid) {
      alert('Message sent successfully! 🎉');
      form.reset();
    }
  });
}
