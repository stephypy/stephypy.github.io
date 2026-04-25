let computer = [];
let user = [];
let round = 0;
let score = 0;
const highlight_colors = ["#91BE6F", "#F94346", "#F9C54E", "#2749A0"];

function nextComputerTurn(){
  nextInstruction = Math.floor(Math.random() * 4) + 1;
  computer.push(nextInstruction);
}

function showOffScreen() {
  document.getElementById("score").hidden = true;
  document.getElementById("all-rect").hidden = true;
  document.getElementById("gameover").hidden = true;
}

function showGameScreen() {
  setScore();
  document.getElementById("score").hidden = false;
  document.getElementById("all-rect").hidden = false;
  document.getElementById("gameover").hidden = true;
  document.getElementById("start").hidden = true;
}

function showEndScreen() {
  document.getElementById("score").hidden = false;
  document.getElementById("all-rect").hidden = true;
  document.getElementById("gameover").hidden = false;
  document.getElementById("start").hidden = false;
}

function nextUserAction(clicked_id){
    const i = user.push(clicked_id) - 1;
    if (compareCompTurn(i) == false) {
      showEndScreen();
      resetGame();
      return;
    }

    if (user.length == computer.length) {
      score += 1;
      setScore();
      setTimeout(() => {
      currentRound();
      }, 1000);
    return;
    }
}

function resetGame() {
  computer = [];
  user = [];
  round = 0;
  score = 0;
}

function setScore() {
  document.getElementById("score").innerText = `Score: ${score}`
}

function compareCompTurn(i){
    if(user[i] != computer[i]) {
        return false;
    }
  return true;
}

function showPattern(){
    computer.forEach((id,i) => {
      setTimeout(() => {
        rect = document.getElementById(id.toString());
        color = highlight_colors[id - 1];
        highlight(rect, color);
      }, (i + 1) * 600);
    });
}

function highlight(obj, color){
  const orig = window.getComputedStyle(obj).getPropertyValue("background-color");
  obj.style.backgroundColor = color;
  setTimeout(() => {
    obj.style.backgroundColor = orig;
  }, 400);

}

function startUserTurn(){
    user = [];
}

function setRectState(isDisabled) {
  for (let i = 1; i < 5; i++) {
    document.getElementById(i.toString()).disabled = isDisabled;
  }
}

function currentRound() {
  round += 1
  setRectState(true);
  nextComputerTurn();
  showPattern();
  setTimeout(() => {
    startUserTurn()
    setRectState(false);
  }, round * 600 + 1000);
}

function play() {
  showGameScreen();
  currentRound();
}

document.addEventListener("DOMContentLoaded", function() {
  showOffScreen()
  const start_btn = document.getElementById('start');
  start_btn.addEventListener('click', play);

  for (let i = 1; i < 5; i++) {
    let rect = document.getElementById(i.toString())
    rect.addEventListener('click', () => {
      nextUserAction(i.toString())
    });
  }
});
