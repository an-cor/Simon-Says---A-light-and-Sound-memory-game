// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 750; //how long to wait before starting playback of the clue sequence

var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakesCounter = 0; //count amount of mistakes

//Global Variables
var pattern = createRandomPattern(); 
var progress = 0; 
var guessCounter = 0;
var gamePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var tonePlaying = false;


function startGame(){
    //initialize game variables
    progress = 0;
    mistakesCounter = 0
    gamePlaying = true;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function winGame(){
  stopGame();
  alert("Congrats! You won!");
}

function loseGame(){
  stopGame();
  alert("Strike 3. Game Over.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 12 //shorten time between clue hold time
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    if(mistakesCounter == 2){
      //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
    }else{
      mistakesCounter += 1
      alert("Careful! Strike " + mistakesCounter + " :O"); //let user know of mistkes made
    }
    
  }
}


function createRandomPattern(){
  var randomPattern = []
  for(let i=0;i<=getRandomIntInclusive(7, 12);i++){ // make the pattern anywhere from 7 to 12 clues long
    randomPattern.push(getRandomIntInclusive(1, 8)); //randomly add clues between 1 to 8
  }
  return randomPattern
}

function getRandomIntInclusive(min, max){ // create a random integer number between min and max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Sound Synthesis Functions
const freqMap = {
  1: 159,
  2: 207.9,
  3: 261.6,
  4: 329.6,
  5: 392,
  6: 466.2,
  7: 514.2,
  8: 568.1
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)