const requestCallButton = document.querySelector('[data-action="request-call"]');
const form = document.querySelector('[data-target="form"]');

const leadToForm = () => {
  form.scrollIntoView({block: 'center', behavior: 'smooth'});
};

if (window.matchMedia('(min-width: 1024px)').matches) {
  requestCallButton.addEventListener('click', leadToForm);
}

export {leadToForm};
