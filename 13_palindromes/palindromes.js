const palindromes = function (str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false; // Characters do not match, not a palindrome
    }
    left++;
    right--;
  }

  return true;

};

// Do not edit below this line
module.exports = palindromes;
