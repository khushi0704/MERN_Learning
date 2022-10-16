var buttonColours = ["red", "blue", "green", "yellow"];
// 5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
var userClickedPattern = [];
// 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
// 7. Use jQuery to select the button with the same id as the randomChosenColour


function newSequence(){
    var randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber)+1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
});
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};
newSequence();
// Use Google to figure out how you can use Javascript to play the sound for the button colour selected in step 1