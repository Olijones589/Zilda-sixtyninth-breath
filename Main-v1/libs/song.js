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
    for(var i = 0; i < 7; i++) {
        lib.audio.playMovingSound((i*100)+n, (i*100)+n, len, "sawtooth");
    }
}

function instrument_bass(hz, len) {
    for(var i = 0; i < 10; i++) {
        lib.audio.playSound(hz + (i * (i % 2)), len, "sine");
        lib.audio.playSound(hz + (i * (i % 2) + 200), len, "sine");
        lib.audio.playSound(hz + (i * (i % 2) + 300), len, "sine");
    }
}

function instrument_beat(hz, len) {
    if(hz < 201) {
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
    if(height > 100) {
        height -= 50;
    } else if(100 > height) {
        height += 10;
    }
    lib.audio.playMovingSound(200, 200, 1000, "triangle");
    lib.audio.playMovingSound(300, 200, 100, "sawtooth");
    scheduler.timeout(function() {
        lib.audio.playMovingSound(300, 200, 100, "sawtooth");
        lib.audio.playMovingSound(400, 400, 500, "sine");
        if(Math.random() > 0.5) {
            scheduler.timeout(function() {
                lib.audio.playMovingSound(500, 800, 300, "sine");
                if(Math.random() > 0.5) {
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
    if(height > 100) {
        height -= 50;
    } else if(100 > height) {
        height += 10;
    }
    scheduler.timeout(function() {
        if(Math.random() > 0.5) {
            scheduler.timeout(function() {
                lib.audio.playMovingSound(500, 800, 300, "sine");
                if(Math.random() > 0.5) {
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