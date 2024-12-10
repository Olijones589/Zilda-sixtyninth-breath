var p = document.createElement("p");
p.innerText = "Loading... Please wait.";
document.body.appendChild(p);

var toLoad = [
	"libs/schedule.js",
	"libs/dialoglib.js",
	"libs/lib.core.js",
	"libs/song.js",
	"libs/index.js"
];

function loadNextScript() {
	var currentFile = toLoad.shift();
	p.innerText = `Loading... ${currentFile}`;
	
	var script = document.createElement("script");
	
	script.onload = function() {
		setTimeout(function() {
			if(toLoad.length != 0) {
				loadNextScript();
			} else {
				p.remove();
			}
		}, 100 + (Math.random() * 400)) // sorry my server is really slow
	}
	
	script.onerror = function(e) {
		p.innerText = `${currentFile} couldn't load.`;
	}

	script.src = currentFile;
	document.body.appendChild(script);
}

loadNextScript();
