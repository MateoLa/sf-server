let wasmSupported = typeof WebAssembly === 'object' && WebAssembly.validate(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));


let engine = new Worker('/wasm');
let evaler = new Module();


let response = document.getElementById("response");
let command = document.getElementById("command");

document.getElementById("form").addEventListener("submit", () => {
    engine.postMessage(command.value);
    evaler.postMessage(command.value);
})


engine.onmessage = function(event) {
    let line;
        
    if (event && typeof event === "object") { line = event.data; } else { line = event; }  
    console.log("Engine said: " + line);
        
      /// Ignore some output.
    if (line === "uciok" || line === "readyok" || line.substr(0, 11) === "option name") {
        return;
    }
        
    if (response.textContent) { response.textContent += "\n"; }
    response.textContent += line;
}


evaler.onmessage = function(event) {
    let line;
        
    if (event && typeof event === "object") { line = event.data; } else { line = event; }  
    console.log("Evaler said: " + line);
        
      /// Ignore some output.
    if (line === "uciok" || line === "readyok" || line.substr(0, 11) === "option name") {
        return;
    }
        
    if (response.textContent) { response.textContent += "\n"; }
    response.textContent += line;
}
