var speedSung = 0.5;

var oranina_of_crims = `
[qi] [tpe] [tea] [te] [qi] [tpe] [tea] [te]
[qi] [tpe] [tea] [tfe] [qd] [te] [tea] [tse]
[a0] [wto] [wut] [wt] 0 [wt] [wt] [y8]
[u0] [wto] [wut] [wt] 0 [wt] [wt] 8
[qi] [tpe] [tea] [te] [qi] [tpe] [tea] [te]
[qi] [tpe] [tea] [tfe] [qd] [te] [tea] [tse]
[f0] [wta] [wto] [wt] 0 [wt] [wt] [a8]
[o0] [ywt] [wut] [wt] 0 [wt] [wt] 8
[y9] [uqe] [i9] [qe] [o5] [wp9] [a5] [w9]
[s8] [ta0] [u8] [t0] 6 [e0] 6 [e0]
[yi9] [uqoe] [pi9] [qe] [oa5] [wsp9] [da5] [w9]
[sf8] [tgd0] [hf8] [t0] 6 [e0] 6 [e0]
[y9] [uqe] [i9] [qe] [o5] [wp9] [a5] [w9]
[s8] [ta0] [u8] [t0] 6 [e0] 6 [e0]
[yi9] [utqe] [qpie] [uo] [oa9] [qpie] [sqpe] [oa]
[da8] [wsrp] [wsrf] [da] [gd8] [wsrf] [wrfa][sg] [pd]
[fa0] [re]|[re] 0 [re]|
[re] 0 [rW] [rW] [rW] [rW]|[ukf0]|
[qi] [tpe] [tea] [te] [qi] [tpe] [tea] [te]
[qi] [tpe] [tea] [tfe] [qd] [te] [tea] [tse]
[a0] [wto] [wut] [wt] 0 [wt] [wt] [y8]
[u0] [wto] [wut] [wt] 0 [wt] [wt] 8
[qi] [tpe] [tea] [te] [qi] [tpe] [tea] [te]
[qi] [tpe] [tea] [tfe] [qd] [te] [tea] [tse]
[f0] [wta] [wto] [wt] 0 [wt] [wt] [a8]
[o0] [ywt] [wut] [wt] 0 [wt] [wt] 8
[y9] [uqe] [i9] [qe] [o5] [wp9] [a5] [w9]
[s8] [ta0] [u8] [t0] 6 [e0] 6 [e0]
[yi9] [uqoe] [pi9] [qe] [oa5] [wsp9] [da5] [w9]
[sf8] [tgd0] [hf8] [t0] 6 [e0] 6 [e0]
[y9] [uqe] [i9] [qe] [o5] [wp9] [a5] [w9]
[s8] [ta0] [u8] [t0] 6 [e0] 6 [e0]
[yi9] [utqe] [qpie] [uo] [oa9] [qpie] [sqpe] [oa]
[da8] [wsrp] [wsrf] [da] [gd8] [wsrf] [wrfa][sg] [pd]
[fa0] [re]|[re] 0 [re]|
[re] 0 [rW] [rW] [rW] [rW]|[ukf0]`;

var i_of_tigger = `[6ups]|6|[ups] [yoa] [ups]
6|6|[ups] [yoa] [ups]
6|6|[ups] [uoa] [tip]
4|4|4|4|
[6ups]|6|[ups] [yoa] [ups]
6|6|[ups] [yoa] [ups]
6|6|[ups] [uoa] [tip]
4|4|4|4|
[0et]|f hf||
[qetd] s f d s|[qet]|
[wry]|d d d|d f
[0etd]|s||
[0et]|f hh f d s
[qetf] d d s|[qetp] s
[wryd]|d s d|d sf
[0et]||d f
[9qe] g g gg f d s
[0wts] d f d [9wr] d|f
[9qeg]|g g gf d s
[0etf]|[9wrd]| d f
[9qeg]|g gg f d s
[0wts] d f d [9wr] d f
[9qeg] f g [0wrh] g h
[qetj]||[qet]|d sd
[0et]|s||
6`;

