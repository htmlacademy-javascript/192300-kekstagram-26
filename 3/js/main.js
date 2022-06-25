<<<<<<< Updated upstream
=======
/**
 * @param {number} min;
 * @param {number} max;
 * @returns number
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}
/**
 * @param {string} checkString;
 * @param {number} maxLength;
 * @returns boolean
 */
function checkingMaxLengthString(checkString, maxLength){
  if (typeof checkString !== 'string'){
    return 'Error';
  }
  return checkString.length >= maxLength;

}
const ARRAY_OF_USER_NAME = ['Артем', 'Василий', 'Анастасия', 'Иван', 'Елена', 'Ирина', 'Мария', 'Евгений'];
const ARRAY_OF_MESSAGE = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const ARRAY_OF_DESCRIPTION = ['Summer!','Мое любимое фото!','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Обожаю пляж'];
const MIN_USER = 1;
const MAX_USER = 2;
const ARRAY_WITHOUT_REPETITION = [];
const getRandomElement = function (array){
  return getRandomInt(0, array.length - 1);
};

function getArrayWithoutRepetition(min, max){
  let index = 1;
  while(ARRAY_WITHOUT_REPETITION.includes(index)){
    index = getRandomInt(min, max);
  }
  ARRAY_WITHOUT_REPETITION.push(index);
  return index;
}

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
  //return Array.from({length:countUsers}, generateUser);
}

// eslint-disable-next-line no-console
//console.log(generateUsersProfiles(MAX_USER));

>>>>>>> Stashed changes
