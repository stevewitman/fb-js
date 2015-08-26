var FizzBuzz = require('../src');

describe("for_number()", function() {
  it("returns the number when provided 1 as input", function() {
    expect(FizzBuzz.for_number(1)).toEqual("1");
  });

  it("returns the number when provided 2 as input", function() {
  });

  it("returns the word 'fizz' when provided 3 as input", function() {
  });

  it("returns the word 'buzz' when provided 5 as input", function() {
  });

  it("returns the word 'fizz' when provided a multiple of 3", function() {
  });

  it("returns the word 'buzz' when provided a multiple of 5", function() {
  });

  it("returns the phrase 'fizz buzz' when provided a multiple of both 3 and 5", function() {
  });

  it("for all other numbers it returns the number as a string", function() {
  });
});

// describe("print_to()", function() {
//   it("returns a string with values for each number up to n", function() {
//     expect(FizzBuzz.print_to(10)).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz");
//   });
// });

// describe("print_between()", function() {
//   it("returns a string with values for each number from n1 to n2", function() {
//     expect(FizzBuzz.print_between(5,10)).toEqual("buzz, fizz, 7, 8, fizz, buzz");
//   });
// });
