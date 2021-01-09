// Just for scoping (ignore):
export {};

// ### Type Checking 1 ###
// We have been working on a competitor for the popular Occulus Dictionary translation software. However, developers keep forgetting to initialize the dictionary before calling it, so it crashes when we run it.
// Can you make it impossible to make this mistake in the future?

let en_to_dk: { [word: string]: string };

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

function translateWord(w: string) {
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
//   add a parameter to translateWord
