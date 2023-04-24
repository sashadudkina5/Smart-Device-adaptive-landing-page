const requestCallButton = document.querySelector('[data-action="request-call-modal"]');
const modalWindow = document.querySelector('[data-modal="feedback"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');

const openModal = (modal) => {
  modal.classList.add('is-active');
  modal.classList.remove('is-closed');

  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.classList.add('is-closed');
  };

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });
};

const toggleModal = () => {
  requestCallButton.addEventListener('click', () => {
    openModal(modalWindow);
  });
};

export {toggleModal};
