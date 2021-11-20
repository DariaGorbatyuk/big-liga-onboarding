function resizeInit(desktopSet, tabletSet) {
  const desktopMinWidth = 1024;
  const colors = ['lightning--purple', 'lightning--pink', 'lightning--blue', 'lightning--white'];
  let changedColors = [...colors];
  let isDesktopState = document.documentElement.offsetWidth >= desktopMinWidth;

  function startDesktop() {
    desktopSet();
    isDesktopState = true;
    changedColors = colors.filter((color) => {
      return color !== 'lightning--white';
    });
  }

  function startTablet() {
    tabletSet();
    isDesktopState = false;
    changedColors = colors.filter((color) => {
      return color !== 'lightning--blue';
    });
  }

  function onWindowResize() {
    if (document.documentElement.offsetWidth >= desktopMinWidth && !isDesktopState) {
      startDesktop();
    } else if (document.documentElement.offsetWidth < desktopMinWidth && isDesktopState) {
      startTablet();
    }
  }

  window.addEventListener('resize', onWindowResize);
  if (isDesktopState) {
    startDesktop();
  } else {
    startTablet();
  }
  return {
    isDesktopState,
    changedColors,
    colors,
  };
}

export {resizeInit};
