var questions = [];
let head = document.getElementById('head');
document.getElementById('nq').style.visibility = 'hidden';
document.getElementById('subans').disabled = false;
var a1l = document.getElementById('a1l');
var a2l = document.getElementById('a2l');
var a3l = document.getElementById('a3l');
var a4l = document.getElementById('a4l');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
let counter = document.getElementById('counter');
var source = "../../public/img/HCI/Mage 2/";
var es = "../../public/img/HCI/Mage 1/";
var count = 1;
var answerkey = ["rules", "feature", "trigger", "loops and modes", "feedback"];
var wizard = document.getElementById('wizard');
var fireball = document.getElementById('fireball');
fireball.style.visibility = "hidden";
let q1 = {
  q: "What determines how a micro interaction works?",
  a: ["orders", "rules", "regulations", "mandates"]
};

questions.push(q1);
let q2 = {
  q: "What is a collection of microinteractions called?",
  a: ["feature", "clique", "group", "highlight"]
};
questions.push(q2);

let q3 = {
  q: "What initiates a microinteraction?",
  a: ["trigger", "prompt", "cause", "spark"]
};
questions.push(q3);

let q4 = {
  q: "What illuminates the rules?",
  a: ["feedback", "noise", "answer", "reaction"]
};
questions.push(q4);

let q5 = {
  q: "What are the hidden meta rules that affect the interaction?",
  a: ["loops and modes", "rings and practices", "conditions and circuits", "nuts and bolts"]
};
questions.push(q5);

function genQuestion() {
  let qn = Math.floor(Math.random() * questions.length);
  let question = document.getElementById("question");
  let quest = questions[qn];
  let randomAns = [0, 1, 2, 3];
  let rn = Math.floor(Math.random() * randomAns.length);

  question.innerText = quest.q;
  question.style.fontWeight = 'bold';

  a1l.innerText = quest.a[randomAns[rn]];
  randomAns.splice(rn, 1);
  rn = Math.floor(Math.random() * randomAns.length);


  a2l.innerText = quest.a[randomAns[rn]];
  randomAns.splice(rn, 1);
  rn = Math.floor(Math.random() * randomAns.length);


  a3l.innerText = quest.a[randomAns[rn]];
  randomAns.splice(rn, 1);
  rn = Math.floor(Math.random() * randomAns.length);


  a4l.innerText = quest.a[randomAns[rn]];
  randomAns.splice(rn, 1);
  questions.splice(qn, 1);
}
genQuestion();

function subAns() {
  console.log(a1.checked)
  console.log(a2.checked)
  console.log(a3.checked)
  console.log(a4.checked)
  if (a1.checked && answerkey.includes(a1l.innerText) || a2.checked && answerkey.includes(a2l.innerText) || a3.checked && answerkey.includes(a3l.innerText) || a4.checked && answerkey.includes(a4l.innerText)) {
    attack();
    
    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    a4.disabled = true;

    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
    a4.checked = false;
    document.getElementById('subans').disabled = true;
    counter.innerText = count++;

  }
  else {
    alert("try again");
    if (a2.checked)
      a2.disabled = true;
    if (a3.checked)
      a3.disabled = true;
    if (a4.checked)
      a4.disabled = true;
  }
  if (count >= 6) {
    document.getElementById('nq').style.visibility = 'hidden';
    var nxts = document.getElementsByClassName('next_arrow');
    for (let i = 0; i < nxts.length; i++) {
      nxts[i].style.visibility = 'visible';
    }
  }
}

function nextq() {
  genQuestion();
  a1.disabled = false;
  a2.disabled = false;
  a3.disabled = false;
  a4.disabled = false;
  document.getElementById('nq').style.visibility = 'hidden';
  document.getElementById('subans').disabled = false;
}

var left = 280;
var fireStep = 1;
var wizStep = 1;
var enmStep = 1;
function move_fireball() {
  if (left >= 570) {
    fireball.style.visibility = "hidden";
    fireStep = 1;
    left = 280;
    damage();
    return;
  }
  left = left + 10;
  if (fireStep > 2)
    fireStep = 1;
  fireball.style.left = left + 'px';
  fireball.src = source + 'fireball_' + fireStep + '.png';
  fireStep++;
  setTimeout(move_fireball, 50);


}
function attack() {
  if (wizStep > 10) {
    wizard.src = source + "wizard" + ".png";
    fireball.style.visibility = 'visible';
    move_fireball();
    wizStep = 1;
    return;
  }
  wizard.src = source + 'atk_' + wizStep + '.png';
  wizStep++;
  setTimeout(attack, 75);
}

function damage() {
  if (enmStep > 3 && count < 6) {
    enemy.src = es + "enemy.png";
    enmStep = 1;
    document.getElementById('nq').style.visibility = 'visible';
    return;
  }
  if (enmStep > 6)
    return;
  enemy.src = es + "dmg_" + enmStep + ".png";
  enmStep++;
  setTimeout(damage, 100);

}
