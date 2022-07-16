// // main loop
// window.addEventListener('DOMContentLoaded', (event) => {
//   const mainCapy = document.getElementById("main-capy");
//   const ziemniak = document.getElementById("ziemniak");
//   mainCapy.addEventListener("dragstart", drag);
//   ziemniak.addEventListener("drop", drop);
//   ziemniak.addEventListener("dragover", allowDrop);
//
// });

/* draggable element */
const ziemniak = document.getElementById('ziemniak');

ziemniak.addEventListener('dragstart', dragStart);

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}



// alert("NO TOUCH SCRRENS ALLOWED. LEAVE THE SITE IMMIDIETLY!!111!");
/* drop targets */
const capyEl = document.getElementById("main-capy");
capyEl.addEventListener('dragenter', dragEnter)
capyEl.addEventListener('dragover', dragOver);
capyEl.addEventListener('dragleave', dragLeave);
capyEl.addEventListener('drop', drop);


function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}


let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function drop(e) {
  e.target.classList.remove('drag-over');
  console.log("ziemniak dropped")
  move();
  alert("cappy happy");

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove('hide');
}