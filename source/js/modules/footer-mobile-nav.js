const footerNavContainers = document.getElementsByClassName('footer-nav');

const hideLists = (containers, current) => {
  for (let i = 0; i < containers.length; i++) {
    if (containers[i] !== current && containers[i].classList.contains('is-active')) {
      containers[i].classList.remove('is-active');
      containers[i].classList.add('is-closed');
    }
  }
};

const handleNavigationClick = (containers) => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    for (let i = 0; i < containers.length; i++) {
      containers[i].addEventListener('click', (event) => {
        const current = event.currentTarget;
        hideLists(containers, current);

        if (current.classList.contains('is-closed')) {
          current.classList.add('is-active');
          current.classList.remove('is-closed');
        } else {
          current.classList.remove('is-active');
          current.classList.add('is-closed');
        }
      });
    }
  }
};

handleNavigationClick(footerNavContainers);

export {handleNavigationClick};
