var intervalID = window.setInterval(() => {
	var max = 100;
	var rand = getRandomInt(max);
	if (rand === 1) {
		surprise();
	}
	// console.log(rand);
}, 2000);

function surprise() {
	var imgNum=3;//いくつの画像ファイルを読み込むか
	var soundNum=5;//いくつの音声ファイルを読み込むか
	var url = "./img/img" + getRandomInt(imgNum-1) + ".png";
	// console.log(url);
	var sound = new Audio("./sounds/sound" + getRandomInt(soundNum-1) + ".wav");
	var windowFeatures = "menubar=no,left=0,top=0,width=" + window.screen.width + ",height=" + window.screen.height + ",location=no,resizable=no,scrollbars=no,status=yes";
	sound.play();
	window.open(url, "imgswindow", windowFeatures);
	window.setTimeout(() => {
		alert("ﾈッとサーやﾌｨん耶ｍeﾛろ");
	},5000);
}

function getRandomInt(max) {
	return Math.round(Math.random() * max);
}
//音　びたちー素材館
//
