import {ARRAY_OF_MESSAGE, ARRAY_OF_USER_NAME, ARRAY_OF_DESCRIPTION, MIN_USER, MAX_USER} from './const.js';
import {getArrayWithoutRepetition,getRandomElement,getRandomInt} from './util.js';

function generateUser() {
  return{
    id: getArrayWithoutRepetition(MIN_USER, MAX_USER),
    url: `photos/${getArrayWithoutRepetition(MIN_USER, MAX_USER)}.jpg`,
    description: ARRAY_OF_DESCRIPTION[getRandomElement(ARRAY_OF_DESCRIPTION)],
    likes: getRandomInt(15, 200),
    comments: generateComment()

  };
}
function generateComment(){
  return{
    id: getArrayWithoutRepetition(MIN_USER, MAX_USER),
    avatar: `avatar/${getArrayWithoutRepetition(1, 6)}.svg`,
    message: ARRAY_OF_MESSAGE[getRandomElement(ARRAY_OF_MESSAGE)],
    name: ARRAY_OF_USER_NAME[getRandomElement(ARRAY_OF_USER_NAME)],
  };
}
function generateUsersProfiles(countUsers){
  return Array.from({length:countUsers}, generateUser);
}

// eslint-disable-next-line no-console
console.log(generateUsersProfiles(MAX_USER));


