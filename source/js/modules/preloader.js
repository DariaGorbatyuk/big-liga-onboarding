import {resizeInit} from '../utils/resize';

export function initPreloader() {
  const preloader = document.querySelector('.preloader');
  const col2 = document.querySelector('.main-page__col-2');
  const col1 = document.querySelector('.main-page__col-1');
  const lightnings = document.querySelectorAll('.lightning');
  const preloaderLogo = document.querySelector('.preloader__logo');
  const preloaderText = document.querySelector('.preloader__text');
  const classPreloadHide = 'preloader--hide';
  const classPreloadLogo = 'preloader__logo--animate';
  const classPreloadOpacity = 'preloader--opacity';
  const classPreloadTextAnimate = 'preloader__text--animate';
  const col1AnimationClass = 'main-page__col-1--animation';
  const col2AnimationClass = 'main-page__col-2--animation';
  const colorChangeTimer = 1500;
  const preloadTimer = 600;


  function onDisablePreloader(evt) {
    if (evt.key !== 'Enter' && variables.isDesktopState) {
      return;
    }
    animatePreloaderLogo()
        .then(animateContent);
  }

  function setDesktopListeners() {
    document.addEventListener('keyup', onDisablePreloader);
    document.removeEventListener('click', onDisablePreloader);
  }

  function setTabletListeners() {
    document.addEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
  }

  function animateDino() {
    lightnings.forEach((item) => {
      const random = Math.floor(Math.random() * variables.changedColors.length);
      variables.colors.forEach((color) => {
        item.classList.remove(color);
        item.classList.add(variables.changedColors[random]);
      });
    });
  }

  function animatePreloaderLogo() {
    preloaderLogo.classList.add(classPreloadLogo);
    preloader.classList.add(classPreloadOpacity);
    preloaderText.classList.add(classPreloadTextAnimate);
    return new Promise((resolve) => {
      setTimeout(() => {
        preloader.classList.add(classPreloadHide);
        resolve();
      }, preloadTimer);
    });
  }


  function animateContent() {
    document.removeEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
    col1.classList.remove(col1AnimationClass);
    col2.classList.remove(col2AnimationClass);
    setInterval(animateDino, colorChangeTimer);
  }

  const variables = resizeInit(setDesktopListeners, setTabletListeners);
}
