
const requestCallButton = document.querySelector('[data-action="request-call"]');
const form = document.querySelector('[data-target="form"]');

const leadToForm = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    requestCallButton.addEventListener('click', () => {
      form.scrollIntoView({block: 'center', behavior: 'smooth'});
    });
  }
};

export {leadToForm};
