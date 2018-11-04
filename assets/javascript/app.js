
// create global varialbles
var remainingTime = 60;
var intervalId;
var countOfCorrectAnswers;
var countOfIncorrectAnswers;
var countOfUnanswered;
var resultArray = [];

var trivia = [

    { question: "What is the diameter of Earth?", choices: ["8,000 kilometers", "8,000 miles", "12,000 miles"], value: [0, 1, 0] },
    { question: "Where would you find the world's most ancient forest?", choices: ["North America", "Asia", "Europe", "Australia"], value: [0, 0, 0, 1] },
    { question: "Name the world's biggest island.", choices: ["Madagascar", "Greenland", "Great Britain", "Victoria"], value: [0, 1, 0, 0] },
    { question: "What is the world's longest river?", choices: ["Amazon", "Nile", "Yangtze", "Yellow River"], value: [1, 0, 0, 0] },
    { question: "How many countries are in the world today?", choices: ["193", "194", "195", "196"], value: [0, 0, 1, 0] },
];

function reset() {

    for (var i = 0; i < trivia.length; i++) {
        var questionDiv = $("<form>").attr("id", "question" + i);
        var QQ = $("<h4>").text(trivia[i].question);
        questionDiv.append(QQ);
        $(".quiz").append(questionDiv);

        for (var j = 0; j < trivia[i].choices.length; j++) {
            var choicesDiv1 = $("<input>" + trivia[i].choices[j] + " " + "</input>").attr("name", "group" + i).attr("type", "radio").attr("value", trivia[i].value[j]);
            questionDiv.append(choicesDiv1);
        }
        questionDiv.append("<br><br>")
    };

    clearInterval(intervalId);
    countOfCorrectAnswers = 0;
    countOfIncorrectAnswers = 0;
    countOfUnanswered = 0;
    resultArray = [];
    $(".quiz").attr("style", "display: none");
    $("#doneButton").attr("style", "visibility: hidden");
    $("#timeRemaining").attr("style", "visibility: hidden");
}

function start() {
    $("#startButton").on("click", function () {
        $("#startButton").attr("style", "visibility: hidden");
        $(".quiz").attr("style", "visibility: visible");
        $("#doneButton").attr("style", "visibility: visible");
        $("#timeRemaining").attr("style", "visibility: visible");

        intervalId = setInterval(decrement, 1 * 1000);

        $("#doneButton").on("click", function () {
            clearInterval(intervalId);
            result();
        });

        function decrement() {
            remainingTime--;
            $("#timeRemaining").text("Time Remaining: " + remainingTime)
            if (remainingTime === 0) {
                clearInterval(intervalId);
                result();
            };
        };
    });
};

function result() {
    $(".quiz").attr("style", "display: none");
    $("#doneButton").attr("style", "visibility: hidden");
    $("#startButton").attr("style", "visibility: hidden");

    var valueQuestion0 = $("input[name='group0']:checked").val();
    var valueQuestion1 = $("input[name='group1']:checked").val();
    var valueQuestion2 = $("input[name='group2']:checked").val();
    var valueQuestion3 = $("input[name='group3']:checked").val();
    var valueQuestion4 = $("input[name='group4']:checked").val();
    resultArray.push(valueQuestion0, valueQuestion1, valueQuestion2, valueQuestion3, valueQuestion4);

    for (var i = 0; i < resultArray.length; i++) {
        if (resultArray[i] === "1") {
            countOfCorrectAnswers++;
        }
        else if (resultArray[i] === "0") {
            countOfIncorrectAnswers++;
        }
        else if (resultArray[i] === undefined) {
            countOfUnanswered++;
        }
    };

    var resultTable = $("<h4>All Done!</h4>").addClass("results");
    $("#timeRemaining").append(resultTable);
    $(".results").prepend("<br><br>").append("<br><br>");

    var correctAnswersDiv = $("<h5>Correct Answers: " + countOfCorrectAnswers + "</h5>");
    resultTable.append(correctAnswersDiv);

    var incorrectAnswersDiv = $("<h5>Incorrect Answers: " + countOfIncorrectAnswers + "</h5>");
    resultTable.append(incorrectAnswersDiv);

    var unansweredDiv = $("<h5>Unanswered: " + countOfUnanswered + "</h5>");
    resultTable.append(unansweredDiv);

    console.log(resultArray);
    console.log("Correct: " + countOfCorrectAnswers);
    console.log("Incorrect: " + countOfIncorrectAnswers);
    console.log("Unanswered: " + countOfUnanswered);
}

reset();
start();