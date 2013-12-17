function zeroFormat (d) {
	//prepend a zero to any single digit string so that we can make the query correctly for the comic strip
	return ( d.toString().length == 1 ? ("0" + "" + d ) : d );
}

function loadComicStrip(e) {
	localStorage.setItem('stripToLoad',$(e.currentTarget).attr('name'));
	window.location.assign("GarfieldStrip.html");
}