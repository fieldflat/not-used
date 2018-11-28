(function() {
  'use strict';

  var command = document.getElementById('command');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var c = 1;

  btn.addEventListener('click', function() {

     if (c === 1){
       result.textContent = 'Invalid command';
     }

  });
})();
