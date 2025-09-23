#include <stdio.h>
#include <emscripten.h>

const char * greet() { return "Greetings from Wonderland! ML"; }

int add(int a, int b) { return a + b; }