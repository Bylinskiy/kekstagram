'use strict';
// Отрисовка большого изображения
(function () {
  var renderBigPicture = function (index) {
    document.querySelector('.big-picture__img').querySelector('img').src = window.gallery.pictures[index].url;
    document.querySelector('.likes-count').textContent = window.gallery.pictures[index].likes;
    document.querySelector('.comments-count').textContent = window.gallery.pictures[index].commentsCount;
    document.querySelector('.social__caption').textContent = window.gallery.pictures[index].description;

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

  window.gallery.userPictureList.addEventListener('click', function (evt) {
    if (evt.target.matches('.picture__img')) {
      renderBigPicture(window.util.onClickPictureChoose(evt));
      openBigPicture();
    }
  });

  window.gallery.userPictureList.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE && evt.target && evt.target.matches('.picture')) {
      evt.preventDefault();
      renderBigPicture(window.util.onEntrPressPictureChoose(evt));
      openBigPicture();
    }
  });
})();
