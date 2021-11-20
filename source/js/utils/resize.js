function resizeInit(desktopSet, tabletSet) {
  const desktopMinWidth = 1024;
  let isDesktopState = document.documentElement.offsetWidth >= desktopMinWidth;

  function onWindowResize() {
    if (document.documentElement.offsetWidth >= desktopMinWidth && !isDesktopState) {
      desktopSet();
      isDesktopState = true;
    } else if (document.documentElement.offsetWidth < desktopMinWidth && isDesktopState) {
      tabletSet();
      isDesktopState = false;
    }
  }

  window.addEventListener('resize', onWindowResize);
  if (isDesktopState) {
    desktopSet();
  } else {
    tabletSet();
  }
  return isDesktopState;
}

export {resizeInit}
