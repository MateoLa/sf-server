## How to use Emscripten Web Workers


#### Requisites

```sh
npm install express --save
npm install body-parser --save
npm install ejs --save
```


#### How could you test emcc .js and .wasm outputs?

```sh
emcc test/example.c -o test/example.js
emcc test/example.c -o test/example.js -s EXPORTED_FUNCTIONS='["_add", "_greet"]' -s EXPORT_ES6=1

emcc test/example.c -O3 -o test/example.js -s EXPORT_ES6=1
emcc test/example.c -O3 -o test/example.js -s EXPORT_ES6=1 --profiling-funcs
```

```sh
node test.js
```

Edit the file /test/script.js to see how to use the .js and .wasm emcc outputs.


#### Testing different Stockfish versions compiled to Wasm.

```sh
npm install express --save
npm install body-parser --save
npm install ejs --save

node app.js
```