var content = [{
        question: "When did Coco get adopted?",
        options: ["Jan 10, 2018", "Jan 13, 2018", "February 3, 2018", "Jan 23, 2018"],
        answer: 1,
        IsDisplayed: true

    },
    {
        question: "What's the name of Coco's rescue center?",
        options: ["SPCA", "Wonder Dog Rescue", "Rocket Dog Rescue", "Family Dog Rescue"],
        answer: 3,
        IsDisplayed: true
    },
    {
        question: "Which trick does Coco hate?",
        options: ["turn", "snoot", "roll over", "sleep"],
        answer: 2,
        IsDisplayed: true
    },
    {
        question: "How many dog beds does Coco have?",
        options: ["5", "4", "3", "6"],
        answer: 0,
        IsDisplayed: true
    },
    {
        question: "Where does Coco like to swim?",
        options: ["In a pond with duckies", "At the sea", "In a lake near home", "Nowhere!She hates water!"],
        answer: 3,
        IsDisplayed: true
    }
];

var correct;
var wrong;
var questionPrinted;
var time = 10;
var isCalled = true;



function startTrivia() {
    //Scores
    correct = 0;
    $("#correct").html("Correct:" + correct);
    wrong = 0;
    $("#wrong").html("Wrong:" + wrong);
    questionRendered();

    time = 10;
    $("#time").html(time + " second(s) left")

}
startTrivia();


function timer() {
    time = 10;

    if (isCalled) {
        setInterval(count, 1000);
        isCalled = false;
    }

    function count() {
        time--;
        $("#time").html(time + " second(s) left");
    }
}


function questionRendered() {
    timer();

    var unusedQuestions = content.filter(function (pieceOfContent) {
        return pieceOfContent.IsDisplayed;
    });
    var randomNumber = Math.floor(Math.random() * unusedQuestions.length);

    //print question
    questionPrinted = unusedQuestions[randomNumber].question;
    $("#question").html(questionPrinted);

    //print options
    for (var i = 0; i < unusedQuestions[randomNumber].options.length; i++) {
        var b = $("<button>");
        b.addClass("question-button");
        b.attr("data-let", i);
        b.text(unusedQuestions[randomNumber].options[i]);
        $("#options").append(b);
    }


    $(".question-button").on("click", function () {
        if ($(this).data("let") === unusedQuestions[randomNumber].answer) {
            correct++;
            $("#correct").html("Correct:" + correct);
        } else {
            wrong++;
            $("#wrong").html("Wrong:" + wrong);
        }
        
        unusedQuestions[randomNumber].IsDisplayed = false;
        $("#options").empty();

        if (correct === 5 && wrong === 0) {
            alert("congrats! you know Coco so well!");
            
        } else if (correct === 4 && wrong === 1) {
            alert("You are almost there!")
            
        } else if (correct === 3 && wrong === 2) {
            alert("You are on your way to know Coco more!")
            
        } else if (correct === 2 && wrong === 3) {
            alert("Cmon you are better than that!")
            
        } else if (correct === 1 && wrong === 4) {
            alert("I guess you only met her once!")
            
        } else if (correct === 0 && wrong === 5) {
            alert("Who are you?");
        } else {
            questionRendered();
        }
    })


}
