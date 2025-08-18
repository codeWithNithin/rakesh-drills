// Write a function to reverse words in a string without using split method.

// logic

function reverseString(str) {
  // 1. reverse the string

  let reversed = "",
    ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  //  2. get the word
  for (let i = 0; i < reversed.length; i++) {
    let word = "";

    // untill u get space, keeping on adding letters to word
    while (i < str.length && reverseString[i] !== " ") {
      word += reverseString[i];
      i++;
    }

    // 3. reverse the word
    for (let j = word.length - 1; j >= 0; j--) {
      ans += " " + word[j];
    }
  }

//   from 3rd step, we know that at the begining we will have a space, so we are slicing it from 1. to get only valid strings.
  return ans.slice(1);
}

console.log(reverseString("hello world"));