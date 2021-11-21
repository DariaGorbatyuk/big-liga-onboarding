const colors = ['lightning--purple', 'lightning--pink', 'lightning--blue', 'lightning--white'];
let changedColors;
let isDesktopState;


function refreshVariables(newColors, state) {
  changedColors = newColors;
  isDesktopState = state;
}

function getVariables() {
  return {
    changedColors,
    isDesktopState,
  };
}


export {refreshVariables, getVariables, colors};
