var bagua = document.getElementById("bagua");
var xuanzhuan = document.getElementById("xuanzhuan");
var pingyiandright = document.getElementById("pingyi-right");
var pingyiandleft = document.getElementById("pingyi-left");

let start, previousTimeStamp;
let done = false;
let ida;

function step(timestamp) {
	currRotate = bagua.style.transform;
	console.log("[ currRotate ] >", currRotate);
	currRotate = currRotate.replace(/rotate\(/, "").replace(/deg\)/, "");
	console.log("[ tim ] >", timestamp, currRotate);

	if (currRotate > 360) {
		currRotate = 0;
	}
	bagua.style.transform = `rotate(${Number(currRotate) + 0.5}deg)`;
	if (done) {
		ids = window.requestAnimationFrame(step);
	}
}
xuanzhuan.onclick = function () {
	done = !done;
	window.requestAnimationFrame(step);
};

pingyiandright.onclick = function () {
	bagua.style.left = Number(bagua.style.left.replace(/px/, "")) + 100 + "px";
};

pingyiandleft.onclick = function () {
	bagua.style.left = Number(bagua.style.left.replace(/px/, "")) - 100 + "px";
};
