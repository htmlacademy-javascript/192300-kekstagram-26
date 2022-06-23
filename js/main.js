/* eslint-disable no-console */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkingMaximumLengthString(checkString, maxLength){
  if (checkString.length >maxLength){
    return false;
  }
  return true;

}

console.log(checkingMaximumLengthString('fjdmdkfmdkfmdkfm',1));
console.log(getRandomIntInclusive(1, 300));
