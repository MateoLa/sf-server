
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
# compile only the .wasm file:
emcc test/test.c -O2 -s WASM=0 -s SIDE_MODULE=1 -o test/test.wasm
# compile both the .wasm and the .js glue file:
emcc test/test.c -O2 -s WASM=1 -s MAIN_MODULE=1 -o test/test.js
#or:
emcc test/test.c -O2 -o test/test.js -s EXPORT_ES6=1
```

```sh
node example.js
```
