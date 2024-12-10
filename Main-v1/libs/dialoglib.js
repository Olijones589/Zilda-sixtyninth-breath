function createDialog(name, text) {
	lib.audio.playSound(1000, 100, "sine");

	var dialog = document.createElement("div");
	dialog.style = `
	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, -50%);
	background-color: #323232;
	width: 95%;
	height: max-content;
	border-radius: 10px;
	transition: 0.1s;
	border: black 2px solid;
	`;
	dialog.innerHTML = `
	<h5 style='color:white;position:absolute;left:10px;10px;'>${name}</h5><center><p style='color:white;'>${text}</p></center>
	`;
	document.body.appendChild(dialog);
	return dialog;
}

function createTimedDialog(name, text, time) {
	var dialog = createDialog(name, text);
	var times = 0;
	var active = true;
	
	scheduler.timeout(function() {
		var interval = scheduler.interval(function() {
			times += 10;
			dialog.style.opacity = 1 / times;
			if(!active) {
				scheduler.clearInterval(interval);
			}
		}, 10);

		scheduler.timeout(function() {
			active = false;
			dialog.remove();
		}, 100);
	}, time-1000);
}