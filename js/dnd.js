'use strict';
// Передвижение пина эффектов
(function () {
  var pin = document.querySelector('.effect-level__pin');
  var line = document.querySelector('.effect-level__line');
  var value = document.querySelector('.effect-level__value');
  var depth = document.querySelector('.effect-level__depth');

  pin.style.left = 0 + 'px';
  depth.style.width = 0 + 'px';

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
        pin.style.left = 0 + 'px';
        depth.style.width = 0 + 'px';
      } else if (pinMoves >= line.offsetWidth) {
        pin.style.left = line.offsetWidth + 'px';
        depth.style.width = line.offsetWidth + 'px';
      } else {
        pin.style.left = pinMoves + 'px';
        depth.style.width = pinMoves + 'px';
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
