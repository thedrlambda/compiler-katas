"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ### Reachability 1 ###
// Someone has just added the BLUE value to our Color enum, but forgotten to fix the toString function.
// Can you make the compiler catch this mistake using only what is in the file?
function assertExhausted(x) {
    throw new Error("Unexpected object: " + x);
}
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
function toString(c) {
    switch (c) {
        case Color.RED:
            return "red";
        case Color.GREEN:
            return "green";
    }
}
