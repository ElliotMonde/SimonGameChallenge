var gamePattern = []; //Correct level sequence array
var userClickedPattern = [];//User click sequence array
var userChosenColor = String;
var buttonColors = ["green","red","yellow","blue"]; //Colors array for random generator to reference and assign
document.addEventListener("keydown", function(){
  if (gamePattern.length==0){
  nextSequence()
  console.log(gamePattern);
  $("h1").text("Score: " + (gamePattern.length-1))}
})


function animatePress(color){
  $("." + color).addClass("pressed").addClass("white");
  setTimeout(function (){$("." + color).removeClass("pressed").removeClass("white");},100);  
}


function nextSequence(){ //function to add color to level sequence array + flash
  var randomNumber = Math.round(3*Math.random());
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  new Audio("sounds/" + randomChosenColor + ".mp3").play();
    setTimeout(function (){
      animatePress(randomChosenColor);
      },1000);
  $("h1").text("Score: " + (gamePattern.length-1));
}


function checker(){
  
  for (var checkerCount = 0 ; checkerCount<gamePattern.length; checkerCount++){
    if (gamePattern[checkerCount] != userClickedPattern[checkerCount]){
      console.log(checkerCount + "-th object does not match");
      $("h1").text("Game Over!");
      $("body").toggleClass("game-over");
      setTimeout(function (){$("body").toggleClass("game-over");}, 100);
      gamePattern.length=0;
      userClickedPattern.length=0;
      userChosenColor.length=0;
      break;
    }
    else if (gamePattern[checkerCount] == userChosenColor){
      if (gamePattern.length==userClickedPattern.length) {
        setTimeout(nextSequence(),100);
        userClickedPattern.length=0;
        console.log("userClickedPattern: " + userClickedPattern + ", removedAll in checker()" + "\ngamePattern: " + gamePattern); 
      break;  
      }
      
      else {
        console.log("gamePattern: " + gamePattern + "\n" + "userClickedPattern: " + userClickedPattern);
      break;
      }  
       
    }
  }
}

for (var i = 0; i<document.getElementsByClassName("btn").length; i++){
  document.getElementsByClassName("btn")[i].addEventListener("click",function (e){
    switch(e.target.id){
        
      case "green":
        userClickedPattern.push(e.target.id);
        userChosenColor=e.target.id;
        
        //animate & sound
        new Audio("sounds/" + e.target.id + ".mp3").play();
        animatePress(e.target.id);  
        console.log(e.target.id);
        //check
        checker();
      break;
      case "red":
        userClickedPattern.push(e.target.id);
        userChosenColor=e.target.id;
        
        new Audio("sounds/" + e.target.id + ".mp3").play();
        animatePress(e.target.id); 
        console.log(e.target.id);
        checker();
      break;
      case "yellow":
        userClickedPattern.push(e.target.id);
        userChosenColor=e.target.id;
        
        new Audio("sounds/" + e.target.id + ".mp3").play();
        animatePress(e.target.id);  
        console.log(e.target.id);
        checker();
      break;
      case "blue":
        userClickedPattern.push(e.target.id);
        userChosenColor=e.target.id;
        
        new Audio("sounds/" + e.target.id + ".mp3").play();
        animatePress(e.target.id);  
        console.log(e.target.id);
        checker();
      break;
      default: console.log("gamePattern: " + gamePattern + "\nuserClickedPattern: " + userClickedPattern) ;
    }
  });
} 


/* --------------------------------------------------Checklist:-------------------------------------------------------------
-
1) define function to add next rng color to correct level sequence, gamePattern, call nextSequence();
  1a) define initial starter: while gamePattern.length==0; eventlistener keydown or click to change heading to:
      "score: " + gamePattern.length - 1 == 0;
  1b) and add rng color to gamePattern after that and .fadeOut.fadeIn.fadeOut.fadeIn for gamePattern[n] n times;

2) define for loop to assign event listener to add color to userClickedPattern when .btn .color is clicked:
  2a) and after each click, check clickedColor[n] with gamePattern[n] -->;
  2b) if != , .length=0 from both arrays and tell user Game Over.;
  2c) if == , .length=0 from userClickedPattern then add next rng color to gamePattern thru nextSequence;
  
*/
  




