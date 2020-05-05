var content = [{
        question: "When did Coco get adopted?",
        options: ["Jan 10, 2018", "Jan 13, 2018", "February 3, 2018", "Jan 23, 2018"],
        answer: options[1],
        IsDisplayed: true


    },
    {
        question: "What's the name of Coco's rescue center?",
        options: ["SPCA", "Wonder Dog Rescue", "Rocket Dog Rescue", "Family Dog Rescue"],
        answer: options[3],
        IsDisplayed: true
    },
    {
        question: "Which trick does Coco hate?",
        options: ["turn", "snoot", "roll over", "sleep"],
        answer: options[2],
        IsDisplayed: true
    },
    {
        question: "How many dog beds does Coco have?",
        options: ["5", "4", "3", "6"],
        answer: options[0],
        IsDisplayed: true
    },
    {
        question: "Where does Coco like to swim?",
        options: ["In a pond with duckies", "At the sea", "In a lake near home", "Nowhere!She hates water!"],
        answer: options[3],
        IsDisplayed: true
    }
];

var correct;
var wrong;
var firstQuestion;
var questionUsed;


function startTrivia() {
    //Scores
    correct = 0;
    $("#correct").html("Correct:" + correct);
    wrong = 0;
    $("#wrong").html("Wrong:" + wrong);

    randomNumber = Math.floor(Math.random() * content.length);

    //First Question
    if (content[randomNumber].IsDisplayed === true) {
        firstQuestion = content[randomNumber].question;
        content[randomNumber].question = false;
    }
    $("#question").html(firstQuestion);

    //display options
    for (var i = 0; i < content.length - 1; i++) {
        var b = $("<button>");
        b.addClass("question-button");
        b.text(content[randomNumber].options[i]);
        $("#options").append(b);
    }

}

startTrivia();



$(".question-button").on("click", function() {
    

    
})