function parse(sung) {
	sung = sung.replaceAll("\n", "");
	var keji = "";
	var inBrackets = false;
	var kejir = [];
	sung.split("").forEach(bean => {
		if (bean == "[") {
			inBrackets = true;
		} else if (bean == "]") {
			inBrackets = false;

			if (keji != "") {
				kejir.push(keji);
				keji = "";
			}
		} else {
			if (inBrackets) {
				keji += bean;
			} else {
				kejir.push(bean);
			}
		}
	});

	var instructions = [];
	kejir.forEach(elem => {
		if (elem == " ") {
			instructions.push({
				"type": "wait",
				"time": speedSung
			});
		} else if (elem == "|") {
			instructions.push({
				"type": "wait",
				"time": speedSung * 2
			});
		} else {
			instructions.push({
				"type": "play",
				"notes": elem.split(""),
				"time": 1
			});
		}
	});
	return instructions;
}

function asciiConverter(char) {
	return char.charCodeAt();
}

function robloxNoteToRealNote(robloxNote) {
	// console.log(robloxNote);
	const noteMap = {
		'1': 'C2',
		'2': 'D2',
		'3': 'E2',
		'4': 'F2',
		'5': 'G2',
		'6': 'A2',
		'7': 'B2',
		'8': 'C3',
		'9': 'D3',
		'0': 'E3',
		'q': 'F3',
		'w': 'G3',
		'e': 'A3',
		'r': 'B3',
		't': 'C4',
		'y': 'D4',
		'u': 'E4',
		'i': 'F4',
		'o': 'G4',
		'p': 'A4',
		'a': 'B4',
		's': 'C5',
		'd': 'D5',
		'f': 'E5',
		'g': 'F5',
		'h': 'G5',
		'j': 'A5',
		'k': 'B5',
		'l': 'C6',
		'z': 'D6',
		'x': 'E6',
		'c': 'F6',
		'v': 'G6',
		'b': 'A6',
		'n': 'B6',
		'm': 'C7',
		'Q': 'F#3',
		'W': 'G#3',
		'E': 'A#3',
		'T': 'C#4',
		'Y': 'D#4',
		'I': 'F#4',
		'O': 'G#4',
		'P': 'A#4',
		'S': 'C#4',
		'D': 'D#5',
		'H': 'G#5',
		'J': 'A#5',
		'L': 'C#6',
		'Z': 'D#6',
		'C': 'F#6',
		'V': 'G#6',
		'B': 'A#6',
		'G': 'F#5',
		'!': 'C#2',
		'@': 'D#2',
		'$': 'F#2',
		'%': 'G#2',
		'^': 'A#2',
		'*': 'C#3',
		'(': 'D#3'
	};
	return noteMap[robloxNote] || 'Invalid note';
}

