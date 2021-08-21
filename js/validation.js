'use strict';
// Валидация с хещтегами и комментариями
(function () {

  var hashTagsInput = document.querySelector('input[name=hashtags]');
  var descriptionInput = document.querySelector('textarea[name=description]');
  var uploadButton = document.querySelector('#upload-submit');

  uploadButton.addEventListener('click', function () {
    if (hashTagsInput.value !== '') {
      var hashTags = hashTagsInput.value.split(' ');
      var tagsArr = [];

      hashTags.forEach(function (item) {
        item = item.toLowerCase();
        var allowedChar = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9]+$');

        if (item.substring(0, 1) !== '#') {
          hashTagsInput.setCustomValidity('Хэштэг должен начинаться с #');
        } else if (item === '#') {
          hashTagsInput.setCustomValidity('Хэштэг не должен быть пустым');
        } else if (item.length > 20) {
          hashTagsInput.setCustomValidity('Максимальная длина хэштэга - 20 символов');
        } else if (tagsArr.indexOf(item) !== -1) {
          hashTagsInput.setCustomValidity('Хэштэги не должны повторяться');
        } else if (allowedChar.test(item.substring(1)) === false) {
          hashTagsInput.setCustomValidity('Хэштег может состоять только из букв и чисел и не может содержать спецсимволы');
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

    if (descriptionInput.value.length > 140) {
      descriptionInput.setCustomValidity('Максимальная длина комментария - 140 символов');
    } else {
      descriptionInput.setCustomValidity('');
    }
  });
})();
