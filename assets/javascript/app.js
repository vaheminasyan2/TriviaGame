// create varialbles
var remainingTime;
var gameRunning = false;
var intervalId;

//

document.getElementById("questions").style.visibility = "hidden";

document.getElementById("startButton").onclick = function () {
    document.getElementById("startButton").style.display = "none"
    document.getElementById("questions").style.visibility = "visible";
}
