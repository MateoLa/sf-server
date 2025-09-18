'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = 5002;

app.use(express.urlencoded({extended: true}));
app.use(express.static('test'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/test/test.html'));
})


app.post('/', (req, res) => {
	const nr1 = req.body.nr1;
	const nr2 = req.body.nr2;

	console.log("Result: ", nr1 + nr2);
	res.sendFile(path.join(__dirname, '/test/test.html'));
});


app.get('/wasm', (req, res) => {
	res.set('Content-Type', 'application/wasm')
	res.sendFile(path.join(__dirname, '/test/test.wasm'))
})


app.listen(port, () => {
	console.log("Testing WebAssembly javascript output glue code. Port: ", port)
})

