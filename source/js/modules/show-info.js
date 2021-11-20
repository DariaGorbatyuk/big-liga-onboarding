
export function showInfo() {
  const mainPage = document.querySelector('.main-page');
  const info = document.querySelector('.main-page__col-2');
  const classShow = 'main-page__col-2--show';
  const desktopMinWidth = 1024;
  let isDesktopState = document.documentElement.offsetWidth >= desktopMinWidth;

  function onShowInfo() {
    info.classList.add(classShow);
    mainPage.addEventListener('click', onHideInfo);
    mainPage.removeEventListener('click', onShowInfo);
  }

  function onHideInfo() {
    info.classList.remove(classShow);
    mainPage.addEventListener('click', onShowInfo);
  }

  function onWindowResize() {
    if (document.documentElement.offsetWidth >= desktopMinWidth && !isDesktopState) {
      mainPage.removeEventListener('click', onShowInfo);
      info.classList.remove(classShow);
      isDesktopState = true;
    } else if (document.documentElement.offsetWidth < desktopMinWidth && isDesktopState) {
      mainPage.addEventListener('click', onShowInfo);
      isDesktopState = false;
    }
  }

  if (!isDesktopState) {
    mainPage.addEventListener('click', onShowInfo);
  }
  window.addEventListener('resize', onWindowResize);
}
