const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();

  // IMPORTANT: Replace this with the business email address.
  const businessEmail = 'YOUR-EMAIL@example.com';
  const data = new FormData(event.currentTarget);

  const subject = `Quote Request: ${data.get('service')} - ${data.get('name')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `Event date: ${data.get('date') || 'Not provided'}`,
    `Guest count: ${data.get('guests') || 'Not provided'}`,
    `Service: ${data.get('service')}`,
    '',
    'Event details:',
    data.get('details')
  ].join('\n');

  window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
