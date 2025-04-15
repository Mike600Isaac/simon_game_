// $("body").alert("Loading paging................")

// $("body").click(function () {
//    alert("am loading in a meeting.....")
// })
var gamePattern = [];

var buttonColour = ["green", "red", "yellow", "blue",];


console.log(gamePattern);


function pulse() {

    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColour[randNum];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio ("./sounds/" + randomChosenColour + ".mp3");
    audio.play();

}

// function pulse() {
//     $('.blink').fadeIn(300).fadeOut(500);
// }
// setInterval(pulse, 600);