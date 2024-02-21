// footer mobile navigation functionality

const footerNavContainers = document.querySelectorAll('.footer-nav');

const hideLists = (containers, current) => {
  containers.forEach((container) => {
    if (container !== current && container.classList.contains('is-active')) {
      container.classList.remove('is-active');
      const list = container.querySelector('.footer-nav__list');
      list.classList.remove('is-active');
      list.classList.add('is-closed');
      container.classList.add('is-closed');
    }
  });
};

const handleNavigationClick = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    footerNavContainers.forEach((container) => {
      container.addEventListener('click', (event) => {
        if (!event.target.closest('.footer-nav__list')) {
          const current = event.currentTarget;
          const list = current.querySelector('.footer-nav__list');
          hideLists(footerNavContainers, current);

          if (current.classList.contains('is-closed')) {
            current.classList.add('is-active');
            current.classList.remove('is-closed');
            list.classList.remove('is-closed');
            list.classList.add('is-active');
          } else {
            current.classList.remove('is-active');
            current.classList.add('is-closed');
            list.classList.remove('is-active');
            list.classList.add('is-closed');
          }
        }
      });
    });
  }
};

export {handleNavigationClick};
