let text= document.querySelector(".text");
let buttonSmaller= document.querySelector(".smaller");
let buttonLarger= document.querySelector(".larger");

buttonSmaller.addEventListener("click",function(){
    const currentSize = parseInt(window.getComputedStyle(text).fontSize);
    if(currentSize < 1){
        console.log("Error")
    }
    const newSize = currentSize - 10;
    text.style.fontSize = `${newSize}px`;

})

buttonLarger.addEventListener("click", function(){
    if(currentSize > 100){
        console.log("Error")
    }
    const currentSize = parseInt(window.getComputedStyle(text).fontSize);
    const newSize = currentSize + 20;
    text.style.fontSize = `${newSize}px`;
})