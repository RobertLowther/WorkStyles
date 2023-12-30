
chrome.runtime.onMessage.addListener(function (details) {
    console.log("Message received", details);

    if (details.action === 'replaceStylesheet' && document.URL.startsWith('https://servicemanager.mycomputerworks.com')) {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = chrome.runtime.getURL('style.css');
        document.head.appendChild(style);
    }
});

chrome.storage.local.get()