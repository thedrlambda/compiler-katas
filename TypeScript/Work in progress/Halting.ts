// UNFINISHED!

// Just for scoping (ignore):
export {};

function collatz(n: number) {
  while (n != 1) {
    if (n % 2 === 0) n /= 2;
    else n = 3 * n + 1;
  }
}
