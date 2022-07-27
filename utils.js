const accordion = document.getElementsByClassName('question');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');  
    
    if (this.style.fontWeight  === "bold") {
        this.style.fontWeight  = "normal"
    } else {
        this.style.fontWeight  = "bold"
    }

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }    
  })
}

// rotate arrow
let rotated = false
function rotateArrow (numero) {
  let flechaSelecc= document.querySelectorAll('.flecha')
  rotated = !rotated
  if (rotated===true) {
    
    flechaSelecc[numero].style.transform = 'rotate(180deg)'
    flechaSelecc[numero].style.transition= 'transform 0.4s linear'
    
    
  } else {
    flechaSelecc[numero].style.transform = 'rotate(0deg)'
    flechaSelecc[numero].style.transition= 'transform 0.4s linear'
  }
    
}

