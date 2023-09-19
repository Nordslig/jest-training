const functions = require("./start");

test("adds 1 + 2 to equal 3", () => {
  expect(functions.sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to NOT equal 4", () => {
  expect(functions.sum(1, 2)).not.toBe(4);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
