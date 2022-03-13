$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); 

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            contentType: false,
            cache: false,

            sucsess: function(){
                $('.popup-header').text('SUCCESS!');
                $('.popup-text').text('You have successfully subscribed to the email newsletter');
                $('.overlay').fadeIn();
            },
            //сейчас будет ошибка, тк в 3й строчке запретила передачу данных по дефу
            error: function(){
                $('.popup-header').text('ERROR');
                $('.popup-text').text('Something goes wrong. Please try again');
                $('.overlay').fadeIn();
            },
        })
    }); 
});

$('.popup-close, .popup-close-btn').click(function() {
    $('.overlay').fadeOut();
});