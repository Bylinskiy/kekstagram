'use strict';
// Отрисовка и взаимодействие галлереи
window.gallery = (function () {
  var userPictureList = document.querySelector('.pictures');

  window.backend.load(function (pictures) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictures.length; i++) {
      fragment.appendChild(window.picture.createPicture(pictures[i].url, pictures[i].comments.length, pictures[i].likes, pictures[i].id));
    }

    userPictureList.appendChild(fragment);
  }

  );

  return {
    userPictureList: userPictureList
  };
})();
