"use strict";
// UNFINISHED!
Object.defineProperty(exports, "__esModule", { value: true });
function collatz(n) {
    while (n != 1) {
        if (n % 2 === 0)
            n /= 2;
        else
            n = 3 * n + 1;
    }
}
