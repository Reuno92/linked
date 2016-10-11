$(document).ready(function() {
    var input = $('#email');
    var buttonSubmit = $('.newsletter-submit');
    var modal = $('#newsletterModal');
    var showMail = $('p.newsletter-val');
    var inputValue = null;

    buttonSubmit.on('click', function(){
        var inputTest = $('#email').val();
        if (inputTest === '') {
            buttonSubmit.attr('data-toggle', '');
            input.attr('placeholder', "Aucune adresse n'a été tapé");
        } else {
            inputValue = inputTest;
            buttonSubmit.attr('data-toggle', 'modal');
        }
    });

    modal.on('shown.bs.modal', function() {
            if (showMail.val == '') {
                showMail.append(inputValue);
            } else {
                showMail.empty();
                showMail.append(inputValue);
            }
    });

    modal.on('hide.bs.modal', function () {
        $('p.newsletter-val').append('');
    });
});