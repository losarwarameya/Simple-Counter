//1. access elements: counter
const counter=document.querySelector("#counter");
const buttons=document.querySelectorAll(".btn");

//2. add eventlisteners to the buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
        const clickedButton = buttons[i];
        if (clickedButton.classList.contains("increase")) {
            counter.innerHTML=Number(counter.innerHTML)+1;
        }else if(clickedButton.classList.contains("decrease")) {
            counter.innerHTML=Number(counter.innerHTML)-1;
        }else {
            counter.innerHTML=0;
        }
    });
    
}

