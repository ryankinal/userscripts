// ==UserScript==
// @name          Outlook Online Unread Indicator
// @author        Ryan Kinal
// @version       0.1.0
// @namespace     http://ryankinal.com
// @description   Adds unread indicator to window/tab title
// @include       https://outlook.office365.com/owa/*
// ==/UserScript==

setInterval(function() {
	var folders = document.querySelectorAll('span[id*=folder]'),
		inbox,
		countElem,
		count;


	if (folders && folders.length > 0) {
		inbox = [].filter.call(folders, function(folder) {
			return folder.innerText.toLowerCase() === 'inbox';
		})[0];

		countElem = inbox.parentNode.querySelector('span[id*=ucount');

		if (countElem) {
			count = parseInt(countElem.innerText, 10);

			if (count) {
				document.title = '(' + count + ') ' + document.title.replace(/^\(\d+\)\s/, '');
				return;
			}
		}
	}

	document.title = document.title.replace(/^\(\d+\)\s/, '');
}, 1000);