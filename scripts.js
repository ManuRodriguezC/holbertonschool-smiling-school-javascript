$(document).ready(function() {
    // Show the loader
    $('.loader').show();

    // Make the AJAX request
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        type: 'GET',
        success: function(data) {
            // Hide the loader
            $('.loader').hide();

            // Generate the quotes
            for (var i = 0; i < data.length; i++) {
                var quote = '<div class="quote">' +
                    '<img src="' + data[i].pic_url + '">' +
                    '<h2>' + data[i].name + '</h2>' +
                    '<h3>' + data[i].title + '</h3>' +
                    '<p>' + data[i].text + '</p>' +
                    '</div>';
                $('.quotes').append(quote);
            }

            // Initialize the carousel
            // Replace this with the code to initialize your carousel
            // This depends on the carousel library you are using
            $('.carousel').carousel();
        }
    });
});
