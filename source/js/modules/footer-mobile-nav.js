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
      containers[i].addEventListener('click', function () {
        hideLists(containers, this);

        if (this.classList.contains('is-closed')) {
          this.classList.add('is-active');
          this.classList.remove('is-closed');
        } else {
          this.classList.remove('is-active');
          this.classList.add('is-closed');
        }
      });
    }
  }
};


handleNavigationClick(footerNavContainers);

export {handleNavigationClick};
