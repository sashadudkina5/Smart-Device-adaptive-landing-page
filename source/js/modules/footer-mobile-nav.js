const footerNav = document.querySelector('.footer-nav');

const toggleNavigation = (list, title, items) => {
  if (list.classList.contains('is-closed')) {
    list.classList.add('is-active');
    list.classList.remove('is-closed');
    title.classList.add('is-active');
    title.classList.remove('is-closed');

    for (const item of items) {
      item.classList.add('is-active');
      item.classList.remove('is-closed');
    }
  } else {
    list.classList.remove('is-active');
    list.classList.add('is-closed');
    title.classList.remove('is-active');
    title.classList.add('is-closed');

    for (const item of items) {
      item.classList.remove('is-active');
      item.classList.add('is-closed');
    }
  }
};

const handleNavigationClick = (event) => {
  const target = event.target;
  const title = target.closest('.footer-nav__title');

  if (title && footerNav.contains(title)) {
    const list = title.nextElementSibling;
    const items = list.querySelectorAll('.footer-nav__item');

    toggleNavigation(list, title, items);
  }
};

if (window.matchMedia('(max-width: 767px)').matches) {
  footerNav.addEventListener('click', handleNavigationClick);
}


export {handleNavigationClick};
