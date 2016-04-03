var im = require('imagemagick');
var im = require('path');
var formats = {
	'icone.png' : 57,
	'icone@2x.png' : 114,
	'icone-40.png' : 40,
	'icone@2x.png' : 80,
	'icone-50.png' : 50,
	'icone-50@2x.png' : 100,
	'icone-60.png' : 60,
	'icone-60@2x.png' : 120,
	'icone-72.png' : 72,
	'icone-72@2x.png' : 144,
	'icone-76.png' : 76,
	'icone-76@2x.png' : 152,
	'icone-small.png' : 29,
	'icone-small@2x.png' : 58,
	'iTunesArtwork.png' : 512,
	'iTunesArtwork@2x.png' : 1024
}

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
	for (var i =0; i < e.dataTransfer.file.length; ++i) {
		var file = e.dataTransfer.files[i].path;
		for(var format in formats) {
			var size = formats[format];
			var output = path.direname(file) + path.sep + "icone.png";
			im.convert([file, '-resize', size + 'x' + size, output], function(err, stdout){
				console.log('stdout:', stdout);
		}
		})
		
	}
}