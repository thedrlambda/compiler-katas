"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ### Definite assignment 1 ###
// We have been working on a competitor for the popular Occulus Dictionary translation software. However, developers keep forgetting to initialize the dictionary before calling it, so it crashes when we run it.
// Can you make it impossible to make this mistake in the future?
var en_to_dk;
function initializeDictionary() {
    en_to_dk = {
        Cool: "Afkøle",
        Great: "Kodyl",
        Good: "Ægte",
        Awesome: "Knæhøj karse",
        Decent: "Nedstige",
        Excellent: "Fortræffelig",
        Brilliant: "Strålende",
        Masterful: "Mesterligt",
    };
}
function translateWord(w) {
    return en_to_dk[w];
}
console.log(translateWord("Cool"));
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
//   use a constructor
// Another hint below:
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
//   encapsulate translateWord in a class
