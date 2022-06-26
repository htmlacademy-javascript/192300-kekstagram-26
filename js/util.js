import {ARRAY_WITHOUT_REPETITION} from './const.js';
function getArrayWithoutRepetition(min, max){
  let index = 1;
  if(ARRAY_WITHOUT_REPETITION.includes(index)){
    index = getRandomInt(min, max);
  }
  ARRAY_WITHOUT_REPETITION.push(index);
  return index;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}

function checkingMaxLengthString(checkString, maxLength){
  if (typeof checkString !== 'string'){
    return 'Error';
  }
  return checkString.length >= maxLength;

}
const getRandomElement = function (array){
  return getRandomInt(0, array.length - 1);
};

export {getRandomElement, checkingMaxLengthString, getRandomInt,  getArrayWithoutRepetition};
