"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LastNode = /** @class */ (function () {
    function LastNode(value) {
        this.value = value;
    }
    return LastNode;
}());
var RegularNode = /** @class */ (function () {
    function RegularNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return RegularNode;
}());
var NonEmptyStack = /** @class */ (function () {
    function NonEmptyStack() {
        this.data = [];
    }
    NonEmptyStack.prototype.prepend = function (value) {
        this.data = __spreadArrays([value], this.data);
    };
    NonEmptyStack.prototype.first = function () {
        return this.data[0];
    };
    return NonEmptyStack;
}());
console.log(new NonEmptyStack().first().toString());
