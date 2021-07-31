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
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: getDescription(),
    likes: getRandomInteger(15, 200),
    comments: getComment(),
    commentsCount: getRandomInteger(15, 200)
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
  fragment.appendChild(createPicture(pictures[i].url, pictures[i].description, pictures[i].likes));
}

userPictureList.appendChild(fragment);

// document.querySelector('.big-picture').classList.remove('hidden');

document.querySelector('.big-picture__img').querySelector('img').src = pictures[0].url;
document.querySelector('.likes-count').textContent = pictures[0].likes;
document.querySelector('.comments-count').textContent = pictures[0].commentsCount;
document.querySelector('.social__caption').textContent = pictures[0].description;

var socialPicture = document.querySelectorAll('.social__picture');
var socialText = document.querySelectorAll('.social__text');

for (var j = 0; j < socialPicture.length; j++) {
  socialPicture[j].src = 'img/avatar-' + getRandomInteger(1, 6) + '.svg';
  socialPicture[j].alt = AUTORS[getRandomInteger(1, 6)];
}

for (var k = 0; k < socialText.length; k++) {
  socialText[k].textContent = getComment();
}

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');


// Modul 4


var openUploadFormButton = document.querySelector('#upload-file');
var closeUploadFormButton = document.querySelector('#upload-cancel');
var uploadForm = document.querySelector('.img-upload__overlay');
var ESC_KEYCODE = 27;

var openUploadForm = function () {
  uploadForm.classList.remove('hidden');
  document.addEventListener('keydown', onUploadFormEscPress);
  modalOpen();
};

var closeUploadForm = function () {
  uploadForm.classList.add('hidden');
  document.removeEventListener('keydown', onUploadFormEscPress);
  modalClose();
  openUploadFormButton.value = '';
};

var onUploadFormEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== hashTagsInput) {
    closeUploadForm();
  }
};

var modalOpen = function () {
  document.querySelector('body').classList.add('modal-open');
};

var modalClose = function () {
  document.querySelector('body').classList.remove('modal-open');
};

openUploadFormButton.addEventListener('change', function () {
  openUploadForm();
});

closeUploadFormButton.addEventListener('click', function () {
  closeUploadForm();
});

var effectLevelPin = document.querySelector('.effect-level__pin');

effectLevelPin.addEventListener('mouseup', function () {

});


// Валидация с хещтегами и комментариями
var hashTagsInput = document.querySelector('input[name=hashtags]');
var descriptionInput = document.querySelector('textarea[name=description]');
var uploadButton = document.querySelector('#upload-submit');

uploadButton.addEventListener('click', function (evt) {
  if (hashTagsInput.value !== '') {
    var hashTags = hashTagsInput.value.split(' ');
    var tagsArr = [];

    hashTags.forEach(function (item) {
      item = item.toLowerCase();

      if (item.substring(0, 1) !== '#') {
        hashTagsInput.setCustomValidity('Хэштэг должен начинаться с #');
      } else if (item === '#') {
        hashTagsInput.setCustomValidity('Хэштэг не должен быть пустым');
      } else if (item.length > 20) {
        hashTagsInput.setCustomValidity('Максимальная длина хэштэга - 20 символов');
      } else if (tagsArr.indexOf(item) !== -1) {
        hashTagsInput.setCustomValidity('Хэштэги не должны повторяться');
      } else {
        tagsArr.push(item);

        if (tagsArr.length > 5) {
          hashTagsInput.setCustomValidity('Максимальное количество тегов - 5');
        } else {
          hashTagsInput.setCustomValidity('');
        }
      }

    });
  } else {
    hashTagsInput.setCustomValidity('');
  }
});
