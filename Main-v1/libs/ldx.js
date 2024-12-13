
var p = document.createElement("p");
p.innerText = "Loading... Please wait.";
p.style.position = "absolute";
p.style.left = "50%";
p.style.top = "50%";
p.style.transform = "translate(-50%, -50%)";
p.style.color = "white";
document.body.appendChild(p);

document.body.style.backgroundColor = "black";

var toLoad = [
	"libs/schedule.js",
	"libs/dialoglib.js",
	"libs/lib.core.js",
	"libs/song.js",
	"libs/dungen.js",
	"libs/index.js"
];

async function sha256(message) {
	const encoder = new TextEncoder();
	const data = encoder.encode(message);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
  }
  
var averageFileLoad = 1000;

async function loadNextScript() {
	var currentFile = toLoad.shift();
	p.innerText = `Loading... ${toLoad.length} resources left to load. Completing in ${((averageFileLoad*toLoad.length)/1000)} seconds.`;
	
	var script = document.createElement("script");
	
	var fileLoadStartTime = +(Date.now());
	script.onload = function() {
		if(toLoad.length == 0) {
			p.remove();
		} else {
			setTimeout(function() {
				loadNextScript();
				averageFileLoad += ((+(Date.now())) - fileLoadStartTime);
				averageFileLoad /= 2;
			}, 0); // sorry my server is really slow
		}
	}
	
	script.onerror = function(e) {
		p.innerText = `${currentFile} couldn't load.`;
	}

	script.src = currentFile;
	document.body.appendChild(script);
}

loadNextScript();
