// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    if (!tab.url.match("https://twitter.com/following")) {
        chrome.tabs.create({
            "url": "https://twitter.com/following",
            "selected": true
        });
		
		chrome.tabs.executeScript(null, {
			file: "unfollowall.js"
		});	
		
    } else {	
		chrome.tabs.executeScript(null, {
			file: "unfollowall.js"
		});	
    }
});
