import {refreshVariables, colors} from './utils';
function resizeInit(desktopSet, tabletSet) {
  const desktopMinWidth = 1024;

  let changedColors = [...colors];
  let isDesktopState = document.documentElement.offsetWidth >= desktopMinWidth;

  function startDesktop() {
    desktopSet();
    isDesktopState = true;
    changedColors = colors.filter((color) => {
      return color !== 'lightning--white';
    });
    refreshVariables(changedColors, isDesktopState);
  }

  function startTablet() {
    tabletSet();
    isDesktopState = false;
    changedColors = colors.filter((color) => {
      return color !== 'lightning--blue';
    });
    refreshVariables(changedColors, isDesktopState);
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
}

export {resizeInit};
