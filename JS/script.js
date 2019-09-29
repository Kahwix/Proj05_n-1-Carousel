`use strict`;

const buttonBack = document.querySelector('#Back');
const buttonNext = document.querySelector('#Next');
let li = document.querySelectorAll('li');
let i = 0;


function BackImageSlice() {
    li[i].classList.remove('visible'); i--;
    if (i < 0) {
        i = li.length-1;
       }
     li[i].classList.add('visible');
}

function NextImageSlice() {
    li[i].classList.remove('visible'); i++;
    if (i >= li.length) {
        i = 0;
       }
     li[i].classList.add('visible');
}


/* 
    setTimeout(function(){    // On utilise une fonction anonyme
						
        if(i < li.length){ // Si le compteur est inférieur au dernier index
	    i++; // On l'incrémente
	}
	else{ // Sinon, on le remet à 0 (première image)
	    i = 0;
	}, 5000);
*/


function GeneralButton(){
    NextImageComming();
}


buttonBack.addEventListener("click", BackImageSlice);
buttonNext.addEventListener("click", NextImageSlice);
// groupeli.addEventListener("click", () => alert('Good')); */
// button.addEventListener("click", NextImageComming);