window.ondragover = function(e) { e.preventDefault; return false;}
window.ondrop = function(e) { e.preventDefault; return false;}

var el = document.querySelector('#drop');
el.ondragover = function () {
	this.className = "hover";
	this.innerHTML = "Drop the file";
	return false;
}
el.ondragleave = function () {
	this.className = "";
	this.innerHTML = "Drop your icon here";
	return false;
}
el.ondrop = function (e) {
	e.preventDefault();
	console.log(e.dataTransfer);
	for (var i =0; i < e.dataTransfer.file.lenght; ++i) {
		var file = e.dataTransfer.files[i].path;
		consol.log(file);

	}
}