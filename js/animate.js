
//For the title animations


$(document).ready(function () {
    var viewport = $(window),
        setVisible = function (e) {
            var viewportTop = viewport.scrollTop(),
                viewportBottom = viewport.scrollTop() + viewport.height();
            $('.animate').each(function () {
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
                self.addClass('fadeInUp', elemVisible);
                self.addClass('animatedDelayed', elemVisible);
                console.log("Test");
            });
        };
    viewport.scroll(setVisible);
    setVisible();
});



var divs = $('.title');
$(window).scroll(function(){
   if($(window).scrollTop()<10){
         divs.fadeIn("fast");
   } else {
         divs.fadeOut("fast");
   }
});
