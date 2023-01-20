chrome.commands.onCommand.addListener((command, tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: contentScriptFunc,
    args: [command]
  });
});

function contentScriptFunc(name) {
  if (!document.location.href.includes('flagstack.net/map')) return;
  switch (name) {
    case 'deploy-green':
      let grnflag = document.querySelector('[data-itemtypeid="4"]');
      if (grnflag) grnflag.click();
      break;
    case 'deploy-save':
      let savebtn = document.querySelector('a.deploy_save');
      if (savebtn) savebtn.click();
      break;
  }
}

// The End
