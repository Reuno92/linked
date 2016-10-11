$(document).ready(function(){
var links = $('.nav.navbar-nav.navbar-left li a');

links.on('mouseenter', function(){
    var target = $(this.hash);
    if ($(this)[0].hash === target.selector) {
        target.children().addClass('selected');
    }
   else { }
});

 links.on('mouseleave', function(){
    var product = $('.inner-article');
    product.removeClass('selected');
 });

    var $root = $('html, body');

    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});
