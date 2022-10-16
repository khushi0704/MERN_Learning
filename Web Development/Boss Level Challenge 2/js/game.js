var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title2").text("Level "+level);
        newSequence();
        started=true;
    }
});
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      //14. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //15. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
            newSequence();
          }, 1000);

        }

      } else {

        // console.log("wrong");

        //16. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

        //17. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        //18. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title2").text("Game Over, Press Any Keyboard Key to Restart");

        //19. Call startOver() if the user gets the sequence wrong.
        startOver();

      }

}
function newSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title2").text("Level "+level);
    var randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber)+1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
function animatePress(currentColor){
        $("#"+currentColor).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColor).removeClass("pressed");
          }, 100);
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};



// Use Google to figure out how you can use Javascript to play the sound for the button colour selected in step 1
function startOver() {
  //36. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}