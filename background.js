chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("/pull/") && changeInfo.url.includes("/files")) {
    chrome.action.enable(tabId);
  } else {
    chrome.action.disable(tabId);
  }
});
