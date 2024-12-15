lib.way.ready();

assureSungIs(christmas);

var playButton = lib.misc.createButton("Start System of Challenges", function () {
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
border-radius: 10px;
background-color: black;
color: white;
border: white 1px solid;
font-size: 50%;
transition: 1s;
`;

playButton.addEventListener("mouseenter", function () {
	playButton.style.fontSize = "100%";
});

playButton.onmousedown = function () {
	playButton.style.backgroundColor = "gray";
}

playButton.onmouseup = function () {
	playButton.style.backgroundColor = "black";
}

playButton.addEventListener("mouseleave", function () {
	playButton.style.fontSize = "50%";
});

var bookofzongorgononilil;
var currentDungeonRoom = 0;
var currentDungeonObjects = [];

function setupDungeon() {
	scene = "dungeon";
	lib.css.TransitionlessSetPosition(jose, "50%", "50%");
	lib.css.setBackground("caveepic.avif");

	if (temple) {
		temple.remove();
	}

	renderRoom();
}

var theseAreWalls = [];
var theseAreWallsPushed = false;

theseAreWalls.push({
	image: lib.misc.createImage("wall.jpg", `
	transform: translate(-50%, -50%);
	width: 100%;
	height: 10%;
	position: absolute;
	top: 10%;
	left: 50%;
`),
	direction: "top"
}); // Top wall

theseAreWalls.push({
	image: lib.misc.createImage("wall.jpg", `
	transform: translate(-50%, -50%);
	width: 100%;
	height: 10%;
	position: absolute;
	bottom: 0%;
	left: 50%;
`),
	direction: "bottom"
}); // Bottom wall

theseAreWalls.push({
	image: lib.misc.createImage("wall.jpg", `
	transform: translate(-50%, -50%);
	width: 10%;
	height: 100%;
	position: absolute;
	top: 50%;
	left: 10%;
`),
	direction: "left"
}); // Left wall

theseAreWalls.push({
	image: lib.misc.createImage("wall.jpg", `
	transform: translate(-50%, -50%);
	width: 10%;
	height: 100%;
	position: absolute;
	top: 50%;
	right: 0%;
`),
	direction: "right"
}); // Right wall

function renderRoom() {
	if (!theseAreWallsPushed) {
		theseAreWalls.forEach(wall => {
			document.body.appendChild(wall.image);
		});
		theseAreWallsPushed = true;
	}
	var room = gameDungeon[currentDungeonRoom];

	if (currentDungeonObjects.length > 0) {
		currentDungeonObjects.forEach(object => {
			object.remove();
		});
	}

	room.objects.forEach(object => {
		// var newObject = lib.misc.createImage(object.type, "");
		var newObject = lib.misc.createImage("error.png", "");
		console.log(object.x, object.y)
		lib.css.TransitionlessSetPosition(newObject, `${object.x}%`, `${object.y}%`);
		currentDungeonObjects.push(newObject);
		document.body.appendChild(newObject);
	});

	console.log(room);
}

function matrix() {
	(function () {
		const characters = Array.from({ length: 96 }, (_, i) => String.fromCharCode(0x30A0 + i));
		const numberOfColumns = Math.floor(window.innerWidth / 20);

		function createCharElement(columnIndex) {
			const char = document.createElement("div");
			char.textContent = characters[Math.floor(Math.random() * characters.length)];
			char.style.position = "absolute";
			char.style.color = "#0f0";
			char.style.fontSize = "20px";
			char.style.opacity = "0.8";
			char.style.left = `${columnIndex * 20}px`;
			char.style.top = "0px";
			document.body.appendChild(char);

			let position = 0;
			const fallSpeed = Math.random() * 3 + 2;

			function fall() {
				position += fallSpeed;
				char.style.top = `${position}px`;

				if (position < window.innerHeight) {
					requestAnimationFrame(fall);
				} else {
					document.body.removeChild(char);
				}
			}

			fall();
		}

		function generateMatrixRain() {
			for (let i = 0; i < numberOfColumns; i++) {
				setInterval(() => createCharElement(i), Math.random() * 100);
			}
		}

		generateMatrixRain();
	})();
}

// Main game
var fpsCounter = document.createElement("p");
fpsCounter.innerText = "... fps";
fpsCounter.style.left = "3%";
fpsCounter.style.bottom = "-15px";
fpsCounter.style.position = "absolute";
fpsCounter.style.transform = "translate(-50%, -50%)";
fpsCounter.style.backgroundColor = "white";
fpsCounter.style.borderRadius = "10px";
fpsCounter.style.padding = "5px";
document.body.appendChild(fpsCounter);

var scene = "main";
var playingDeath = false;
var sword = null;
var hasSword = false;
var trainAssets = [];
var demons = [];
var birds = [];
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
var gameDungeon = createDungeon(50);
var specialRoom = Math.floor(Math.random() * gameDungeon.length);
var bookofzongorgononililTaken = false;
var scrol = lib.misc.createImage("scrollyscrob.jpg", `
left: 10%;
top: 10%;
width: 10%;
height: 10%;
`);

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
	for (var i = 0; i < number; i++) {
		var newBird = lib.misc.createImage("bird.png", `width:3%;transition:0.1s;`);
		birds.push(newBird);
		document.body.appendChild(newBird);
		var point = { x: Math.random() * 100, y: Math.random() * 30 };
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

const cave = lib.misc.createImage("cave3depic.png", `
	transform: translate(-50%, -50%);
	max-width: 20%;
	max-height: 20%;
	position: absolute;
	bottom: 0%;
	left: 50%;
`);
var caveGo = false;

var main = (async function () {
	document.body.appendChild(jose);
	document.body.appendChild(temple);
	document.body.appendChild(cave);
	document.body.appendChild(scrol);

	var mouse = {
		x: 0,
		y: 0
	}

	window.addEventListener("keydown", async function (event) {
		var position = {
			x: 0,
			y: 0
		};

		async function footstep() {
			if (!canBreathe) {
				lib.audio.playSound(((400 + ((Math.random() * 200) - 100)) + (300 + ((Math.random() * 200) - 100))) / 2, 100, "sine");
			}
			// lib.audio.playMovingSound(400+((Math.random()*200)-100), 300+((Math.random()*200)-100), 0.1, "sine");
		}

		if (event.code == "KeyW" || event.code == "ArrowUp") {
			if (scene != "hell" || event.code == "ArrowUp") {
				position.y--;
				footstep();
			} else {
				lib.audio.playSound(500, 100, "sine");
			}
		} else if (event.code == "KeyS" || event.code == "ArrowDown") {
			if (scene != "hell" || event.code == "ArrowDown") {
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
			if (canBreathe) {
				lib.audio.playSound(2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX, 400, "sine");
				console.warn(2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX);
				if ((2000 - lib.way.getMinsMaxs(jose.getBoundingClientRect()).minX) > 1850) {
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

					scheduler.timeout(function () {
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

	window.addEventListener("mousemove", async function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
	}, false);

	var oldTransition = null;
	window.addEventListener("mousedown", async function (event) {
		if (swordBroken) {
			for (var i = 1; i < 10; i++) {
				lib.audio.playMovingSound(3000 * i, 2000 * i, 0.1);
			}
			return;
		}
		if (swordInterval == null) {
			swordAttached = false;

			lib.css.SetPosition(sword, `${mouse.x}px`, `${mouse.y}px`);

			swordInterval = scheduler.interval(async function () {
				lib.css.SetPosition(sword, `${mouse.x}px`, `${mouse.y}px`);
			}, 100);
		}
	});

	window.addEventListener("mouseup", async function () {
		swordAttached = true;
		if (swordInterval != null) {
			scheduler.clearInterval(swordInterval);
			swordInterval = null;
		}
	});

	var touchingTrain = false;
	async function update() {
		scheduler.handle();
		lib.way.frame();

		fpsCounter.innerText = `${Math.round(lib.way.fps())} fps`;

		if (scene == "main") {
			if (lib.way.checkObjectsTouch(jose, scrol)) {
				lib.audio.playSound(1000, 3000, "sawtooth");
				scrol.remove();
				lib.misc.storyGo(`Jose Ying Ying Ling Ling Gary Anton the third was a boy born in Hawaii that loved slaying things like his childhood snail, he really loved slaying things. He once was in his grandpa's attic and found an old journal covered in dust and a little bit of poop because his grandpa liked to poop on things such as books and dishes, along with his wife, Rachael Hard Man Wood Anton. As he reads the journal he realized his whole life was a mistake and he should cease to exist. The journal leads to a secret man cave with a portal leading to The Universe of Ling Bing, China. Once he enters the portal to Ling Bing, China, he finds himself in a deserted desert next to a pyramid and a cave that is for some reason made of normal stone instead of sandstone. He enters the pyramid, grabs a longsword, takes a train and realizes he has entered Hell, he thinks he has died but sees a hoard of his sisters sleep paralysis demons hunting him with big long pitchforks. He then proceeds to slap them with his longsword and teleports back to the desert where he then finds an anime girl and a bunch of birds. The story is not yet decided so I have no clue what happens after that.`);
			}

			assureSungIs(oranina_of_crims);
			if (lib.way.checkObjectsTouch(jose, temple)) {
				scrol.remove();
				caveGo = false;
				cave.remove();
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
					lib.css.SetPosition(img, `${(i * -220) + 600}px`, "10%");
					document.body.appendChild(img);
				}
			} else if (lib.way.checkObjectsTouch(cave, jose) && !caveGo) {
				cave.remove();
				scrol.remove();
				setupDungeon();
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
					lib.css.SetPosition(img, `${(i * -220) + 600}px`, "45%");
					document.body.appendChild(img);
				}

				hellBackground = lib.misc.createImage("underworld.jpg", `
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: -1;
				`);
				lib.css.TransitionlessSetPosition(hellBackground, `${Math.random() * 100}%`, "0px");
				document.body.appendChild(hellBackground);

				scheduler.timeout(function () {
					if (scene == "hell" && !playingDeath) {
						song = tension;
						scene = "hell_safe";
						lib.audio.playMovingSound(100, 500, 0.5, "triangle");
						lib.audio.playMovingSound(200, 400, 0.5, "triangle");
						hellBackground.remove();
						demons.forEach(demon => { demon.remove(); });
						trainAssets.forEach(part => { part.remove(); })
						touchingTrain = false;
						scheduler.timeout(function () {
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
						scheduler.timeout(function () {
							welcome.remove();
							lib.audio.playMovingSound(1000, 2000, 2);
							scheduler.timeout(function () {
								scene = "black";
								jose.src = "jose.png";
								lib.css.setBackground("desert.jpg");
								window.document.body.style.backdropFilter = "";
								canBreathe = true;
							}, 2 * 1000);
						}, 2000);
					}
				}, 15 * 1000);
				// }, 15);

				scheduler.timeout(function () {
					song = action;
					assureSungIs("");
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
			if (Math.round(Math.random() * difficulty) == (difficulty - 1)) {
				var demon = lib.misc.createImage("demon.png", "width:5%;transition:0.2s;");
				document.body.appendChild(demon);
				lib.css.SetPosition(demon, `${Math.random() * 100}%`, `${Math.random() * 25}%`);
				demons.push(demon);
				lib.css.TransitionlessSetPosition(hellBackground, `${(Math.random() * 1) - 0.5}%`, `${(Math.random() * 1) - 0.5}%`);
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

					lib.css.MovePosition(demon, `${(path.x * 30) / lib.way.fps()}%`, `${(path.y * 30) / lib.way.fps()}%`, true);
				}

				if (lib.way.checkObjectsTouch(jose, demon) && !playingDeath) {
					playingDeath = true;
					scheduler.timeout(function () {
						scene = "dead";
					}, 5000);
				}
			});
		} else if (scene == "dead") {
			song = tension;
			document.body.innerHTML = "<div style='color:red;background-color:black;'><h1>Thou art DEAD</h1><p>YOU NEVER GOT TO SEE THE beans</p><div>";
			var sound = lib.audio.playSound(500 + (Math.random() * 6000), 1000000, "sawtooth");
			sound.setVolume(1);
		} else if (scene == "hell_safe") {
			song = tension;
		} else if (scene == "black") {
			song = nosong;

			birds.forEach(bird => {
				if (lib.way.checkObjectsTouch(bird, sword)) {
					bird.remove();
					scheduler.timeout(function () {
						spawnBirdSwarm(1);
					}, 5000);

					if ((((+Date.now()) - lastSpoken) > 5000) && swordIsPaimon) {
						lastSpoken = (+Date.now());
						var sentence = paimonHurts[Math.round(Math.random() * (paimonHurts.length - 1))];
						createTimedDialog("Paimon", sentence, 3000);
					}

					console.log("child123");
					if (swordIsPaimon) {
						console.log("childbeaner");
						jose.style.width = `calc(${jose.style.width} + 4%)`;
						jose.style.maxWidth = `calc(${jose.style.width} + 4%)`;
						jose.style.height = `calc(${jose.style.width} + 4%)`;
						jose.style.maxHeight = `calc(${jose.style.width} + 4%)`;

						if ((Math.random() * 10) == 5) {
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

				lib.css.MovePosition(bird, `${((path.x + Math.random()) * 30) / lib.way.fps()}%`, `${(path.y * (30)) / lib.way.fps()}%`, true);

				if (lib.way.checkObjectsTouch(jose, bird) && !playingDeath) {
					playingDeath = true;
					scheduler.timeout(function () {
						scene = "dead";
					}, 5000);
				}
			});
		} else if (scene == "dungeon") {
			if (!bookofzongorgononililTaken) {
				assureSungIs(cave_story);
			} else {
				assureSungIs("");
				song = action;
			}

			if (currentDungeonRoom == specialRoom) {
				if (lib.way.checkObjectsTouch(bookofzongorgononilil, jose) && !bookofzongorgononililTaken) {
					lib.audio.playMovingSound(1000, 2000, 1000, "sine");
					bookofzongorgononililTaken = true;
					lib.css.setBackground("underworld2.jpg");
					lib.css.SetPosition(jose, "50%", "50%");
					bookofzongorgononilil.remove();
				}
			} else {
				for (var i = 0; i < theseAreWalls.length; i++) {
					var currentItem = theseAreWalls[i];
					if (lib.way.checkObjectsTouch(currentItem.image, jose)) {
						currentDungeonRoom = gameDungeon[currentDungeonRoom].links[currentItem.direction];
						lib.css.TransitionlessSetPosition(jose, "50%", "50%");

						if (currentDungeonRoom == specialRoom) {
							theseAreWalls.forEach(wall => {
								wall.image.remove();
							});

							bookofzongorgononilil = lib.misc.createImage("jdkl.png", "");
							document.body.appendChild(bookofzongorgononilil);
						} else {
							renderRoom();
						}

						break;
					}
				}
			}
		}

		if (!hasSword && sword !== null) {
			if (lib.way.checkObjectsTouch(jose, sword) && !swordAttached && swordInterval != null) {
				hasSword = true;
				swordAttached = true;
				if (swordInterval != null) {
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

	var trainInterval = scheduler.interval(async function () {
		if (touchingTrain && (lib.audio.soundsPlaying < 10)) {
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