/*
import Module from './test.js';

Module().then((instance) => {
    const add = instance.add;
})
*/

// let engine = new Worker('/wasm');

// let engine = new Worker('/test/wasm');
/*
let engine = await WebAssembly.instantiateStreaming(fetch('/wasm'), {
    env: {myvar: 42},
}).then((result) => { result.instance.exports });
*/
let engine = await WebAssembly.instantiateStreaming(fetch('/wasm'), {});

let response = document.getElementById("output");

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let nr1 = document.getElementById("nr1").value;
    let nr2 = document.getElementById("nr2").value;
    console.log(nr1, nr2)
    let suma = engine.instance.add(nr1, nr2)
    console.log(suma)
    response.textContent = suma;
        event.preventDefault();
})

