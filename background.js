// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status === 'complete') {
//     chrome.tabs.sendMessage(tabId, { action: 'replaceStylesheet' });
//   }
// });

try {
  chrome.tabs.onUpdated.addListener(updated);
} catch (e) {
  console.log(e);
}


function updated(tabId, changeInfo, tab) {
  try {
    if (changeInfo.status === "complete") {
      chrome.tabs.get(tabId, function (updatedTab) {
        if (chrome.runtime.lastError || !updatedTab) {
          console.log("Tab is not available")
        } else {
          chrome.tabs.sendMessage(tabId, { action: 'replaceStylesheet' });
        }
      });
    }
  } catch (e) {
    console.log("error: " + e);
  }
}