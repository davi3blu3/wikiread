$(document).ready(function () {
    'use strict';

    var container = $('.search-wrapper'),
        textInput;
    
    // clear previous input, if any
    container.find('.search-input').val('');
    
    // GET request to WikiPedia, and display result to DOM
    function searchResult(query) {
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&namespace=0&format=json',
            i;
        
        // clear previous search results, if any
        if ($('.article-frame').length > 0) {
            $('.article-frame').remove();
        };
        
        // API call
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (data) {
                // iterate through variables, push to DOM
                for (i = 0; i < data[1].length; i += 1) {
                    $('.results').append('<div class="article-frame"><a href="' + data[3][i] + '"><h3 class="article-title">' + data[1][i] + '</h3></a><p class="article-body">' + data[2][i] + '</p></div>');
                }
                // clear input
                container.find('.search-input').val('');
            }
        });
    }

    // open search field, or if open, launch search
    $('.search-icon').click(function (event) {
        textInput = $('.search-input').val();

        if (!container.hasClass('active')) {
            console.log("search open!");
            container.addClass('active');
            event.preventDefault();
        } else if (container.hasClass('active') && textInput.length > 0) {
            console.log("search for: " + textInput);
            searchResult(textInput);
        }
    });

    // launch search with 'enter' key if text entered
    $(document).keypress(function (e) {
        if (e.which === 13 && container.hasClass('active')) {
            textInput = $('.search-input').val();
            if (textInput.length > 0) {
                console.log("search for: " + textInput);
                searchResult(textInput);
            }
        }
    });

    // close search field on clicking X
    $('.close').click(function () {
        if (container.hasClass('active') && $('.close').closest('.input-holder').length === 0) {
            console.log("search close!");
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
    });

});

