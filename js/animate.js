//For the scroll-down button

$(document).ready(function() {

  $('#scroll-down').hover(function() {
      $('#prompt').addClass('visible');
  }, function() {
      $('#prompt').removeClass('visible');
  });

});

//For the title animations


$(document).ready(function () {
    var viewport = $(window),
        setVisible = function (e) {
            var viewportTop = viewport.scrollTop(),
                viewportBottom = viewport.scrollTop() + viewport.height();
            $('.title').each(function () {
                var self = $(this),
                    top = self.offset().top,
                    bottom = top + self.height(),
                    topOnScreen = top >= viewportTop && top <= viewportBottom,
                    bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
                    elemVisible = topOnScreen || bottomOnScreen;
                self.toggleClass('fadeInUp', elemVisible);
                self.toggleClass('animatedDelayed', elemVisible);
                console.log("Test");
            });
        };
    viewport.scroll(setVisible);
    setVisible();
});
