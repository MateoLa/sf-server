'use strict'

const express = require('express');
const app = express();
const port = 5002;

const path = require('path');
app.use(express.static('test'));
app.use(express.urlencoded({extended: true}));


app.get('/stockfish.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/stockfish.svg'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/test/test.html'));
})

app.post('/', (req, res) => {
	const nr1 = req.body.nr1;
	const nr2 = req.body.nr2;

	console.log("Result: ", nr1 + nr2);
//	res.sendFile(path.join(__dirname, '/test/test.html'));
	res.status(204).send(); // do-nothing
});


app.get('/wasm', (req, res) => {
	res.set('Content-Type', 'application/wasm')
	res.sendFile(path.join(__dirname, '/test/example.wasm'))
})

app.get('/js', (req, res) => {
	res.sendFile(path.join(__dirname, '/test/example.js'))
})

app.listen(port, () => {
	console.log("Testing WebAssembly javascript output glue code. Port: ", port)
})

