const inputLetter = document.querySelector("#input");
const dugme = document.querySelector("#dugme");
let broj = document.querySelector(".broj");

dugme.addEventListener('click', () =>{
   broj.innerHTML =  Math.ceil(Math.random()*26);
})