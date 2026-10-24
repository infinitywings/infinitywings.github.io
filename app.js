const filters = [...document.querySelectorAll('.filter')];
const publications = [...document.querySelectorAll('.publication')];
const groups = [...document.querySelectorAll('.publication-group')];
const search = document.querySelector('#publication-search');
let activePeriod = 'all';
function filterPublications() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const publication of publications) {
    const visible = (activePeriod === 'all' || publication.dataset.period === activePeriod) && publication.textContent.toLocaleLowerCase().includes(query);
    publication.hidden = !visible;
    if (visible) count++;
  }
  for (const group of groups) group.hidden = ![...group.querySelectorAll('.publication')].some(item => !item.hidden);
  for (const filter of filters) {
    const selected = filter.dataset.period === activePeriod;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  }
  document.querySelector('#publication-empty').hidden = count > 0;
  document.querySelector('#publication-count').textContent = `Showing ${count} publication${count === 1 ? '' : 's'}.`;
}
for (const filter of filters) filter.addEventListener('click', () => {
  activePeriod = filter.dataset.period;
  filterPublications();
});
search.addEventListener('input', filterPublications);
function revealPublication(hash) {
  if (!hash.startsWith('#pub-')) return;
  const publication = publications.find(item => `#${item.id}` === hash);
  if (!publication) return;
  activePeriod = 'all';
  search.value = '';
  filterPublications();
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#pub-"]');
  if (link) revealPublication(link.getAttribute('href'));
});
window.addEventListener('hashchange', () => revealPublication(location.hash));
revealPublication(location.hash);
const dialog = document.querySelector('#certificate-dialog');
let certificateTrigger;
for (const link of document.querySelectorAll('[data-certificate]')) link.addEventListener('click', event => {
  if (typeof dialog.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  certificateTrigger = link;
  document.querySelector('#certificate-title').textContent = link.dataset.title;
  const image = document.querySelector('#certificate-image');
  image.src = link.dataset.certificate;
  image.alt = link.querySelector('img').alt;
  document.querySelector('#certificate-pdf').href = link.href;
  dialog.showModal();
  document.body.classList.add('modal-open');
});
document.querySelector('#close-certificate').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  certificateTrigger?.focus({ preventScroll: true });
});
