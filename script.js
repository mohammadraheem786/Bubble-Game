var bubble = Math.floor(Math.random() * 10);  
function makeBubble() {
    var cluster = "";  // Reset cluster inside the function to start fresh
    for (let i = 0; i < 160; i++) {
        var bubble = Math.floor(Math.random() * 10);  
        cluster += `<div class = "bubble">${bubble}</div>`;
    }
    document.querySelector("#pbotm").innerHTML = cluster;  // Update the DOM once, after the loop
}
var timer = 60;
function runTimer(){
    
  var timer1 = setInterval(function(){
        timer--;
        if(timer > 0){
            document.querySelector("#Timer").textContent = timer;
        } else{
            clearInterval(timer1);
            document.querySelector("#pbotm").innerHTML = `<h1 id="over">Game Over</h1>`;
            document.querySelector("#Timer").textContent = timer--;
        }
      

    },1000)
}


var hitvalue = Math.floor(Math.random() * 10);
function updateHit(){
    hitvalue = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitvalue;
}
document.querySelector("#pbotm").addEventListener("click", function(det) {
    // Check if hitvalue matches the content of the clicked target
    if (hitvalue ===Number(det.target.textContent)) {
        updateScore();
        makeBubble();
        updateHit();
    }
});


var score = 0;
function updateScore(){
       score += 10;
       document.querySelector("#scoreval").textContent = score;
}

runTimer();
makeBubble();
updateHit();
//updateScore()
