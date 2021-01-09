// Just for scoping (ignore):
export {};

// ### Reachability 1 ###
// Someone has just added the BLUE value to our Color enum, but forgotten to fix the toString function.
// Can you make the compiler catch this mistake using only what is in the file?

function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}

enum Color {
  RED,
  GREEN,
  BLUE,
}

function toString(c: Color) {
  switch (c) {
    case Color.RED:
      return "red";
    case Color.GREEN:
      return "green";
  }
}
