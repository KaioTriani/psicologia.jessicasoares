/* Contatos confirmados no site oficial. Sem rastreadores ou coleta de dados. */
const whatsapp = 'https://api.whatsapp.com/message/QJMXN7HNLWURN1?autoload=1&app_absent=0';
// Avaliações públicas: a origem é exibida em cada slide, sem atribuí-las ao Google.
const reviews = [
  { text: 'Psicóloga muito atenciosa. Atendimento pontual. Me senti muito acolhida. Estou tendo uma experiência maravilhosa em cada atendimento.', name: 'Joana Maria', date: '30 de abril de 2022', source: 'Doctoralia', url: 'https://www.doctoralia.com.br/jessica-soares-barbosa/psicologo/joao-pessoa' },
  { text: 'muito bom atendimento e de confiança', name: 'Gabriel Mochizuki', date: 'Setembro de 2026', source: 'Marcar Consulta', url: 'https://marcarconsulta.com/jessica-soares-psicologo-joao-pessoa' },
  { text: 'Super indicado uma profissional incrível muito acolhedora meu filho é acompanhado por ela amo seu trabalho Jéssica ❤️', name: 'Alex Santos', date: 'Setembro de 2026', source: 'Marcar Consulta', url: 'https://marcarconsulta.com/jessica-soares-psicologo-joao-pessoa' }
];
let reviewIndex = 0;
const controls = document.createElement('div');
controls.className = 'review-controls';
controls.innerHTML = '<button type="button" aria-label="Avaliação anterior">←</button><span class="review-counter">1 / 3</span><button type="button" aria-label="Próxima avaliação">→</button>';
const shell = document.querySelector('.review-shell');
shell.setAttribute('role', 'region');
shell.setAttribute('aria-roledescription', 'carrossel');
shell.setAttribute('aria-label', 'Depoimentos públicos');
shell.append(controls);
function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  const review = reviews[reviewIndex];
  document.querySelector('#review-text').textContent = `“${review.text}”`;
  document.querySelector('#review-author').textContent = review.name;
  document.querySelector('#review-date').textContent = `${review.date} · ${review.source}`;
  document.querySelector('.review-top > span').textContent = `★★★★★ · ${review.source}`;
  document.querySelector('.avatar').textContent = review.name[0];
  document.querySelector('#review-source').href = review.url;
  document.querySelector('.review-counter').textContent = `${reviewIndex + 1} / ${reviews.length}`;
}
controls.firstElementChild.addEventListener('click', () => showReview(reviewIndex - 1));
controls.lastElementChild.addEventListener('click', () => showReview(reviewIndex + 1));
showReview(0);
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = whatsapp;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); if (document.activeElement.closest('#menu')) toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const portrait = document.querySelector('#hero-photo');
function imageFallback() { portrait.classList.add('failed'); portrait.parentElement.setAttribute('aria-label', 'Ilustração botânica: um tempo para se ouvir'); }
portrait.addEventListener('error', imageFallback);
if (portrait.complete && !portrait.naturalWidth) imageFallback();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
