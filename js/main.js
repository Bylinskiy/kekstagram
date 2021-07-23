'use strict';
var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

var DESCRIPTIONS = [
  'Я у мамы фотограф',
  'Ыть как вышло',
  'Сочно, мощно!',
  'Дубль два',
  'Я поскользнулся и вот...',
  'Выжал что мог',
];

function getRandomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getComment() {
  return COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
}

function getDescription() {
  return DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)];
}

function generateObject() {
  var object = {
    url: 'photos/' + getRandomInteger(0, 25) + '.jpg',
    description: getDescription(),
    likes: getRandomInteger(15, 200),
    comments: getComment()
  };

  return object;
}

function generateArray() {
  var arr = [];
  for (var i = 0; i < 25; i++) {
    arr[i] = generateObject();
  }
  return arr;
}
var userPictureList = document.querySelector('.pictures');
var userPictureTemplate = document.querySelector('#picture')
.content
.querySelector('.picture');

var createPicture = function (image, comment, likes) {
  var pictureElement = userPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = image;
  pictureElement.querySelector('.picture__comments').textContent = comment;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  return pictureElement;
};

var fragment = document.createDocumentFragment();

var pictures = generateArray();
for (var i = 0; i < pictures.length; i++) {
  fragment.appendChild(createPicture(pictures[i].url, pictures[i].comments, pictures[i].likes));
}

userPictureList.appendChild(fragment);
