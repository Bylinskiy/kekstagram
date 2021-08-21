'use strict';
// Использование формы для загрузки изображений
(function () {
  var openUploadFormButton = document.querySelector('#upload-file');
  var closeUploadFormButton = document.querySelector('#upload-cancel');
  var uploadForm = document.querySelector('.img-upload__overlay');

  var openUploadForm = function () {
    uploadForm.classList.remove('hidden');
    document.addEventListener('keydown', onUploadFormEscPress);
    window.util.modalOpen();
  };

  var closeUploadForm = function () {
    uploadForm.classList.add('hidden');
    document.removeEventListener('keydown', onUploadFormEscPress);
    window.util.modalClose();
    openUploadFormButton.value = '';
  };

  var onUploadFormEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && evt.target !== hashTagsInput && evt.target !== descriptionInput) {
      closeUploadForm();
    }
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
})();
