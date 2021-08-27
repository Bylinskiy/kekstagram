'use strict';

var userPictureList = document.querySelector('.pictures');
var userPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

var createPicture = function (image, comment, likes, index) {
  var pictureElement = userPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').dataset.index = index;
  pictureElement.querySelector('.picture__img').src = image;
  pictureElement.querySelector('.picture__comments').textContent = comment;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

var pictures = window.data.generateArray();
for (var i = 0; i < pictures.length; i++) {
  fragment.appendChild(createPicture(pictures[i].url, pictures[i].description, pictures[i].likes, i));
}

userPictureList.appendChild(fragment);
// большая картинка
var onClickPictureChoose = function (evt) {
  var index = evt.target.dataset.index;
  return index;
};

var onEntrPressPictureChoose = function (evt) {
  var index = evt.target.children[0].dataset.index;
  return index;
};

var renderBigPicture = function (index) {
  document.querySelector('.big-picture__img').querySelector('img').src = pictures[index].url;
  document.querySelector('.likes-count').textContent = pictures[index].likes;
  document.querySelector('.comments-count').textContent = pictures[index].commentsCount;
  document.querySelector('.social__caption').textContent = pictures[index].description;

  var socialPicture = document.querySelectorAll('.social__picture');
  var socialText = document.querySelectorAll('.social__text');

  for (var j = 0; j < socialPicture.length; j++) {
    socialPicture[j].src = 'img/avatar-' + window.util.getRandomInteger(1, 6) + '.svg';
    socialPicture[j].alt = window.data.AUTORS[window.util.getRandomInteger(1, 6)];
  }

  for (var k = 0; k < socialText.length; k++) {
    socialText[k].textContent = window.data.getData(window.data.COMMENTS);
  }
};

var bigPicture = document.querySelector('.big-picture');
var closeBigPictureButton = document.querySelector('.big-picture__cancel');

closeBigPictureButton.addEventListener('click', function () {
  closeBigPicture();
});

closeBigPictureButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.util.ENTER_KEYCODE) {
    closeBigPicture();
  }
});

var openBigPicture = function () {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureEscPress);
  window.util.modalOpen();
};

var closeBigPicture = function () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscPress);
  window.util.modalClose();
};

var onBigPictureEscPress = function (evt) {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeBigPicture();
  }
};

userPictureList.addEventListener('click', function (evt) {
  renderBigPicture(onClickPictureChoose(evt));
  openBigPicture();
});

userPictureList.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.util.ENTER_KEYCODE) {
    evt.preventDefault();
    renderBigPicture(onEntrPressPictureChoose(evt));
    openBigPicture();
  }
});

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');


