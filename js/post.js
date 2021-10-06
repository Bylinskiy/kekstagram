'use strict';
// Отрисовка большого изображения
(function () {
  window.backend.load(function (pictures) {
    var renderBigPicture = function (index) {
      document.querySelector('.big-picture__img').querySelector('img').src = pictures[index].url;
      document.querySelector('.likes-count').textContent = pictures[index].likes;
      document.querySelector('.comments-count').textContent = pictures[index].comments.length;
      document.querySelector('.social__caption').textContent = pictures[index].description;

      var socialPicture = document.querySelectorAll('.social__picture');
      var socialText = document.querySelectorAll('.social__text');

      for (var j = 0; j < socialPicture.length; j++) {
        socialPicture[j].src = pictures[index].comments[j].avatar;
        socialPicture[j].alt = pictures[index].comments[j].name;
      }

      for (var k = 0; k < socialText.length; k++) {
        socialText[k].textContent = pictures[index].comments[k].message;
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
      if (evt.target.closest('.picture')) {
        renderBigPicture(window.util.onPictureChoose(evt));
        openBigPicture();
      }
    });

    window.gallery.userPictureList.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.util.ENTER_KEYCODE && evt.target && evt.target.matches('.picture')) {
        evt.preventDefault();
        renderBigPicture(window.util.onPictureChoose(evt));
        openBigPicture();
      }
    });
  });

})();
