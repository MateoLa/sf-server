'use strict'

const express = require('express');
const app = express();
const port = 5002;


app.use(express.urlencoded({extended: true}));
const path = require('path');


app.use((req, res, next) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
})


app.get('/stockfish.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'stockfish.svg'));
});


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})


app.post('/', (req, res) => {
	const command = req.body.command;
	console.log("UCI command: ", command);
	res.json({ message: "UCI cmd received" });
});


app.get('/stockfish.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/sf/stockfish.js'));
})


app.get('/stockfish.wasm', (req, res) => {
	console.log('Time: ', Date.now());
	res.set('Content-Type', 'application/wasm')
	res.sendFile(path.join(__dirname, '/sf/stockfish.wasm'))
})

app.get('/script.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/script.js'));
})

app.listen(port, () => {
	console.log("Testing Stockfish wasm compilation. Listening on port ", port)
})

