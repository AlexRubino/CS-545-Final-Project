var questions = [];
let head = document.getElementById('head');
document.getElementById('nq').disabled = true;
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
var answerkey = ["form completion", "a higher error rate", "command language", "closure", "card sorting"];
var wizard = document.getElementById('wizard');
var fireball = document.getElementById('fireball');
fireball.style.visibility = "hidden";
let q1 = {
    q : "What interaction style shortens learning and reduces key strokes?:",
    a : ["form completion","natural language","direct manipulation","command language"]
  };
  
questions.push(q1);
let q2 = {
    q : "What may be a tradeoff of increasing the speed of performance?:",
    a : ["a higher error rate","increased time to learn","decreased satisfaction","all of the above"]
  };
questions.push(q2);

let q3 = {
  q : "What interaction style relieves the burden of learning the syntax of the application?:",
  a : ["command language","natural language","direct manipulation","form completion"]
};
questions.push(q3);

let q4 = {
  q : "Which Gestalt law states that we try to make our experiences as complete as possible?:",
  a : ["closure","proximity","simularity","continuation"]
};
questions.push(q4);

let q5 = {
  q : "Maeda's SLIP strategy is an excellent guide for dealing with what?:",
  a : ["card sorting","persona development","statistical analysis","experimental design"]
};
questions.push(q5);

function genQuestion(){
    let qn = Math.floor(Math.random()*questions.length);
    let question = document.getElementById("question");
    let quest = questions[qn];
    let randomAns = [0,1,2,3];
    let rn = Math.floor(Math.random()*randomAns.length);

    question.innerText = quest.q;
    question.style.fontWeight = 'bold'; 
    
    a1l.innerText = quest.a[randomAns[rn]];
    randomAns.splice(rn,1);
    rn = Math.floor(Math.random()*randomAns.length);
    
    
    a2l.innerText = quest.a[randomAns[rn]];
    randomAns.splice(rn,1);
    rn = Math.floor(Math.random()*randomAns.length);
    
    
    a3l.innerText = quest.a[randomAns[rn]];
    randomAns.splice(rn,1);
    rn = Math.floor(Math.random()*randomAns.length);
    
    
    a4l.innerText = quest.a[randomAns[rn]];
    randomAns.splice(rn,1);
    questions.splice(qn,1);
    }
    genQuestion();

    function subAns(){
        console.log(a1.checked)
        console.log(a2.checked)
        console.log(a3.checked)
        console.log(a4.checked)
        if(a1.checked && answerkey.includes(a1l.innerText)||a2.checked && answerkey.includes(a2l.innerText)||a3.checked && answerkey.includes(a3l.innerText)||a4.checked&& answerkey.includes(a4l.innerText)){
            attack();
            head.innerText = "correct";
            document.getElementById('nq').disabled = false;
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
        else{
          head.innerText = "wrong";
          if(a2.checked)
            a2.disabled = true;
          if(a3.checked)
            a3.disabled = true;
          if(a4.checked)
            a4.disabled = true;
        }
        if(count >=6)
            alert('you won');
      }

    function nextq(){
        genQuestion();
        head.innerText = 'lesson1';
        a1.disabled = false;
        a2.disabled = false;
        a3.disabled = false;
        a4.disabled = false;
        document.getElementById('nq').disabled = true;
        document.getElementById('subans').disabled = false;
    }

    var left = 580;
    var fireStep = 1;
    var wizStep = 1;
    var enmStep = 1;
    function move_fireball(){
        if(left >= 790){
            fireball.style.visibility = "hidden";
            damage();
            return;
        }
        left = left + 10;
        if(fireStep > 2)
            fireStep = 1;
        fireball.style.left = left + 'px';
        fireball.src = source + 'fireball_'+fireStep+'.png'; 
        fireStep++;
        setTimeout(move_fireball,50);


    }
    function attack(){
        if(wizStep>10){
            wizard.src = source + "wizard"+".png";
            fireball.style.visibility = 'visible';
            move_fireball();
            return;
        }
        wizard.src = source + 'atk_'+wizStep+'.png';
        wizStep++;
        setTimeout(attack,75);
    }

    function damage(){
        if(enmStep > 3 && count <6)
        {
            enemy.src = es + "enemy.png";
            return;
        }
        enemy.src = es + "dmg_" + enmStep+".png";
        enmStep++;
        setTimeout(damage,100);
    }
