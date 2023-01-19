// jshint esversion: 6

function init() {
  document.addEventListener('keydown', event => {
    if (event.altKey && event.key == 'g') {
      let grnflag = document.querySelector('[data-itemtypeid="4"]');
      if (grnflag) grnflag.click();
    }
    if (event.altKey && event.key == 'b') {
      let savebtn = document.querySelector('a.deploy_save');
      if (savebtn) savebtn.click();
    }
  }, false);
}

init();

// -- The End --
