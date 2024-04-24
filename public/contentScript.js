chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let MainCode;
  const firstContainer = document.querySelector('div[data-target="diff-layout.mainContainer"]');
  if (firstContainer !== null) {
    MainCode = firstContainer.innerText;
  } else {
    const fallbackContainer = document.querySelector('div[class="data highlight js-blob-wrapper"]');
    if (fallbackContainer !== null) {
      MainCode = fallbackContainer.innerText;
    }
  }

  if (MainCode) {
    // Store MainCode for later use
    chrome.storage.local.set({ MainCode }, () => {
      console.log("MainCode has been saved.", MainCode);
    });

    // Optionally, send MainCode back
    if (request.type === "getCode") {
      sendResponse({ MainCode });
    }
  } else {
    console.warn("No code found using either selector.");
  }
});
