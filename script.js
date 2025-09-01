// Minimal JS. Defer loaded.

// Contact form: validate and open mailto with encoded body.
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('name').value || '').trim();
    const email = (document.getElementById('email').value || '').trim();
    const message = (document.getElementById('message').value || '').trim();

    // Simple validation
    if (!name || !email || !message) {
      statusEl.textContent = 'Please complete all fields.';
      statusEl.style.color = '#b00020';
      return;
    }
    // Basic email check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      statusEl.textContent = 'Enter a valid email.';
      statusEl.style.color = '#b00020';
      return;
    }

    statusEl.textContent = 'Opening your email client…';
    statusEl.style.color = 'inherit';

    const subject = encodeURIComponent('Kaizen IQ Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:kaizeniq@outlook.com?subject=${subject}&body=${body}`;
  });
}

// Back-to-top visibility
const toTop = document.getElementById('to-top');
const showTop = () => {
  if (!toTop) return;
  if (window.scrollY > 400) toTop.classList.add('show');
  else toTop.classList.remove('show');
};
if (toTop) {
  window.addEventListener('scroll', showTop, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
