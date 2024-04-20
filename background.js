chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("https://github.com/") && changeInfo.url.includes("/pull/")) {
    const prNumber = parseInt(changeInfo.url.split("/pull/")[1], 10);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      NumberOfPr: prNumber,
    });
  }
});
