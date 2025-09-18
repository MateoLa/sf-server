import Module from './test.js';

Module().then((instance) => {
    const add = instance.add;
})


// let engine = new Worker('/wasm');

// let engine = new Worker('/test/wasm');


let response = document.getElementById("output");
let nr1 = document.getElementById("nr1");
let nr2 = document.getElementById("nr2");


document.getElementById("form").addEventListener("submit", () => {
    response.textContent = add(nr1, nr2);
})


