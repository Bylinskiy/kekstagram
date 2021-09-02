'use strict';
// Использование формы для загрузки изображений
window.form = (function () {
  var openUploadFormButton = document.querySelector('#upload-file');
  var closeUploadFormButton = document.querySelector('#upload-cancel');
  var uploadForm = document.querySelector('.img-upload__overlay');
  var hashTagsInput = document.querySelector('input[name=hashtags]');
  var descriptionInput = document.querySelector('textarea[name=description]');
  var imagePreview = document.querySelector('.img-upload__overlay .img-upload__preview');

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

  return {
    hashTagsInput: hashTagsInput,
    descriptionInput: descriptionInput,
    imagePreview: imagePreview
  };
})();
