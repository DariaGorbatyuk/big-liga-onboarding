import {resizeInit} from '../utils/resize';

export function initPreloader() {
  const preloader = document.querySelector('.preloader');
  const col2 = document.querySelector('.main-page__col-2');
  const col1 = document.querySelector('.main-page__col-1');
  const classPreloadHide = 'preloader--hide';
  const col1AnimationClass = 'main-page__col-1--animation';
  const col2AnimationClass = 'main-page__col-2--animation';


  function onDisablePreloader(evt) {
    if (evt.key !== 'Enter' && isDesktopState) {
      return;
    }
    preloader.classList.add(classPreloadHide);
    document.removeEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
    col1.classList.remove(col1AnimationClass);
    col2.classList.remove(col2AnimationClass);
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
