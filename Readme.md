
# Work on progress


#### Testing different Stockfish versions compiled to Wasm.

```sh
npm install express --save
npm install body-parser --save
npm install ejs --save
npm install serve-favicon

node app.js
```


#### How could you test emcc .js and .wasm outputs?

```sh
emcc test/example.c -o test/example.js
emcc test/example.c -O3 -o test/example.js -s EXPORT_ES6=1
emcc test/example.c -O3 -o test/example.js -s EXPORT_ES6=1 -s EXPORTED_FUNCTIONS='["_add"]'
emcc test/example.c -O3 -o test/example.js -s EXPORT_ES6=1 --profiling-funcs
```

```sh
node test.js
```


#### Wasm decompile

```sh
sudo apt install wabt

wasm-decompile test/example.wasm
wasm-objdump -h test/example.wasm
wasm2wat test/example.wasm -o test/example.wat
```