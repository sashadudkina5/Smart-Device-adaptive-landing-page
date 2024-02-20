// modal functionality

const requestCallButton = document.querySelector('[data-action="request-call-modal"]');
const modalWindow = document.querySelector('[data-modal="feedback"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
const modalContainer = document.querySelector('.modal__container');

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const openModal = (modal) => {
  modal.classList.add('is-active');
  modal.classList.remove('is-closed');

  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.classList.add('is-closed');
    document.removeEventListener('keydown', onUploaderEscapeKeydown);
    document.removeEventListener('click', onOutsideModalClick);
  };

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  const onUploaderEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  const onOutsideModalClick = (evt) => {
    if (modal.classList.contains('is-active') &&
        evt.target !== modalContainer &&
        evt.target !== requestCallButton &&
        !modalContainer.contains(evt.target)) {
      closeModal();
    }
  };

  document.addEventListener('keydown', onUploaderEscapeKeydown);
  document.addEventListener('click', onOutsideModalClick);
};

const toggleModal = () => {
  requestCallButton.addEventListener('click', (event) => {
    event.stopPropagation();
    openModal(modalWindow);
  });
};

export {toggleModal};
