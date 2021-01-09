"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ### Reachability 2 ###
// Science has just discovered a new direction -- LEFT -- which we have added to our code. However, in our excitement we forgot handle it in the toString function.
// Can you make the compiler catch this mistake using only what is in the file?
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
function toString(d) {
    if (d === Direction.UP)
        return "up";
    if (d === Direction.RIGHT)
        return "right";
    if (d === Direction.DOWN)
        return "down";
}
// Hint below:
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   use return type
