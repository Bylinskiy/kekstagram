'use strict';
window.backend = (function () {
  var URL = 'https://24.javascript.pages.academy/kekstagram';
  var URL_DATA = 'https://24.javascript.pages.academy/kekstagram/data';
  var TIMEOUT_IN_MS = 10000;

  var StatusCode = {
    OK: 200
  };


  var statusHandler = function (xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL_DATA);
    xhr.timeout = TIMEOUT_IN_MS;

    statusHandler(xhr, onLoad, onError);
    xhr.send();
  };

  var upload = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', URL);
    xhr.timeout = TIMEOUT_IN_MS;

    statusHandler(xhr, onLoad, onError);
    xhr.send(data);
  };

  return {
    load: load,
    upload: upload
  };
})();
