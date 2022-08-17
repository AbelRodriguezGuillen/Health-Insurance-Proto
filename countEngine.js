const plus = document.querySelector(".plus__button");
const minus = document.querySelector(".minus__button");
const number = document.querySelector(".numbers");

let value = number.innerHTML;

plus.addEventListener("click", ()=> {
    incrementalValue();
});

minus.addEventListener("click", ()=> {
    decrementalValue();
});

function incrementalValue(){
    number.innerHTML = value++;
    return value
};

function decrementalValue(){
    number.innerHTML = value--; 
    return value
};