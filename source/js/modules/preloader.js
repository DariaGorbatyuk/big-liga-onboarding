export function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) {
    return;
  }
  window.addEventListener('resize', onDocumentResize);


  const classPreloadHide = 'preloader--hide';
  const desktopMinWidth = 1024;
  let isDesktopState = document.documentElement.offsetWidth >= desktopMinWidth;

  function onDisablePreloader(evt) {
    if (evt.key !== 'Enter' && isDesktopState) {
      return;
    }
    preloader.classList.add(classPreloadHide);
    document.removeEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
  }


  function onDocumentResize() {
    if (document.documentElement.offsetWidth >= desktopMinWidth && !isDesktopState) {
      setDesktopListeners();
    } else if (document.documentElement.offsetWidth < desktopMinWidth && isDesktopState) {
      setTabletListeners();
    }
  }

  function setDesktopListeners() {
    document.addEventListener('keyup', onDisablePreloader);
    document.removeEventListener('click', onDisablePreloader);
    isDesktopState = true;
  }

  function setTabletListeners() {
    document.addEventListener('click', onDisablePreloader);
    document.removeEventListener('keyup', onDisablePreloader);
    isDesktopState = false;
  }

  if (isDesktopState) {
    setDesktopListeners();
  } else {
    setTabletListeners();
  }

}
