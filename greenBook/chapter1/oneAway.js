/* There are three types of edits that can be performed on a string: remove char, add char, replace char. Given two strings, write a func to check if they are at most one edit away.

pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false

*/

const oneAway = function (strOne, strTwo) {
  // if lengths are different, find character that's different and compare strings without it.
  if (strOne.length !== strTwo.length) {
    return Math.abs(strOne.length - strTwo.length) > 1 ? false : true;
  }

  // if lengths are identical, declare a flag
  let oneDone = false;
  // start looping.

  // O(n)time, O(1) space
  for (let i = 0; i < strOne.length; i++) {
    // when meeting one unequal character
    if (strOne[i] !== strTwo[i]) {
      if (oneDone === false) oneDone = true;
      else return false;
    }
  }
  return true;
};

const handleLongerString = function (longString, shortString) {
  for (let i = 0; i < longString.length; i++) {
    if (longString[i] !== shortString[i]) {
      return longString.slice(0, i) + longString.slice(i + 1) === shortString;
    }
  }
};

/*
time = O(n);
space = O(1);
*/
