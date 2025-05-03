let divs = document.querySelectorAll(".box");

let i = 1;
for(div of divs){
    div.innerText = `New unique value ${i}`;
    i++;
}