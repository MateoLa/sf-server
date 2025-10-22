let engine = null;
let command = document.getElementById("command");
let output = document.getElementById("output");


function addOutput(txt){
    output.textContent += txt + "\n";
    output.scrollTop = output.scrollHeight;
}

function postMessage(txt){
    addOutput("cmd> " + txt);
    engine.postMessage(txt);
    command.value = "";
}

Stockfish().then(sf => {
    console.log("Stockfish Ready..");
    engine = sf;

    engine.addMessageListener(addOutput);
})

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    postMessage(command.value);
});