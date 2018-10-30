// create global varialbles
var remainingTime = 30;
var gameRunning = false;
var intervalId;

// hide questions page
document.getElementById("questions").style.visibility = "hidden";

// start button 
document.getElementById("startButton").onclick = function x() {
    document.getElementById("startButton").style.display = "none"
    document.getElementById("questions").style.visibility = "visible";

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1 * 1000)

    function decrement() {
        remainingTime--;
        $("#timeRemaining").text("Remaining time: " + remainingTime)
        if (remainingTime === 0) {
            stop();
            result();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function result() {
        document.getElementById("questions").style.display = "none";
        document.getElementById("startButton").style.display = "none";

        var resultTable =$("<div>");
        $(".gameDisplay").append(resultTable);
        resultTable.addClass("results");
        resultTable.append("<h4>All Done!</h4>");

        var correctAnswers =$("<h6>Correct Answers: </h6>")
        resultTable.append(correctAnswers)
        correctAnswers.attr("id","correctAnswers")

        var incorrectAnswers =$("<h6>Incorrect Answers: </h6>");
        resultTable.append(incorrectAnswers);
        incorrectAnswers.attr("id","incorrectAnswers");
        
        var Unanswered = $("<h6>Unanswered: </h6>");
        resultTable.append(Unanswered);
        Unanswered.attr("id", "unaswered")

        resultTable.append("<br>")
    }
    //document.getElementById("doneButton").onclick = result();
}