// $("body").alert("Loading paging................")

// $("body").click(function () {
//    alert("am loading in a meeting.....")
// })
var gamePattern = [];
var buttonColour = ["green", "red", "yellow", "blue",];
console.log(gamePattern);

var level = 0;
var started = false;


function nextSequence() {

    level++;

    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColour[randNum];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // var audio = new Audio ("sounds/" + randomChosenColour + ".mp3");
    // audio.play();

    playSound(randomChosenColour);
    animatePress(randomChosenColour);

}
var userClickedPattern =[];

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenColour);
})

function playSound(name) {
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    setTimeout(
        function () {
            $("#" + currentColour).removeClass("pressed")
        }, 100
    );
}

$(document).keypress(function () {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(check) {
    if(check === ) {
        console.log("success!");
    } else {
        console.log("wrong!");
    }
}


