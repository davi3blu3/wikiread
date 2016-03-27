
function myCallback() {
    console.log("Callback triggered!");
}

$(document).ready( function() {

    var container = $('.search-wrapper');

    // open search field, or if open search
    $('.search-icon').click(function(){
        var textInput = $('.search-input').val();

        if(!container.hasClass('active')){
            console.log("search open!");
            container.addClass('active');
            event.preventDefault();
        } else if (container.hasClass('active') && textInput.length > 0){
            console.log("search for: " + textInput);

            // $.get("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + textInput+ "&namespace=0&format=json", function(data, status){
            //     console.log("Data: " + data + "\nStatus: " + status);
            // });

            var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + textInput+ '&namespace=0&format=json';
            $.ajax({
               type: 'GET',
                url: url,
                async: false,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function (data) {
                    console.log(data);
                },
            });
            // clear input
            // container.find('.search-input').val('');
        }
    });

    // close search field
    $('.close').click(function(){
        if(container.hasClass('active') && $('.close').closest('.input-holder').length == 0){
            console.log("search close!");
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
    });




})

// GET REQUEST CONSTRUCTION

// format input? i.e. URL Encoding
//     space to %20,
//     apostrophe to %27


