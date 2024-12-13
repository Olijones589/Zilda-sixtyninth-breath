var speedSung = 0.5;

var cave_story = `j z j z H z H z h z h z G z G G h
j z j z H z H z h z h z G z G G h
[jI] [zy] [je] [zy] [uH] [zy] [eH] [zy]
[wh] [zy] [wh] [zy] [QG] [zy] [QG] [yG] h
[jI] [zy] [je] [zy] [uH] [zy] [eH] [zy]
[wh] [zy] [wh] [zy] [tsc] [xra] [zpe]|
j k l zl kj| l zl kj g l lk jk h z k
j k l zl kj| l zl kj g l lk jk h z k
[ul] v [yl] u[vi] o[ok] v [pk] [vo]
[oJ] v [pJ] [vo] [sg] c [tg] [yc] Y Y yY yY yt|
s D [wd] [rd] s[yd] s[rd]Dds[wa] r y r
[ul] v [yl] u[vi] o[ok] v [pk] [vo]
[oJ] v [pJ] [vo] [sg] c g c| h J Z v|
v c [vrok]| [tpl]| [TPL]| [zya]|
[pb] d p d [VO] d O d
[oB] d o d [bI] d I I o
[pj] z j z [OH] z H z
[hP] z h z [pG] z G G h
[pb] d p d [VO] d O d
[oB] d o d [bI] d I I o
[pj] z j z [OH] z H z
[hP] z h z [pG] z G G h
[pj] [xa] [sj] d[xs] a[pH] x [sH] d[xs] a
[ph] [li] [sh] s[la] p[ha] [xo] [hd] a
[pj] [xa] [sj] d[xs] a[pH] x [sH] d[xs] a
[ph] [li] [sh] s[la] p[xa] [zo] [kd] a
f| d fg hh| j h h| j h l|
tyYuytY Y yY yY yt|
s D [wd] [rd]sas[yd]sas[rd]Dds[wa] r y r
[lf] v [ld] f[vg] h[kh] v [kj] [vh]
[hJ] v [jJ] [vh] [lg] c g c
h [hg] [fJ] [gZ] [vh] g [vf] [gc]
[vkh] g [ld] g [hL]| z|
j z j z H z H z h z h z G z G G h
j z j z H z H z h z h z G z G G h
[jI] [zy] [je] [zy] [uH] [zy] [eH] [zy]
[wh] [zy] [wh] [zy] [QG] [zy] [QG] [yG] h
[jI] [zy] [je] [zy] [uH] [zy] [eH] [zy]
[wh] [zy] [wh] [zy] [tsc] [xra] [zpe]|
j k l zl kj| l zl kj g l lk jk h z k
j k l zl kj| l zl kj g l lk jk h z k
[ul] v [yl] u[vi] o[ok] v [pk] [vo]
[oJ] v [pJ] [vo] [sg] c [tg] [yc] Y Y yY yY yt|
s D [wd] [rd] s[yd] s[rd]Dds[wa] r y r
[ul] v [yl] u[vi] o[ok] v [pk] [vo]
[oJ] v [pJ] [vo] [sg] c g c| h J Z v|
v c [vrok]| [tpl]| [TPL]| [zya]|
[pb] d p d [VO] d O d
[oB] d o d [bI] d I I o
[pj] z j z [OH] z H z
[hP] z h z [pG] z G G h
[pb] d p d [VO] d O d
[oB] d o d [bI] d I I o
[pj] z j z [OH] z H z
[hP] z h z [pG] z G G h
[pj] [xa] [sj] d[xs] a[pH] x [sH] d[xs] a
[ph] [li] [sh] s[la] p[ha] [xo] [hd] a
[pj] [xa] [sj] d[xs] a[pH] x [sH] d[xs] a
[ph] [li] [sh] s[la] p[xa] [zo] [kd] a
f| d fg hh| j h h| j h l| tyYuytY Y yY yY yt|
s D [wd] [rd]sas[yd]sas[rd]Dds[wa] r y r
[lf] v [ld] f[vg] h[kh] v [kj] [vh]
[hJ] v [jJ] [vh] [lg] c g c| h J Z v| v c [vk]`;

var you_won = `[st] o u o [sf] o [uh] o [ya] o i [so]d[st] o u o
[tj] p i p [ht] o [ul] o [hr] o [yg] [fo]g[tf] o u o
[ip] asdfghjhgf[dtq]sap[ot0]
pasdfghgfd[st0]apo[it9]
opasdfgfds[ar9]poi[ut8]
iopasdfdsa[p08]oiu[yeq]
uiopaSdpaSdfgh[jq]klkjh[gw]f[ge]hjhgf[dQ]s[a5]7[h9]w[f5]8[s0]w[d5]7[h9]w[f5]8[s0]w[d5] | [hdaw] | [o5] |
TyTyTyTytytytyty[rz]y[rk]y[rh]yryry[rj][yk][rj]y[rh]y[th]yr[yG][eG]yrytyrytyey[rz]y[rk]y[rh]yryry[rj][yk][rj]y[rh]y[th]yr[yG][eG]yrytyrytyeyzryoazkhftuosfhfletIpljGdryiadGdkwruokhfsetupsfsjQeyIjGdawryohda[put] [ut] [ut] [ut] [uts] [ut] [utf] [ut] [utj] [ut] [ut] [utk] [utl] [utj] [utl] [utj] [yk]a[oh]a[yz]aoayaoa[yl][ak][oj][ah][yj]sIsysIsysIsysIs[oah] hdhkzkhk[lspy]jGj[hoa] oyoadaoa[ste9]pIp[orw] | [kdw5] | [hdw5] | [ow5] hdhJzJhJ[lspy]jGj[hPo] oyoPdPoP[ste9]pIpoweEtyuIohJjhgfdSertyuIOpLxzLJjh[g92] dpdgjgdg[houe]fSf[diy] yeyipiyi[ow06]uTu[9q] yuiopaSdyiuytreWasdfGHjkWreWq098jxzlkjhgypoiuytrhzlkjhgftoiuytreglkjhgfdriuytreWfkjHgfdsetrewq09PdsPpoi[uEw8]iopPsdf[gi] s p s [ij] s [pl] s [of] s P [sg]h[ig] s p s [iz] d P d [il] s [cp] s [ul] s [oJ] [sj]J[ij] s p s [Pd] fghjJlzlJj[hiE]gfd[sie] dfghjJlJjh[gie]fds[Piw] sdfghjJjhg[fwu]dsP[piq] PsdfghjhgfdsPpjqweEtyuiuyt[Esj]ewq[0sh] qwertyuytr[esh]wq0[9sg] 0qwertytre[wag]q09[8sf] 90qwertrew[qsf]098[dqe]yuiopaSdpaSdfgh[jq]klkjh[gw]f[ge]hjhgf[dQ]s[5a]7[9h]w[5f]8[0s]w[5d]7[9h]w[5f]8[0s]w[5d] | [whda] | [5o] |`;

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

