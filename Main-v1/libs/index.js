lib.way.ready();

assureSungIs(christmas);

var playButton = lib.misc.createButton("Start System of Challenges", function() {
	main();
	playButton.remove();
	lib.audio.playSound(1000, 100);
});

playButton.style = `
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 20%;
height: 40%;
`;

// Main game
var scene = "main";
var playingDeath = false;
var sword = null;
var hasSword = false;
var trainAssets = [];
var demons = [];
var birds  = [];
var swordAttached = false;
var speed = 5;
var swordRotation = 0;
var hellBackground;
var pewpews = [];
var swordInterval = null;
var swordBroken = false;
var canBreathe = false;
var difficulty = 20;
var lastSpoken = (+Date.now());
var swordIsPaimon = false;
var paimonHurts = [
	"Paimon hurts!",
	"Paimon is NOT emergency food!",
	"Ow!",
	"Stop it!",
	"Hey!",
	"Watch it!",
	"Paimon will get you for that!",
	"Paimon hates mean people!",
	"That's not nice!",
	"Let Paimon hurt you already!",
	"Paimon think everyone should rethink violence..."
];
function spawnBirdSwarm(number) {
	for(var i = 0; i < number; i++) {
		var newBird = lib.misc.createImage("bird.png", `width:3%;transition:0.1s;`);
		birds.push(newBird);
		document.body.appendChild(newBird);
		var point = {x: Math.random()*100, y: Math.random()*30};
		lib.css.TransitionlessSetPosition(newBird, `${point.x}%`, `${point.y}%`);
	}
}


const jose_transition = "0.1s";
lib.css.setBackground("desert.jpg");

const jose = lib.misc.createImage("jose.png", `
	transition: ${jose_transition};
	transform: translate(-50%, -50%);
	max-width: 7%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 5;
`);

const temple = lib.misc.createImage("temple.png", `
	transform: translate(-50%, -50%);
	max-width: 20%;
	position: absolute;
	top: 20%;
	left: 50%;
`);