function noteNameToHz(noteName, octaveIncrease) {
	// console.log(noteName);
	const noteMap = {
		'C': 0,
		'C#': 1,
		'D': 2,
		'D#': 3,
		'E': 4,
		'F': 5,
		'F#': 6,
		'G': 7,
		'G#': 8,
		'A': 9,
		'A#': 10,
		'B': 11
	};
	const noteRegex = /^([A-G][#]?)(\d)$/;
	const match = noteName.match(noteRegex);
	if (!match) {
		throw new Error('Invalid note name');
	}
	const note = match[1];
	const octave = parseInt(match[2]) + octaveShift;
	if (!(note in noteMap)) {
		throw new Error('Invalid note name');
	}
	const A4 = 440;
	const midiNumber = noteMap[note] + (octave + octaveIncrease) * 12;
	const frequency = A4 * Math.pow(2, (midiNumber - 69) / 12);
	return frequency;
}

function robloxNoteConverter(rnote, o) {
	if(o == undefined) {
		o = 0;
	}
	return noteNameToHz(robloxNoteToRealNote(rnote), o);
}

var sungWaves = ["triangle", "sine", "square", "triangle", "sawtooth"];
var sungSpeed = 200;
var octaveShift = 1;

async function playSung(sung, converter) {
	const newAudioCtx = new(window.AudioContext || window.webkitAudioContext)();
	if (converter == undefined) {
		converter = robloxNoteConverter;
	}
	var parsed = parse(sung);
	var index = 0;
	const gainNode = newAudioCtx.createGain();
	gainNode.gain.value = 0.5;
	gainNode.connect(newAudioCtx.destination);

	function playNext() {
		if (typeof parsed[index] == "undefined") {
			return;
		} else if (parsed[index].type == "wait") {
			setTimeout(playNext, parsed[index].time * (sungSpeed));
		} else if (parsed[index].type == "play") {
			var frequencies = [];
			parsed[index].notes.forEach(function(note) {
				frequencies.push(converter(note));
				frequencies.push(converter(note, 2));
			});
			var oscs = [];
			for(var i = 0; i < frequencies.length; i++) {
				var o = newAudioCtx.createOscillator();
				o.type = sungWaves[i % sungWaves.length];
				o.frequency.value = frequencies[i];
				o.connect(gainNode);
				o.start(0);
				oscs.push(o);
			}

			setTimeout(function() {
				oscs.forEach(function(o) {
					o.stop(0);
				});
			}, (sungSpeed));

			setTimeout(playNext, parsed[index].time * (sungSpeed));
		}
		index++;
	}
	playNext();
}

var height = 100;

function nosong() {
	return;
}

function trick_the_treat() {
	instrument_beat(500, 100);
	scheduler.timeout(function() {
		instrument_beat(500, 100);
		scheduler.timeout(function() {
			instrument_beat(600, 100);
		}, 100);
	}, 200);
	scheduler.timeout(function() {
		instrument_beat(600, 0.1);
	}, 100);
}

function washer() {
	lib.audio.playMovingSound(200, 600, 100, "sine");
	scheduler.timeout(function() {
		lib.audio.playMovingSound(600, 200, 100, "sine");
	}, 100);
}

function sound_tazer(n, len) {
	for (var i = 0; i < 7; i++) {
		lib.audio.playMovingSound((i * 100) + n, (i * 100) + n, len, "sawtooth");
	}
}

function instrument_bass(hz, len) {
	for (var i = 0; i < 10; i++) {
		lib.audio.playSound(hz + (i * (i % 2)), len, "sine");
		lib.audio.playSound(hz + (i * (i % 2) + 200), len, "sine");
		lib.audio.playSound(hz + (i * (i % 2) + 300), len, "sine");
	}
}

function instrument_beat(hz, len) {
	if (hz < 201) {
		hz = 201;
	}
	lib.audio.playMovingSound(hz, hz - 200, len);
}

function unknown() {
	lib.audio.playSound(200, 500);
	instrument_bass(200, 100);
	instrument_beat(300, 100);

	scheduler.timeout(function() {
		instrument_beat(300, 100);
		scheduler.timeout(function() {
			instrument_bass(400, 100);
			instrument_beat(300, 100);
			scheduler.timeout(function() {
				instrument_beat(300, 100);
			}, 100);
		}, 100);
	}, 100);

	scheduler.timeout(function() {
		lib.audio.playSound(height, 500);
	}, 500);
}

function tension() {
	lib.audio.playRangeSound(100, 110, 100, "triangle");
	lib.audio.playSound(100, 100, "sawtooth");
}

function action() {
	lib.audio.playSound(100, 1000);
	if (height > 100) {
		height -= 50;
	} else if (100 > height) {
		height += 10;
	}
	lib.audio.playMovingSound(200, 200, 1000, "triangle");
	lib.audio.playMovingSound(300, 200, 100, "sawtooth");
	scheduler.timeout(function() {
		lib.audio.playMovingSound(300, 200, 100, "sawtooth");
		lib.audio.playMovingSound(400, 400, 500, "sine");
		if (Math.random() > 0.5) {
			scheduler.timeout(function() {
				lib.audio.playMovingSound(500, 800, 300, "sine");
				if (Math.random() > 0.5) {
					scheduler.timeout(function() {
						lib.audio.playMovingSound(300, 200, 100, "sawtooth");
					}, 100);
					height = 600;
				} else {
					lib.audio.playMovingSound(500, 200, 400, "triangle");
					height = 150;
				}
			}, 500);
		} else {
			lib.audio.playMovingSound(700, 500 + (Math.random() * 500), 700, "sawtooth");
			height = 100;
		}
	}, 200);
}

function preaction() {
	lib.audio.playSound(100, 1000);
	if (height > 100) {
		height -= 50;
	} else if (100 > height) {
		height += 10;
	}
	scheduler.timeout(function() {
		if (Math.random() > 0.5) {
			scheduler.timeout(function() {
				lib.audio.playMovingSound(500, 800, 300, "sine");
				if (Math.random() > 0.5) {
					scheduler.timeout(function() {
						lib.audio.playMovingSound(300, 200, 100, "sawtooth");
					}, 100);
					height = 600;
				} else {
					lib.audio.playMovingSound(500, 200, 400, "triangle");
					height = 150;
				}
			}, 500);
		} else {
			lib.audio.playMovingSound(700, 500 + (Math.random() * 500), 700, "sawtooth");
			height = 100;
		}
	}, 200);
}

var song = tension;

scheduler.interval(function() {
	song();
}, 1000);
