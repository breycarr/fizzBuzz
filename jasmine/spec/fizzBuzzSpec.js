describe('FizzBuzz', function() {
  var variable;

  it('should print the number 3 as Fizz', function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it('should print the number 5 as Buzz', function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
  it('should print the number 6 as Fizz', function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
  it('should print the number 10 as Buzz', function() {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });
  it('should print the number 15 as FizzBuzz', function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
  });
});
