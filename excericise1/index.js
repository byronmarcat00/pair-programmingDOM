var chocolate=document.querySelector(".cookie");



let counterValue=0;

chocolate.addEventListener('click', function(){
    let counter= document.querySelector(".counter");
    counter.innerHTML=counterValue ;
    counterValue++;
    

})