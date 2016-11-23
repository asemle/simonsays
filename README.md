# simonsays

#November 23, 2016-
    1 flashes red when incorrect
    * When the user clicks on a square, get it’s class name and check the class name with the answers array*
- if true, then keep going. if false (bad answer) then run a reset function (sets variables back to zero or empty), and alert to the user they were wrong somehow
    *2 inputs() triggers, get class name, check with answerArray, continue with game.*
      -Original method I was pushing the value of the triggered class name 'box red black'.includes('')
      pushing that to the userInput[]...
    *3 if - ? - false use reset() resetting each global variable allowing start-btn to work with a clean memory*
#TO-DO
  incorrect flashes
  inputs()

#Complete day
  2 incorrect terminate
  3 if false use reset()
  make gameOn() new funk that does the randomColor flashing
  1 flash red when wrong

notes - make start-btn inactive while gameOn()

//Now I have a scalable game that continuously get harder
//Self terminates when wrong input
//next step styling somehow make the time get faster every exponential level

make q w a s to introduce double input mechanic
