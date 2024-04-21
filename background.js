chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    if (tab.url.includes("/pull/") && tab.url.includes("/files")) {
      chrome.action.setIcon({ tabId: tabId, path: "assets/bookmark.png" });
    } else {
      chrome.action.setIcon({ tabId: tabId, path: "assets/delete.png" });
    }
  }
});