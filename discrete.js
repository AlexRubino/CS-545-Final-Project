function reset_borders(){
    let boxes = [document.getElementById("A"), document.getElementById("B"), document.getElementById("C"), document.getElementById("D"), document.getElementById("E"), document.getElementById("F")];
    for(box of boxes){
        box.style.borderColor = "#666";
    }
}

function submit(){
  let result = 1;
  let boxes = [document.getElementById("A"), document.getElementById("B"), document.getElementById("C"), document.getElementById("D"), document.getElementById("E"), document.getElementById("F")];
  let answerKey = [["There are 7 continents.","10 is a prime number.","Monday will be cloudy."],["What time is it?","Shut the door.","Have a nice day."]];
  let mesg = document.getElementById("message");

  for(let i = 0; i < boxes.length; i++){    
      if(((answerKey[0].includes(boxes[i].innerHTML)) && (i < 3)) || ((answerKey[1].includes(boxes[i].innerHTML)) && (i > 2))){
          result*=1;
          boxes[i].style.borderColor = "green";
      } else {
          result*=0;
          boxes[i].style.borderColor = "red";
      }
  }
 
  var modal = document.getElementById("myModal");
  var modal_text = document.getElementById("modal-text");
  if(result){
      var nxts = document.getElementsByClassName('next_arrow');
      for(i = 0; i < nxts.length; i++) {
          nxts[i].style.visibility = 'visible';
      }
      modal_text.innerHTML = "Well done!";
      modal.style.display = "block";
  } else{
      modal_text.innerHTML = "Try again!";
      modal.style.display = "block";
  }
}

function back(){
  alert("functionality tbd");
}

function next(){
  alert("functionality tbd");
}

document.addEventListener('DOMContentLoaded', (event) => {

    var modal = document.getElementById("myModal");

    var dragSrcEl = null;
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';
     
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');

        reset_borders();
        var nxts = document.getElementsByClassName('next_arrow');
        for(i = 0; i < nxts.length; i++) {
            nxts[i].style.visibility = 'hidden';
        }
        if(this.innerHTML == ""){
            this.style.backgroundColor = "white";
            this.setAttribute("draggable", "false");
        } else {
            this.style.backgroundColor = "#ddd";
            this.setAttribute("draggable", "true");
        }
        if(dragSrcEl.innerHTML == ""){
            dragSrcEl.style.backgroundColor = "white";
            dragSrcEl.setAttribute("draggable", "false");
        } else {
            dragSrcEl.style.backgroundColor = "#ddd";
            dragSrcEl.setAttribute("draggable", "true");
        }
        
      }
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});