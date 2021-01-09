// Just for scoping (ignore):
export {};

// ### Reachability 2 ###
// Science has just discovered a new direction -- LEFT -- which we have added to our code. However, in our excitement we forgot handle it in the toString function.
// Can you make the compiler catch this mistake using only what is in the file?

enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}

function toString(d: Direction) {
  if (d === Direction.UP) return "up";
  if (d === Direction.RIGHT) return "right";
  if (d === Direction.DOWN) return "down";
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
