chrome.tabs.onUpdated.addListener((tabId,_,tab) => {
  console.log(tab);
   if (tab.url && tab.url.includes("/pull/") && tab.url.includes("/files")) {
    console.log("sending message")
  chrome.tabs.sendMessage(tabId,{message:"extracted value"})
   } else {
     console.log("not in files",tab.url);
  }
});
