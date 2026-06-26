/* Player 1 Arcade — Shared JS */

/* ── Mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  revealEls.forEach(el => ro.observe(el));
}

/* ── Contact form (home + contact page) ── */
const formMain    = document.getElementById('form-main');
const formSuccess = document.getElementById('form-success');
const formBtn     = document.getElementById('form-submit');

formBtn?.addEventListener('click', () => {
  const name  = document.querySelector('[name="name"]')?.value.trim();
  const email = document.querySelector('[name="email"]')?.value.trim();
  const msg   = document.querySelector('[name="message"]')?.value.trim();
  if (!name || !email || !msg) {
    formBtn.style.background = 'rgba(255,31,113,0.3)';
    formBtn.textContent = 'Please fill in all required fields';
    setTimeout(() => {
      formBtn.style.background = '';
      formBtn.innerHTML = sendBtnHTML;
    }, 2600);
    return;
  }
  if (formMain) formMain.style.display = 'none';
  if (formSuccess) formSuccess.style.display = 'block';
});

const sendBtnHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>Send Message`;
