const moreInfoButton = document.querySelector('[data-action="open-more"]');
const lessInfoButton = document.querySelector('[data-action="close-more"]');
const additionalInfo = document.querySelector('[data-target="additional-info"]');

const showMoreInfo = () => {
  if (additionalInfo.classList.contains('is-closed')) {
    moreInfoButton.classList.remove('is-active');
    moreInfoButton.classList.add('is-closed');
    additionalInfo.classList.add('is-active');
    additionalInfo.classList.remove('is-closed');
    lessInfoButton.classList.add('is-active');
    lessInfoButton.classList.remove('is-closed');
  }
};

function closeMoreInfo() {
  if (additionalInfo.classList.contains('is-active')) {
    moreInfoButton.classList.add('is-active');
    moreInfoButton.classList.remove('is-closed');
    additionalInfo.classList.remove('is-active');
    additionalInfo.classList.add('is-closed');
    lessInfoButton.classList.remove('is-active');
    lessInfoButton.classList.add('is-closed');
  }
}

function moreInfoToggle() {
  moreInfoButton.addEventListener('click', showMoreInfo);
  lessInfoButton.addEventListener('click', closeMoreInfo);
}

moreInfoToggle();


export {moreInfoToggle};
