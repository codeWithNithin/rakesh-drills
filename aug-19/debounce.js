// Implement a debounce function in Javascript. It should receive a function to call and a timer value.


// logic

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    console.log("args", args)
    // Clear any previously scheduled execution
    clearTimeout(timeoutId);

    // Schedule a new execution after the delay
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 500);
debouncedSearch("hello world");