var lib = {};

// Misc (Likely should be overhauled later.)
lib.misc = {};
lib.misc.createImage = function (source, styles) {
	var img = document.createElement("img");
	img.style = styles;
	img.src = `assets/${source}`;
	img.draggable = false;
	// img.style.outline = "1px solid black";
	img.style.position = "absolute";
	return img;
}

lib.misc.distance = function (point1, point2) {
	return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

lib.misc.letters = "ZXCVBNMASDFGHJKLQWERTYUIOP".split("");
lib.misc.getLetterCodeFromEvent = function (e) {
	return lib.misc.letters.indexOf(e.code.split("Key")[1]);
}

lib.misc.codeFromEvent = function (e) {
	return e.code.split("Key")[1].charCodeAt();
}

lib.misc.sync = function (n, c) { void 0 === c && (c = 1); for (var i = 0; i < c; i++)!async function () { n() }() };

lib.misc.pathfind = function (start, dest) {
	var change = { x: 0, y: 0 };
	if (start.x > dest.x) {
		change.x -= 1;
	}
	if (start.x < dest.x) {
		change.x += 1;
	}
	if (start.y > dest.y) {
		change.y -= 1;
	}
	if (start.y < dest.y) {
		change.y += 1;
	}
	return change;
}

lib.misc.pathfindHoverAtTop = function (start, dest) {
	dest.y = 100;
	var change = { x: 0, y: 0 };

	if (start.y > dest.y) {
		change.y -= 1;
	} else if (start.y < dest.y) {
		change.y += 1;
	} 

	if (start.x > dest.x) {
		change.x -= 1;
	} else if (start.x < dest.x) {
		change.x += 1;
	}
	
	return change;
}

lib.misc.pathfindIndirect = function (start, dest) {
	var change = { x: 0, y: 0 };

	if (start.x > dest.x) {
		change.x -= 0.1;
		change.y += 0.2;
	}

	if (start.x < dest.x) {
		change.x += 0.1;
		change.y -= 0.2;
	}

	if (start.y > dest.y) {
		change.y -= 0.1;
		change.x += 0.2;
	}

	if (start.y < dest.y) {
		change.y += 0.1;
		change.x -= 0.2;
	}

	return change;
}

lib.misc.createButton = function (text, clickHandler) {
	var button = document.createElement("button");

	button.innerText = text;
	button.onclick = clickHandler;

	return button;
}


lib.misc.storyGo = function (text) {
	var stor_dialog = document.createElement("div");

	var winrect = {
		minX: 0,
		maxX: window.innerWidth,
		minY: 0,
		maxY: window.innerHeight
	};

	stor_dialog.innerText = text;
	stor_dialog.style.color = "white";
	stor_dialog.style.borderRadius = "10px";
	stor_dialog.style.backgroundColor = "black";
	stor_dialog.style.height = "fit-content";
	stor_dialog.style.zIndex = "238572348237492";
	stor_dialog.style.fontSize = "100px";

	stor_dialog.style.position = "absolute";
	lib.css.SetPosition(stor_dialog, "0%", "0%");

	stor_dialog.appendChild(document.createElement("br"));
	stor_dialog.appendChild(document.createElement("br"));
	document.body.appendChild(stor_dialog);

	var ninterval = setInterval(function () {
		console.log("MV DIA");
		lib.css.MovePosition(stor_dialog, "0%", "-1%");
		var objectRect = lib.way.getMinsMaxs(stor_dialog.getBoundingClientRect());
		if ((!lib.way.intersect(objectRect, winrect))) {
			clearInterval(ninterval);
			stor_dialog.remove();
		}
	}, 1);
}

// Based on the way lib.js does it!
lib.way = {};

lib.way.thisFrame = +(Date.now());
lib.way.lastFrame = +(Date.now());
lib.way.averageDeltaTime = lib.way.thisFrame - lib.way.lastFrame;
lib.way.frame = function () {
	lib.way.lastFrame = lib.way.thisFrame;
	lib.way.thisFrame = +(Date.now());
	lib.way.averageDeltaTime += lib.way.thisFrame - lib.way.lastFrame;
	lib.way.averageDeltaTime /= 2;
}

lib.way.fps = function () {
	return (1000 / lib.way.averageDeltaTime);
}

lib.way.ready = function () {
	document.body.style.userSelect = "none";
	document.body.style.imageRendering = "pixelated";
	document.body.style.backgroundColor = "black";
	document.body.style.overflow = "hidden";
}

lib.way.intersect = function (a, b) {
	return (
		a.minX <= b.maxX &&
		a.maxX >= b.minX &&
		a.minY <= b.maxY &&
		a.maxY >= b.minY
	);
}

lib.way.getMinsMaxs = function (Erect) {
	Erect.minX = Erect.x;
	Erect.minY = Erect.y;
	Erect.maxX = Erect.x + Erect.width;
	Erect.maxY = Erect.y + Erect.height;
	return Erect;
}

lib.way.checkObjectsTouch = function (obj1, obj2) {
	var Erect = lib.way.getMinsMaxs(obj1.getBoundingClientRect());
	var Drect = lib.way.getMinsMaxs(obj2.getBoundingClientRect());
	return lib.way.intersect(Erect, Drect);
}

// CSS
lib.css = {};
lib.css.ScreenCenter = function (styles) {
	return `top:${Math.round(window.innerHeight / 2)}px;left:${Math.round(window.innerWidth / 2)}px;${styles}`;
}

lib.css.MovePosition = function (object, x, y, boundScreen) {
	var osl = structuredClone(object.style.left);
	var ost = structuredClone(object.style.top);

	lib.css.TransitionlessSetPosition(object, `calc(${object.style.left} + ${x})`, `calc(${object.style.top} + ${y})`);

	var objectRect = lib.way.getMinsMaxs(object.getBoundingClientRect());

	var rect = {
		minX: Math.round(objectRect.width),
		maxX: Math.round(window.innerWidth - objectRect.width),
		minY: Math.round(objectRect.height),
		maxY: Math.round(window.innerHeight - objectRect.height)
	};

	if ((!lib.way.intersect(objectRect, rect)) && boundScreen) {
		lib.css.TransitionlessSetPosition(object, osl, ost);
	}
}

lib.css.TransitionlessSetPosition = function (object, x, y) {
	var oldTransition = object.style.transition;
	object.style.transition = "";
	object.style.top = y;
	object.style.left = x;

	scheduler.timeout(function () {
		object.style.transition = oldTransition;
	}, 0);
}

lib.css.SetPosition = function (object, x, y) {
	if (typeof object != "undefined" && object != null) {
		object.style.top = y;
		object.style.left = x;
	} else {
		console.warn("Attempt to set position of undefined object.");
	}
}

lib.css.setBackground = function (src) {
	document.body.style.backgroundImage = `url('assets/${src}')`;
}

// Audio
lib.audio = {};
lib.audio.audioCtx = null;
lib.audio.audioDefined = false;
lib.audio.soundsPlaying = 0;

lib.audio.assureAudioDefined = function () {
	if (!lib.audio.audioDefined) {
		lib.audio.audioDefined = true;
		lib.audio.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	}
}

lib.audio.createSound = function (hz, waveType) {
	if (typeof waveType == "undefined") {
		waveType = "sine";
	}

	lib.audio.assureAudioDefined();
	lib.audio.soundsPlaying++;

	var oscillator = lib.audio.audioCtx.createOscillator();
	oscillator.type = waveType;
	const gainNode = lib.audio.audioCtx.createGain();
	oscillator.connect(gainNode);
	gainNode.connect(lib.audio.audioCtx.destination);
	gainNode.gain.value = 0.1;
	oscillator.connect(lib.audio.audioCtx.destination);
	oscillator.frequency.value = hz;
	oscillator.start();
	oscillator.gainNode = gainNode;

	oscillator.oldGain = 0.1;
	oscillator.oldHz = hz;
	oscillator.oldWaveType = waveType;

	oscillator.pauseState = false;

	oscillator.setVolume = function (volume) {
		gainNode.gain.value = volume;
	}

	oscillator.pause = function () {
		oscillator.oldGain = gainNode.gain.value;
		oscillator.oldHz = oscillator.frequency.value;
		oscillator.oldWaveType = oscillator.type;

		lib.audio.stopSound(oscillator);
	}

	oscillator.unpause = function () {
		oscillator = lib.audio.createSound(oscillator.oldHz, oscillator.oldWaveType);
		oscillator.gainNode.gain.value = oscillator.oldGain;
		return oscillator;
	}

	return oscillator;
}

lib.audio.stopSound = function (oscillator) {
	oscillator.stop();
	lib.audio.soundsPlaying--;
}

lib.audio.playSound = async function (hz, time, waveType) {
	const oscillator = lib.audio.createSound(hz, waveType);

	return new Promise((resolve, reject) => setTimeout(() => {
		oscillator.stop();
		lib.audio.soundsPlaying--;
	}, time));
}

lib.audio.playRangeSound = async function (hzS, hzE, time, waveType) {
	const oscillator = lib.audio.createSound(hzS, waveType);

	const startTime = +Date.now();

	function getTimeSinceStart() {
		return -(startTime - (+Date.now()));
	}

	var interval = setInterval(function () {
		if (getTimeSinceStart() >= time) {
			oscillator.stop();
			lib.audio.soundsPlaying--;
			clearInterval(interval);
		} else {
			var pr = Math.random();
			oscillator.frequency.value = ((1 - pr) * hzS) + (pr * hzE);
		}
	}, 10);
}

lib.audio.playMovingSound = async function (hzS, hzE, time, waveType) {
	const oscillator = lib.audio.createSound(hzS, waveType);

	const startTime = +Date.now();

	function getTimeSinceStart() {
		return -(startTime - (+Date.now()));
	}

	var interval = setInterval(function () {
		if (getTimeSinceStart() >= time) {
			oscillator.stop();
			lib.audio.soundsPlaying--;
			clearInterval(interval);
		} else {
			var pr = (getTimeSinceStart() / time);
			oscillator.frequency.value = ((1 - pr) * hzS) + (pr * hzE);
		}
	}, 10);
}

lib.audio.setHz = function (oscillator, Hz) {
	oscillator.frequency.value = Hz;
}
