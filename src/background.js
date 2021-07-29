var intervalID = window.setInterval(() => {
	let max = 100;
	let rand = getRandomInt(max);
	if (rand === 1) {
		surprise();
	}
	// console.log(rand);
}, 2000);

function surprise() {
	var url = "./img/img" + getRandomInt(2) + ".png"
	// console.log(url);
	var sound = new Audio("./sounds/sound" + getRandomInt(4) + ".wav");
	var windowFeatures = "menubar=no,left=0,top=0,width=" + window.screen.width + ",height=" + window.screen.height + ",location=no,resizable=no,scrollbars=no,status=yes";
	sound.play();
	alert("ﾈッとサーやﾌｨん耶ｍeﾛろ")
	window.open(url, "imgswindow", windowFeatures);
}

function getRandomInt(max) {
	return Math.round(Math.random() * max);
}
//音　びたちー素材館
//