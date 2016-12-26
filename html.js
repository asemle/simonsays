
$(document).ready(function(){

  var flagger = true;
     var score = 0;
     var answerArray = [];
     var userInput = [];
     var flag = false;
     var colors = ['red', 'green', 'blue', 'yellow'];
     var count = 0;
     var level = 3;
     var redSound = new Audio("media/redSound.mp3")
     var blueSound = new Audio("media/blueSound.mp3");
     var greenSound = new Audio("media/greenSound.mp3");
     var yellowSound = new Audio("media/yellowSound.mp3");
     var failSound = new Audio("media/failSound.mp3");
    //  yellowSound.play();

     $('.log-btn').on('click',function() {
       console.log('answers '+ answerArray);
       console.log('User answers '+ userInput);
     });
     $('.start-btn').on('click', function() {
       gameOn();
     });

     function gameOn() {
       count = 0;

       $('.box').removeClass('flash');
       var interval = setInterval(function() {
          var randoNum = Math.floor(Math.random()*(4)+0);
          var randomColor = colors[randoNum];
          answerArray.push(randomColor);
           var selected = $('.' + randomColor);
           selected.addClass(randomColor + 'Light');

           var soundToPlay = eval(randomColor + "Sound");
           soundToPlay.play();
           setTimeout(function() {
             console.log(count,flag);
               selected.removeClass(randomColor + 'Light');
           }, 500);
           //end interval sets flag equal true for inputs
           if(count >= level){
               flag = true;
               clearInterval(interval);
          }
           count++;
       }, 1000);
     }

     // if(flag) {
       $(".box").click(function(){
           if(flag){
             inputs($(this));
           }
       });
//2 inputs() triggers, get class name, check with answerArray, continue with game.
     function reset() {

       count = 0;
       flag = false;
       userInput.splice(0,userInput.length);
       answerArray.splice(0,answerArray.length);
     }
     function inputs(that) {
        var clicked = $(that).attr('class').split(" ")[1];
        console.log(clicked)

       $(that).addClass(clicked +'Light');
       var clickedSound = eval(clicked + "Sound")
        clickedSound.play()
         setTimeout(function() {
             $(that).removeClass(clicked +'Light');
         }, 200);

        var userID = that['0'].className;
        var answer = answerArray.shift();
        var user = function(){
          if(userID.includes('red')) return 'red';
          else if(userID.includes('green')) return 'green';
          else if(userID.includes('blue')) return 'blue';
          else return 'yellow';// yellow
        }();

        if (user!==answer) {
          $(that).addClass('flash');
          failSound.play();
          console.log("RESET");
          reset();
          //flash red
          //reset button
        }
         count--;
         if (count === 0) {
           win();
         }
         function win() {
           level+=1;
           gameOn();
           //increment number of flashes by one
           console.log("WINNER",level);
           score+=level;
           console.log(score);
           $('#score').html(score);
           //initiate button
         }
     }
});



//X Now I have two identicle arrays
//X make a while loop to determine if game on else reset

//Now I have a scalable game that continuously get harder
//Self terminates when wrong input
//next step styling somehow make the time get faster every exponential level


// Wait for player to click start
// Start a round, which follows these steps
//     Add a random number (1-4) to the sequence
//     Animate the sequence to the user
//     Enable user interaction with the board, and register any clicks on the Simon tiles
//     While the player has not entered an incorrect response, and the number of clicks is less than the length of the sequence, wait for player input
// Continue adding rounds until the player loses



























// if(user.includes('red')&& 'red'===answer)userInput.push('red');
// else if(user.includes('green')&& 'green'===answer)userInput.push('green');
// else if(user.includes('blue')&& 'blue'===answer)userInput.push('blue');
// else if(user.includes('yellow') && 'yellow'===answer)userInput.push('yellow');
// else{
//   flagger = false;
// }
//  userInput.push();