var christmas = `s asp
s asp
s asp
s asp
[es] asp
[ws] asp
[qs] asp
[0s] as[0p]
[6s]0[ea][rs][tp]
[5s]0[wa][es][rp]
[4s]8[qa][ws][ep]
[3s]6[0a][6s][3p]
[6sf]0[ead][rsf][tps]
[5sf]0[wad][esf][rps]
[4sf]8[qad][wsf][eps]
[3sf]6[0ad][6sf][3ps]
[6epj] [6pj][6pj][6ph][6pg][5wof]
[5of][5of][5od][5os][4qid]
[4id][4id][4if][4id][30tp]
[3rp][3tp][3ep]7[3up][%I][7o][0p][7a][5s][3d][5f][7d]0[7s]%[3up][%I][7o][0p][7a][5s][3d][5f][7d]0s
[8pj] 786
8 786
8 786
8 786
[6f]0er[td]
[6s]0er[tp]
[5a]9[ws]e[ra]
[6p]0ert
[6f]0er[td]
[6s]0er[tp]
[5a]9[ws]e[ra]
[6p]0ert8[5s]80w[0s]8[2d]579[7d]5[6f]80e[0f]8[4h]6[8g]q[8f]6[2d]6[9f]0[qd]7[8s]
7%[3a]7[3p]%70Wru|
[6s]0[ea][rs][tp]
[5s]0[wa][es][rp]
[4s]8[qa][ws][ep]
[3s]6[0a][6s][3p]
[6sf]0[ead][rsf][tps]
[5sf]0[wad][esf][rps]
[4sf]8[qad][wsf][eps]
[3sf]6[0ad][6sf][3ps]
[6epj] [6pj][6pj][6ph][6pg][5wof]
[5of][5of][5od][5os][4qid]
[4id][4id][4if][4id][30tp]
[3rp][3tp][3ep]7[3up][%I][7o][0p][7a][5s][3d][5f][7d]0[7s]%[3up][%I][7o][0p][7a][5s][3d][5f][7d]0[7s]%
[8pj] 786
8 786
8 786
8 78[6e]
[6t]869[6y]0[6u]86[9i][6u]0[5y]758[5r]9[5w]75[8e][5r]9
[4t]647[4e]8[4e]64[7w][4e]8[3r]%36[3w]7[90] 8 [7e]
[6t]869[6y]0[6u]86[9i][6u]0[5y]758[5r]9[5w]75[8e][5r]9
[4t]64[7r][4e]8[3w]73[8q][3w]9[8e]|78[6e]`

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
				"time": speedSung
			});
		}
	});
	return instructions;
}

function asciiConverter(char) {
	return char.charCodeAt();
}

function robloxNoteToRealNote(robloxNote) {
	console.log(robloxNote);
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
	console.log(noteName);
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

var currentPlayingSungSource = null;
var stopSong = false;

function assureSungIs(song) {
    if (currentPlayingSungSource !== song && !stopSong) {
        stopSong = true;
        setTimeout(function() {
            if (currentPlayingSungSource !== song) {
                playSung(song);
            }
            stopSong = false;
        }, ((sungSpeed * 2) + 1000));
    }
}

var sungWaves = ["triangle", "sine", "square", "triangle", "sawtooth"];
var sungSpeed = 200;
var octaveShift = 1;
var weird = 0;

setInterval(function() {
	weird++;
}, 5000);

async function playSung(sung, converter) {
	if(currentPlayingSungSource != null) {
		return;
	}

	currentPlayingSungSource = sung;

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
		if(stopSong) {
			setTimeout(function() {
				stopSong = false;
			}, 1000);
			currentPlayingSungSource = null;
			return;
		}
		
		if (typeof parsed[index] == "undefined") {
			currentPlayingSungSource = null;
			return;
		} else if (parsed[index].type == "wait") {
			setTimeout(playNext, parsed[index].time * (sungSpeed));
		} else if (parsed[index].type == "play") {
			var frequencies = [];
			parsed[index].notes.forEach(function(note) {
				if(note.trim() != "") {
					frequencies.push(converter(note));
					frequencies.push(converter(note, 2));
				} else {
					console.warn("WHY?!?! empty note");
				}
			});
			var oscs = [];
			for(var i = 0; i < frequencies.length; i++) {
				var o = newAudioCtx.createOscillator();
				o.type = sungWaves[i % sungWaves.length];
				o.frequency.value = (frequencies[i] + Math.round((Math.random()*weird)-(weird/2)));
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

// scheduler.interval(function() {
//	song();
// }, 1000);