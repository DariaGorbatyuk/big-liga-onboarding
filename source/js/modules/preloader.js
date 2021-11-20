import {resizeInit} from '../utils/resize';

export function initPreloader() {
  const preloader = document.querySelector('.preloader');
  const classPreloadHide = 'preloader--hide';


  function onDisablePreloader(evt) {
    if (evt.key !== 'Enter' && isDesktopState) {
      return;
    }
    preloader.classList.add(classPreloadHide);
    document.removeEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
  }

  function setDesktopListeners() {
    document.addEventListener('keyup', onDisablePreloader);
    document.removeEventListener('click', onDisablePreloader);
  }

  function setTabletListeners() {
    document.addEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
  }

  let isDesktopState = resizeInit(setDesktopListeners, setTabletListeners);
}
