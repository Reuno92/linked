var AnimationCSS = function (element, action, selector, duration) {
    this.element = element;
    this.action = action;
    this.selector = selector;
    this.duration = duration;
    this.init();
};

AnimationCSS.prototype.init = function () {
    var selector = this.selector;
    var duration = this.duration;
    $(this.element).on(this.action, function () {
        $(this).addClass(selector).delay(duration).queue(function () {
            $(this).removeClass(selector).dequeue();
        });
    });
};

$(document).ready(function () {
    var produit = new AnimationCSS('.produit', 'mouseenter', 'pulse', '700');
});
