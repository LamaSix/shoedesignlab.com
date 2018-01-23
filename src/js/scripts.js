(function ($, window, document, undefined) {

  'use strict';

  function changeBackgroundColor() {
    var backgroundColors = [
      '5BF81C',
      'F8C91C',
      '1CF8E0',
      'F81CE1',
      'DC5079'
    ];

    $('body').css('background-color', '#' + backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);

    setTimeout(function() {
      changeBackgroundColor();
    }, 5000);
  }

  $(function () {
    changeBackgroundColor();
  });

})(jQuery, window, document);
