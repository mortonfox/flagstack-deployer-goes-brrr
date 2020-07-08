// jshint esversion: 6

function init() {
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key == 'g') {
      let grnflag = document.querySelector('[data-itemtypeid="4"]');
      grnflag.click();
    }
  }, false);
}

init();

// -- The End --
