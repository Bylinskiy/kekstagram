'use strict';
// Передвижение пина эффектов
(function () {
  var effects = document.querySelector('.effects');
  var pin = document.querySelector('.effect-level__pin');
  var line = document.querySelector('.effect-level__line');
  var effectValue = document.querySelector('.effect-level__value');
  var depth = document.querySelector('.effect-level__depth');
  var wholeSlider = document.querySelector('.effect-level');

  // применение эффекта
  wholeSlider.classList.add('hidden');
  effects.addEventListener('change', function (evt) {
    window.form.imagePreview.className = 'img-upload__preview';
    window.form.imagePreview.classList.add('effects__preview--' + evt.target.value);

    if (evt.target.value === 'none') {
      wholeSlider.classList.add('hidden');
    } else {
      wholeSlider.classList.remove('hidden');
    }

    pin.style.left = 0 + 'px';
    depth.style.width = 0 + 'px';
    effectValue.value = 0;
    window.form.imagePreview.style.filter = 'none';
  });


  // передвижение слайдера

  pin.style.left = 0 + 'px';
  depth.style.width = 0 + 'px';
  var position;

  pin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
      };

      startCoords = {
        x: moveEvt.clientX,
      };

      var pinMoves = pin.offsetLeft - shift.x;

      if (pinMoves < 0) {
        position = 0;
      } else if (pinMoves >= line.offsetWidth) {
        position = line.offsetWidth;
      } else {
        position = pinMoves;
      }

      pin.style.left = position + 'px';
      depth.style.width = position + 'px';
      effectValue.value = Math.round(position * 100 / line.offsetWidth);

      if (window.form.imagePreview.classList.contains('effects__preview--chrome')) {
        window.form.imagePreview.style.filter = 'grayscale(' + (effectValue.value / 100).toFixed(2) + ')';
      } else if (window.form.imagePreview.classList.contains('effects__preview--sepia')) {
        window.form.imagePreview.style.filter = 'sepia(' + (effectValue.value / 100).toFixed(2) + ')';
      } else if (window.form.imagePreview.classList.contains('effects__preview--marvin')) {
        window.form.imagePreview.style.filter = 'invert(' + effectValue.value + '%)';
      } else if (window.form.imagePreview.classList.contains('effects__preview--phobos')) {
        window.form.imagePreview.style.filter = 'blur(' + (effectValue.value / 100 * 3) + 'px)';
      } else if (window.form.imagePreview.classList.contains('effects__preview--heat')) {
        window.form.imagePreview.style.filter = 'brightness(' + (1 + (effectValue.value / 100 * 2)) + ')';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
