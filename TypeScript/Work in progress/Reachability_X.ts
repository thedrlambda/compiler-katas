// UNFINISHED!

// Just for scoping (ignore):
export {};

// ### Reachability (Hard) ###
// We have an issue! One of these functions is failing, for some reason. We need your help!
// Can you use the compiler to find the error?

enum A {
  A1,
  A2,
  A3,
  A4,
}

function foo(a: A) {
  switch (a) {
    case A.A1:
      return "Something";
    default:
      return "Something else";
  }
}

enum TimeUnit {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  YEAR,
}

function convertToSeconds(t: number, fromUnit: TimeUnit) {
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
