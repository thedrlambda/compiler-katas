"use strict";
// UNFINISHED!
Object.defineProperty(exports, "__esModule", { value: true });
// ### Reachability (Hard) ###
// We have an issue! One of these functions is failing, for some reason. We need your help!
// Can you use the compiler to find the error?
var A;
(function (A) {
    A[A["A1"] = 0] = "A1";
    A[A["A2"] = 1] = "A2";
    A[A["A3"] = 2] = "A3";
    A[A["A4"] = 3] = "A4";
})(A || (A = {}));
function foo(a) {
    switch (a) {
        case A.A1:
            return "Something";
        default:
            return "Something else";
    }
}
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["SECOND"] = 0] = "SECOND";
    TimeUnit[TimeUnit["MINUTE"] = 1] = "MINUTE";
    TimeUnit[TimeUnit["HOUR"] = 2] = "HOUR";
    TimeUnit[TimeUnit["DAY"] = 3] = "DAY";
    TimeUnit[TimeUnit["WEEK"] = 4] = "WEEK";
    TimeUnit[TimeUnit["YEAR"] = 5] = "YEAR";
})(TimeUnit || (TimeUnit = {}));
function convertToSeconds(t, fromUnit) {
    if (fromUnit === TimeUnit.YEAR) {
        t *= 52;
        fromUnit = TimeUnit.WEEK;
    }
    if (fromUnit === TimeUnit.WEEK) {
        t *= 7;
        fromUnit = TimeUnit.DAY;
    }
    if (fromUnit === TimeUnit.DAY) {
        t *= 24;
        fromUnit = TimeUnit.HOUR;
    }
    if (fromUnit === TimeUnit.HOUR) {
        t *= 60;
        fromUnit = TimeUnit.MINUTE;
    }
    if (fromUnit === TimeUnit.MINUTE) {
        t *= 60;
        fromUnit = TimeUnit.SECOND;
    }
    if (fromUnit === TimeUnit.SECOND) {
        return t;
    }
}
