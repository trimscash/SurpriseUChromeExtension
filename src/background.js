var intervalID = window.setInterval(() => {
	var max = 100;
	var rand = getRandomInt(max);
	if (rand === 1) {
		surprise();
	}
	// console.log(rand);
}, 2000);

function surprise() {
	var imgNum=2;//0オリジン　　　いくつの画像ファイルを読み込むか
	var soundNum=4;//0オリジンでっせ　　いくつの音声ファイルを読み込むか
	var url = "./img/img" + getRandomInt(imgNum) + ".png";
	// console.log(url);
	var sound = new Audio("./sounds/sound" + getRandomInt(soundNum) + ".wav");
	var windowFeatures = "menubar=no,left=0,top=0,width=" + window.screen.width + ",height=" + window.screen.height + ",location=no,resizable=no,scrollbars=no,status=yes";
	sound.play();
	alert("ﾈッとサーやﾌｨん耶ｍeﾛろ");
	window.open(url, "imgswindow", windowFeatures);
}

function getRandomInt(max) {
	return Math.round(Math.random() * max);
}
//音　びたちー素材館
//
