`use strict`;

const button = document.querySelector('button');
const groupeli = document.querySelectorAll('li');
let table = new Array();


function TableIndex() {

}

function BoucleClassVisible() {

}

function ButtonNextImage() {

}


/* 
function BoucleAuto(){

    setTimeout(function(){
        
        BoucleAuto();
    }, 5000);

}
function General {
    BoucleAuto(); 
}

*/

button.addEventListener("click", function(){ alert('Good')});
button.addEventListener("click", () => alert('Good'));
button.addEventListener("click", BoucleClassVisible);