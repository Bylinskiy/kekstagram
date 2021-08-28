'use strict';
// Отрисовка и взаимодействие галлереи
window.gallery = (function () {
  var userPictureList = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  var pictures = window.data.generateArray();
  for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(window.picture.createPicture(pictures[i].url, pictures[i].description, pictures[i].likes, i));
  }

  userPictureList.appendChild(fragment);

  return {
    pictures: pictures,
    userPictureList: userPictureList
  };
})();
