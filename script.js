// Minimal JS. Defer loaded.

// Contact form: validate and open mailto with encoded body.
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

// Only use mailto fallback if no action is defined (i.e., no provider like Formspree)
if (form && !form.hasAttribute('action')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = (document.getElementById('first-name')?.value || '').trim();
    const lastName = (document.getElementById('last-name')?.value || '').trim();
    const jobTitle = (document.getElementById('job-title')?.value || '').trim();
    const organization = (document.getElementById('organization')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const phone = (document.getElementById('phone')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();
    const industry = (document.getElementById('industry')?.value || '').trim();

    // Simple validation
    if (!firstName || !lastName || !email) {
      statusEl.textContent = 'First name, last name, and email are required.';
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
    const lines = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      jobTitle ? `Job Title: ${jobTitle}` : '',
      organization ? `Organization: ${organization}` : '',
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      industry ? `Industry: ${industry}` : '',
      '',
      'Details:',
      message || '(none)'
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join('\n'));
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
