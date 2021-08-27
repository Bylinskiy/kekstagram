'use strict';
// Валидация с хещтегами и комментариями
(function () {
  var uploadButton = document.querySelector('#upload-submit');

  uploadButton.addEventListener('click', function () {
    if (window.form.hashTagsInput.value !== '') {
      var hashTags = window.form.hashTagsInput.value.split(' ');
      var tagsArr = [];

      hashTags.forEach(function (item) {
        item = item.toLowerCase();
        var allowedChar = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9]+$');

        if (item.substring(0, 1) !== '#') {
          window.form.hashTagsInput.setCustomValidity('Хэштэг должен начинаться с #');
        } else if (item === '#') {
          window.form.hashTagsInput.setCustomValidity('Хэштэг не должен быть пустым');
        } else if (item.length > 20) {
          window.form.hashTagsInput.setCustomValidity('Максимальная длина хэштэга - 20 символов');
        } else if (tagsArr.indexOf(item) !== -1) {
          window.form.hashTagsInput.setCustomValidity('Хэштэги не должны повторяться');
        } else if (allowedChar.test(item.substring(1)) === false) {
          window.form.hashTagsInput.setCustomValidity('Хэштег может состоять только из букв и чисел и не может содержать спецсимволы');
        } else {
          tagsArr.push(item);

          if (tagsArr.length > 5) {
            window.form.hashTagsInput.setCustomValidity('Максимальное количество тегов - 5');
          } else {
            window.form.hashTagsInput.setCustomValidity('');
          }
        }

      });
    } else {
      window.form.hashTagsInput.setCustomValidity('');
    }

    if (window.form.descriptionInput.value.length > 140) {
      window.form.descriptionInput.setCustomValidity('Максимальная длина комментария - 140 символов');
    } else {
      window.form.descriptionInput.setCustomValidity('');
    }
  });
})();
