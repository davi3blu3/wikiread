
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