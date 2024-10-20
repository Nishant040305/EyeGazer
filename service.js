chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        // After the tab is fully loaded and active, inject the scripts
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTabId = tabs[0].id;

            if (activeTabId) {
                // Inject recalibration.js
                chrome.scripting.executeScript({
                    target: { tabId: activeTabId },
                    files: ['./Lib/recalibration.js']
                }, () => {
                    console.log('Recalibration script injected successfully.');

                    // Now you can access and use recalibrate() within your content script
                    chrome.scripting.executeScript({
                        target: { tabId: activeTabId },
                        function: () => {
                            recalibrate();
                        }
                    });
                });

                // Inject clickFunction.js
                chrome.scripting.executeScript({
                    target: { tabId: activeTabId },
                    files: ['./Lib/clickFunction.js']
                }, () => {
                    console.log('Click function script injected successfully.');
                });
            } else {
                console.error('No active tab found.');
            }
        });
    }
});
