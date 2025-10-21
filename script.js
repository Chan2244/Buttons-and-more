
let button = document.getElementById("clicks");

function clicks(){
   
    let numclicks_str=button.innerText;
    
   let numclicks= parseInt(numclicks_str) + 1;
   
   button.innerHTML=numclicks;
}