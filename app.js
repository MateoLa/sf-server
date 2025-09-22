'use strict'

const express = require('express');
const app = express();
const port = 5002;

const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get('/stockfish.svg', (req, res) => {
	res.render(path.join(__dirname, 'public/stockfish.svg'));
});

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
	res.set("Cross-Origin-Resource-Policy", "cross-origin");
	res.set("Cross-Origin-Embedder-Policy", "require-corp");
	res.set("Cross-Origin-Opener-Policy", "same-origin");
	next();
})


app.get('/', (req, res) => {
	res.render('index', { output: "" });
})


app.post('/', (req, res) => {
	const command = req.body.command;

	console.log("UCI command: ", command);

	res.render("index", { output: req.body.response })
});


app.get('/wasm', (req, res) => {
    res.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'wasm-unsafe-eval'");
	res.set('Content-Type', 'application/wasm')
	res.sendFile(path.join(__dirname, '/sf/sf171-79.wasm'))
})


app.listen(port, () => {
	console.log("Testing Stockfish wasm compilations. Listening on port ", port)
})

