// Create a Function with a Private Counter (Closure)

// Write a function createCounter that:
// Returns an object with two methods: increment() and getValue().
// Keeps its counter value private (cannot be accessed directly from outside).
// Each call to increment() increases the countergetValue() returns the current count. by 1.

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());