function scrollToTop(element) {
	if (typeof(element) != 'undefined' && element != null) {
	  element.scrollIntoView();
    } else {
    	console.log('Element not find =/');
    }
}

document.querySelector(".backtop").onclick = function() {
	scrollToTop(document.querySelector('.container'));
};