var main = (async function() {
	document.body.appendChild(jose);
	document.body.appendChild(temple);

	var mouse = {
		x: 0,
		y: 0
	}

	window.addEventListener("keydown", async function(event) {
		var position = {
			x: 0,
			y: 0
		};
	
		async function footstep() {
			if(!canBreathe) {
				lib.audio.playSound(((400+((Math.random()*200)-100)) + (300+((Math.random()*200)-100))) / 2, 100, "sine");
			}
			// lib.audio.playMovingSound(400+((Math.random()*200)-100), 300+((Math.random()*200)-100), 0.1, "sine");
		}

		if (event.code == "KeyW" || event.code == "ArrowUp") {
			if(scene != "hell" || event.code == "ArrowUp") {
				position.y--;
				footstep();
			} else {
				lib.audio.playSound(500, 100, "sine");
			}
		} else if (event.code == "KeyS" || event.code == "ArrowDown") {
			if(scene != "hell" || event.code == "ArrowDown") {
				position.y++;
				footstep();
			} else {
				lib.audio.playSound(500, 100, "sine");
			}
		} else if (event.code == "KeyA") {
			position.x--;
			footstep();
		} else if (event.code == "KeyD") {
			position.x++;
			footstep();
		} else if (event.code == "ArrowLeft") {
			swordRotation -= 10;
			// lib.audio.playSound((500 + 300) / 2, 0.1, "sine");
		} else if (event.code == "ArrowRight") {
			swordRotation += 10;
			// lib.audio.playSound((500 + 300) / 2, 0.1, "sine");
		} else if (event.code == "Space") {
			if(canBreathe) {
				lib.audio.playSound(2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX, 400, "sine");
				console.warn(2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX);
				if((2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX) > 1850) {
					canBreathe = false;
					scene = "black";
					lib.css.SetPosition(jose, "50%", "50%");
					temple.remove();
					lib.css.setBackground("pain_floor.png");
					createTimedDialog("Paimon", "I hear birds!", 3000);
					lastSpoken = (+Date.now());
					swordIsPaimon = true;
					
					var companion = lib.misc.createImage("companion.png", `width: 7%;transform:translate(-50%,-50%);transition:1s;`);
					lib.css.SetPosition(companion, "50%", "50%");
					document.body.appendChild(companion);
					sword = companion;
					swordBroken = false;
					
					scheduler.timeout(function() {
						spawnBirdSwarm(80);
					}, 3000);
				}
			}
		}

		console.log(event.code);

		position.x *= speed;
		position.y *= speed;

		lib.css.MovePosition(jose, `${position.x}%`, `${position.y}%`, true);
	});

	window.addEventListener("mousemove", async function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
	}, false);

	var oldTransition = null;
	window.addEventListener("mousedown", async function(event) {
		if(swordBroken) {
			for(var i = 1; i < 10; i++) {
				lib.audio.playMovingSound(3000 * i, 2000 * i, 0.1);
			}
			return;
		}
		if (swordInterval == null) {
			swordAttached = false;

			lib.css.SetPosition(sword, `${mouse.x}px`, `${mouse.y}px`);

			swordInterval = scheduler.interval(async function() {
				lib.css.SetPosition(sword, `${mouse.x}px`, `${mouse.y}px`);
			}, 100);
		}
	});

	window.addEventListener("mouseup", async function() {
		swordAttached = true;
		if(swordInterval != null) {
			scheduler.clearInterval(swordInterval);
			swordInterval = null;
		}
	});

	var touchingTrain = false;
	async function update() {
		scheduler.handle();
		if (scene == "main") {
			assureSungIs(oranina_of_crims);
			if (lib.way.checkObjectsTouch(jose, temple)) {
				console.log("erect and drect touching!!!");
				scene = "temple";
				lib.css.SetPosition(jose, "50%", "80%");
				temple.remove();
				lib.css.setBackground("floor.jpg");

				sword = lib.misc.createImage("sword.png", `width:3%;transition:${jose_transition};`);
				document.body.appendChild(sword);
				lib.css.SetPosition(sword, "50%", "30%");

				for (var i = 0; i < 10; i++) {
					var img = lib.misc.createImage("train.png", `position: absolute;transition:0.1s;`);
					trainAssets.push(img);
					lib.css.SetPosition(img, `${(i*-220)+600}px`, "10%");
					document.body.appendChild(img);
				}
			}
		} else if (scene == "temple") {
			jose.style.transition = jose_transition;
			var lastTrainPartOverScreen = lib.way.getMinsMaxs(trainAssets[trainAssets.length - 1].getBoundingClientRect()).minX > window.innerWidth;
			if (lastTrainPartOverScreen) {
				scene = "hell";
				song = preaction;
				lib.css.setBackground("underworld.jpg");
				window.document.body.style.backdropFilter = "blur(3px)";

				trainAssets.forEach(part => {
					part.remove();
				});

				lib.css.TransitionlessSetPosition(jose, "50%", "50%");
				
				for (var i = 0; i < 10; i++) {
					var img = lib.misc.createImage("train.png", `position: absolute;`);
					trainAssets.push(img);
					lib.css.SetPosition(img, `${(i*-220)+600}px`, "45%");
					document.body.appendChild(img);
				}
				
				hellBackground = lib.misc.createImage("underworld.jpg", `
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: -1;
				`);
				lib.css.TransitionlessSetPosition(hellBackground, "${Math.random()*100}%", "0px");
				document.body.appendChild(hellBackground);
			
				scheduler.timeout(function() {
					if(scene == "hell" && !playingDeath) {
						song = tension;
						scene = "hell_safe";
						lib.audio.playMovingSound(100, 500, 0.5, "triangle");
						lib.audio.playMovingSound(200, 400, 0.5, "triangle");
						hellBackground.remove();
						demons.forEach(demon => {demon.remove();});
						trainAssets.forEach(part => {part.remove();})
						touchingTrain = false;
						scheduler.timeout(function() {
							sword.remove();
							sword = null;
							swordAttached = false;
							lib.audio.playMovingSound(500, 100, 0.1, "sawtooth");
							lib.audio.playMovingSound(400, 200, 0.1, "sawtooth");
							jose.src = "jose_cursed.png";
						}, 1000);
						lib.css.setBackground("underworld2.jpg");
						swordBroken = true;
						var welcome = document.createElement("h1");
						welcome.style.color = "red";
						welcome.style.backgroundColor = "black";
						welcome.innerText = "WELCOME TO [THE UNDERWORLD]. Have a good day!";
						
						createTimedDialog("Satan", "You now have a flute of dispair! Press SPACE to use.", 6000);
						weird += 10;
						
						document.body.appendChild(welcome);
						scheduler.timeout(function() {
							welcome.remove();
							lib.audio.playMovingSound(1000, 2000, 2);
							scheduler.timeout(function() {
								scene = "black";
								jose.src = "jose.png";
								lib.css.setBackground("desert.jpg");
								window.document.body.style.backdropFilter = "";
								canBreathe = true;
							}, 2 * 1000);
						}, 2000);
					}
				// }, 15 * 1000);
				}, 15);

				scheduler.timeout(function() {
					song = action;
					difficulty -= 10;
				}, 5000);
			}

			touchingTrain = false;
			if (typeof trainAssets != "undefined") {
				if (trainAssets.length >= 10) {
					for (var i = 0; i < trainAssets.length; i++) {
						if (lib.way.checkObjectsTouch(trainAssets[i], jose)) {
							touchingTrain = true;
						}
					}

					if (!hasSword) {
						touchingTrain = false;
					}

					for (var i = 0; i < trainAssets.length; i++) {
						if (touchingTrain) {
							lib.css.MovePosition(trainAssets[i], "1%", "0px", false);
						}
					}
				}
			}

			if (touchingTrain) {
				lib.css.MovePosition(jose, "1%", "0px", false);
			}
		} else if (scene == "hell") {
			if (Math.round(Math.random() * difficulty) == (difficulty-1)) {
				var demon = lib.misc.createImage("demon.png", "width:5%;transition:0.2s;");
				document.body.appendChild(demon);
				lib.css.SetPosition(demon, `${Math.random()*100}%`, `${Math.random()*25}%`);
				demons.push(demon);
				lib.css.TransitionlessSetPosition(hellBackground, `${(Math.random()*1)-0.5}%`, `${(Math.random()*1)-0.5}%`);
				// lib.audio.playSound(600, 100, "sine");
			}

			demons.forEach(demon => {
				if (lib.way.checkObjectsTouch(demon, sword)) {
					demon.remove();
					// lib.audio.playSound(250, 0.3, "sine");
				} else {
					var joseLocation = lib.way.getMinsMaxs(jose.getBoundingClientRect());
					var demonLocation = lib.way.getMinsMaxs(demon.getBoundingClientRect());

					var path = lib.misc.pathfind({
						x: (demonLocation.minX + demonLocation.maxX) / 2, 
						y: (demonLocation.minY + demonLocation.maxY) / 2
					}, 
					{
						x: (joseLocation.minX + joseLocation.maxX) / 2, 
						y: (joseLocation.minY + joseLocation.maxY) / 2
					});
					lib.css.MovePosition(demon, `${path.x*0.3}%`, `${path.y*0.3}%`, true);
				}

				if(lib.way.checkObjectsTouch(jose, demon) && !playingDeath) {
					playingDeath = true;
					scheduler.timeout(function() {
						scene = "dead";
					}, 5000);
				}
			});
		} else if (scene == "dead") {
			song = tension;
			document.body.innerHTML = "<div style='color:red;background-color:black;'><h1>Thou art DEAD</h1><p>YOU NEVER GOT TO SEE THE LOLIs</p><div>";
			var sound = lib.audio.playSound(500+(Math.random()*6000), 1000000, "sawtooth");
			sound.setVolume(1);
		} else if (scene == "hell_safe") {
			song = tension;
		} else if (scene == "black") {
			song = nosong;
			
			birds.forEach(bird => {
				if(lib.way.checkObjectsTouch(bird, sword)) {
					bird.remove();
					scheduler.timeout(function() {
						spawnBirdSwarm(1);
					}, 5000);
					
					if((((+Date.now()) - lastSpoken) > 5000) && swordIsPaimon) {
						lastSpoken = (+Date.now());
						var sentence = paimonHurts[Math.round(Math.random() * (paimonHurts.length - 1))];
						createTimedDialog("Paimon", sentence, 3000);
					} 
					
					console.log("child123");
					if(swordIsPaimon) {
						console.log("childbeaner");
						jose.style.width = `calc(${jose.style.width} + 4%)`;
						jose.style.maxWidth = `calc(${jose.style.width} + 4%)`;
						jose.style.height = `calc(${jose.style.width} + 4%)`;
						jose.style.maxHeight = `calc(${jose.style.width} + 4%)`;
						
						if((Math.random() * 10) == 5) {
							createTimedDialog("Paimon", "Huh?! Paimon didn't know Jose was so big!", 3000);
						}
					}	
					console.log("child1234");
				}
				
				// console.warn(bird);
				var joseLocation = lib.way.getMinsMaxs(jose.getBoundingClientRect());
				var birdLocation = lib.way.getMinsMaxs(bird.getBoundingClientRect());

				var path = lib.misc.pathfind({
					x: (birdLocation.minX + birdLocation.maxX) / 2, 
					y: (birdLocation.minY + birdLocation.maxY) / 2
				}, {
					x: (joseLocation.minX + joseLocation.maxX) / 2, 
					y: (joseLocation.minY + joseLocation.maxY) / 2
				});
				
				lib.css.MovePosition(bird, `${(path.x+Math.random())*0.3}%`, `${path.y*0.1}%`, true);

				if(lib.way.checkObjectsTouch(jose, bird) && !playingDeath) {
					playingDeath = true;
					scheduler.timeout(function() {
						scene = "dead";
					}, 5000);
				}
			});
		}

		if (!hasSword && sword !== null) {
			if (lib.way.checkObjectsTouch(jose, sword) && !swordAttached && swordInterval != null) {
				hasSword = true;
				swordAttached = true;
				if(swordInterval != null) {
					scheduler.clearInterval(swordInterval);
					swordInterval = null;
				}
			}
		} else if (sword == null) {
			// console.log("No sword.");
		} else {
			if (swordAttached) {
				lib.css.SetPosition(sword, jose.style.left, jose.style.top);
				sword.style.transform = `translate(-50%, -50%) rotate(${swordRotation}deg)`;
				sword.style.zIndex = "100";
			} else {
				demons.forEach(demon => {
					if (lib.way.checkObjectsTouch(demon, sword)) {
						demon.remove();
						// lib.audio.playSound((300 + 50) / 2, 0.3, "sine");
					}
				});
			}
		}

		requestAnimationFrame(update);
	}

	var trainInterval = scheduler.interval(async function() {
		if(touchingTrain && (lib.audio.soundsPlaying < 10)) {
    			lib.audio.playSound(100 + Math.random() * 100, 100, "sine");
    			lib.audio.playSound(200 + Math.random() * 100, 120, "sawtooth");
		}
	}, 500);
	
	requestAnimationFrame(update);

	/*scheduler.interval(async function() {
    		lib.audio.playMovingSound(100 + (Math.random() * 400), 100 + (Math.random() * 400), 1, "sine")
	}, 1000);*/
});

document.body.appendChild(playButton);