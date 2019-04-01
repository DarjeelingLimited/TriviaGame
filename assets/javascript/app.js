var questions = [{
    question: "What is the name of Ross' pet monkey?",
    options: ['Curtis', 'Martin', 'Marcel', 'Simon'],
    answer: 'Marcel',
}, {
    question: "What designer does Rachel work for?",
    options: ['Ralph Lauren', 'Chanel', 'Tommy Hilfiger', 'Dior'],
    answer: 'Ralph Lauren',
},
{
    question: "What is Phoebe's twin sister's name?",
    options: ['Piper', 'Stella', 'Diana', 'Ursula'],
    answer: 'Ursula',
},
{
    question: "What is the name  of Joey's character on 'The Day of Our Lives'?",
    options: ['Lt. Duke Rodgers', 'Dr. Drake Ramoray', 'Dr. Derek Shepphard', 'Officer Donnie Darko'],
    answer: 'Dr. Drake Ramoray',
},
{
    question: "What holiday does Chandler hate?",
    options: ['Thanksgiving', 'Christmas', 'Halloween', 'Easter'],
    answer: 'Thanksgiving',
},
{
    question: "What job does Monica have?",
    options: ['Professor', 'Chef', 'Actress', 'Masseuse'],
    answer: 'Chef'
}
]

//update the elements in the DOM for the results
var results = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
}


$(document).ready(function () {

    $("#done").hide();

    function askQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#questions").append("<h2>" + questions[i].question + "</h2>");
            // console.log(i)
            // console.log(questions[i].question)
            for (var j = 0; j < questions[i].options.length; j++) {
                $("#questions").append("<div id='buttonAnswer'>" + "<input type='radio' name='question-" + i + "' value='" + questions[i].options[j] + "'>" + questions[i].options[j]+ "</div>");
                // console.log(j)
            
            }
        }
    };

    // going thru each question from the questions object and if the array value matches, increase/decrease score


    function checkAnswers() {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].answer) {
                results.correct++;
            } else {
                results.incorrect++;
            }
        })
        $.each($("input[name='question-0']:not(:checked)"), function () {
            if ($(this).val() == questions[0].answer) {
                results.unanswered++;
            } 
        })
        $.each($("input[name='question-1']:not(:checked)"), function () {
            if ($(this).val() == questions[1].answer) {
                results.unanswered++;
            } 
        })
        $.each($("input[name='question-2']:not(:checked)"), function () {
            if ($(this).val() == questions[2].answer) {
                results.unanswered++;
            } 
        })
        $.each($("input[name='question-3']:not(:checked)"), function () {
            if ($(this).val() == questions[3].answer) {
                results.unanswered++;
            } 
        })
        $.each($("input[name='question-4']:not(:checked)"), function () {
            if ($(this).val() == questions[4].answer) {
                results.unanswered++;
            } 
        })
        $.each($("input[name='question-5']:not(:checked)"), function () {
            if ($(this).val() == questions[5].answer) {
                results.unanswered++;
            } 
        })
    };



    // when you click the start button
    $("#start").on('click', function () {
        var timer = 45;
        askQuestions();
        setInterval(function () {
            timer--;
            if (timer >= 0) {
                span = document.getElementById("timer");
                span.innerHTML = ("Your time remaining: " + timer);
                // console.log(timer);
                document.getElementById("start").style.display = "none"; // 
                $("#done").show();
                console.log(timer)

            }

            if (timer === 0) {
            alert("Time's up!");
            checkAnswers();
            $("#questions").hide();
            $("#results").append("<p>" + "Correct Answers: " + results.correct + "</p>");
            $("#results").append("<p>" + "Incorrect Answers: " + results.incorrect + "</p>");
            $("#results").append("<p>" + "Unanswered Answers: " + results.unanswered + "</p>");
            console.log(results)
            $("#done").hide();
        }
    }, 1000);
});

}); 