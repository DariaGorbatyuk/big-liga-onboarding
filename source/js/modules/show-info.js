import {resizeInit} from '../utils/resize';

export function showInfo() {
  const mainPage = document.querySelector('.main-page');
  const info = document.querySelector('.main-page__col-2');
  const classShow = 'main-page__col-2--show';

  function onShowInfo() {
    info.classList.add(classShow);
    mainPage.addEventListener('click', onHideInfo);
    mainPage.removeEventListener('click', onShowInfo);
  }

  function onHideInfo() {
    info.classList.remove(classShow);
    mainPage.addEventListener('click', onShowInfo);
  }

  function desktopSet() {
    mainPage.removeEventListener('click', onShowInfo);
    info.classList.remove(classShow);
  }

  function tabletSet() {
    mainPage.addEventListener('click', onShowInfo);
  }

  resizeInit(desktopSet, tabletSet);
}
