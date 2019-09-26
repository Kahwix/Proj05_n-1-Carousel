`use strict`;

const buttonB = document.getElementById('Before');
const buttonA = document.getElementById('After');
let AllImages = document.querySelectorAll('li img');

function NextImageComming() {
    for(let i of AllImages){
        i.classList.remove('visible');
        i.className.add('visible');
    }
}

/* 
function BoucleAuto(){

    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}, 5000);

}
*/


function GeneralButton(){
    NextImageComming();
}


buttonA.addEventListener("click", NextImageComming);
// groupeli.addEventListener("click", () => alert('Good')); */
// button.addEventListener("click", NextImageComming);