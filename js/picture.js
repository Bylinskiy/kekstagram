'use strict';
// Создание картинки
window.picture = (function () {
  var userPictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  return {
    createPicture: function (image, comment, likes, index) {
      var pictureElement = userPictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').dataset.index = index;
      pictureElement.querySelector('.picture__img').src = image;
      pictureElement.querySelector('.picture__comments').textContent = comment;
      pictureElement.querySelector('.picture__likes').textContent = likes;
      return pictureElement;
    }
  };
})();
