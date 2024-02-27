import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {leadToForm} from './modules/request-call-button';
import {moreInfoToggle} from './modules/about-bottons';
import {handleNavigationClick} from './modules/footer-mobile-nav';
import {toggleModal} from './modules/modal';

moreInfoToggle();
handleNavigationClick();
toggleModal();
leadToForm();
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------
