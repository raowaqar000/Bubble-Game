let timerVal = document.querySelector("#timer")
let hitval = document.querySelector("#hitVal")
let scoreVal = document.querySelector('#score')

let timer = 60
let score = 0
let Hitrn = 0

function increaseScore(){
    score +=10
    scoreVal.textContent = score
}

function runHitVal(){
    Hitrn = Math.floor(Math.random() * 10)
    hitval.textContent = Hitrn
}

function makeBubbles() {
  let clutter = "";

  for (let i = 1; i < 76; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  pbtm.innerHTML = clutter;
}


function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer--
        timerVal.textContent = timer
        } else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener('click', function(dets){
    let clickedNum  = Number(dets.target.textContent);
    if(clickedNum === Hitrn){
        increaseScore()
        makeBubbles()
        runHitVal()
    }
    
})

increaseScore()
runHitVal()
runTimer()
makeBubbles();
