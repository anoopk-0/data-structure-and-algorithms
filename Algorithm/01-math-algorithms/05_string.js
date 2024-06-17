// to reverse string

function reverseString(str) {
  if (str.length <= 0) return "";

  return reverseString(str.substr(1)) + str.charAt(0);
}
