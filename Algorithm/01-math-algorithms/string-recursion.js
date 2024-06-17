function reverseString(str) {
  if (str.length === 0) {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

let str = "Hello World!";

reverseString(str); //!dlroW olleH

//NOTE: palindromes are unique key words which give the same world on reverse

function isPalindromes(str) {
  //base case
  if (str.length == 0 || str.length == 1) return true;

  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindromes(str.substr(1, str.length - 2));
  }

  return false;
}
