'use strict';
// Данные и генерация их для сервиса
window.data = (function () {
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
    'Выжал что мог'
  ];

  var AUTORS = [
    'Петя',
    'Вася',
    'Жеки Чан',
    'Винишко-тян',
    'Доминатор3000',
    'Кекс'
  ];

  var photoAmount = 25;

  function generateObject() {
    var object = {
      url: 'photos/' + window.util.getRandomInteger(1, 25) + '.jpg',
      description: window.data.getData(DESCRIPTIONS),
      likes: window.util.getRandomInteger(15, 200),
      comments: window.data.getData(COMMENTS),
      commentsCount: window.util.getRandomInteger(15, 200)
    };

    return object;
  }

  return {
    AUTORS: AUTORS,
    COMMENTS: COMMENTS,
    DESCRIPTIONS: DESCRIPTIONS,
    generateArray: function () {
      var arr = [];
      for (var i = 0; i < photoAmount; i++) {
        arr[i] = generateObject();
      }
      return arr;
    },
    getData: function (data) {
      return data[window.util.getRandomInteger(0, data.length - 1)];
    }
  };
})();
