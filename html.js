
$(document).ready(function(){
     var answerArray = [];
     var userInput = [];
     var flag = false;
     var colors = ['red', 'green', 'blue', 'yellow'];
     var count = 0;
     $('.log-btn').on('click',function() {
       console.log('answers '+ answerArray);
       console.log('User answers '+ userInput);
     });
     $('.start-btn').on('click', function() {
         count = 0;
         var interval = setInterval(function() {
            var randoNum = Math.floor(Math.random()*(0,3)+0);
            var randomColor = colors[randoNum];
            answerArray.push(randomColor);
             var selected = $('.' + randomColor);
             selected.addClass('black');
             setTimeout(function() {
               console.log(count,flag);
                 selected.removeClass('black');
             }, 500);
             //end interval sets flag equal true for inputs
             if(count >= 3){
                 flag = true;
                 clearInterval(interval);
            }
             count++;

         }, 1000);

     });
     // if(flag) {
       $(".box").click(function(){
           if(flag){

             inputs($(this));
           }
       });

     function inputs(that) {
       
       $(that).addClass('black');
       console.log(count);
        // console.log(that['0'].className);//typeof = string
         setTimeout(function() {
             $(that).removeClass('black');
         }, 200);
        var user = that['0'].className;
        console.log(user);
        if(user.includes('red'))userInput.push('red');
        else if(user.includes('green'))userInput.push('green');
        else if(user.includes('blue'))userInput.push('blue');
        else userInput.push('yellow');
        //  userInput.push();
         count--;
         if (count === 0) {
           flag = false;
           console.log(flag);
         }

     }




  // }

});



//Now I have two identicle arrays
//make a while loop to determine if game on else reset

// Wait for player to click start
// Start a round, which follows these steps
//     Add a random number (1-4) to the sequence
//     Animate the sequence to the user
//     Enable user interaction with the board, and register any clicks on the Simon tiles
//     While the player has not entered an incorrect response, and the number of clicks is less than the length of the sequence, wait for player input
// Continue adding rounds until the player loses
