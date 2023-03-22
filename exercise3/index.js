let button=document.getElementById('button');
let inputColor=document.getElementById("color");
let body=document.querySelector("body");

function changeColor(){
    let color=inputColor.value;  
    body.style.backgroundColor=color;

}




button.addEventListener('click',changeColor)