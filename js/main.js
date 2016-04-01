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
        }
        
        // API call
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (data) {

                // iterate through results, push to DOM
                var i = 0;

                var interval = setInterval( function() {
                    $('<div class="article-frame"><a href="'
                        + data[3][i] + '"><h3 class="article-title">'
                        + data[1][i] + '</h3></a><p class="article-body">'
                        + data[2][i] + '</p></div>').hide().appendTo(".results").fadeIn('1500');
                    i += 1;

                    if (i >= data[1].length) {
                        clearInterval(interval);
                    }
                }, 300);

                    


                // clear input
                container.find('.search-input').val('');
            }
        });
    }
    
    // GET request for random article, display result to DOM
    function randomResult () {
        var url = 'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&grnlimit=1&prop=info&inprop=url&format=json',
            i;
        
        // clear previous search results, if any
        if ($('.article-frame').length > 0) {
            $('.article-frame').remove();
        }
        
        // API call
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (data) {

                // iterate through results, push to DOM
                var pageID = Object.keys(data.query.pages)[0];
                var title = data.query.pages[pageID].title;
                var link = data.query.pages[pageID].fullurl;
                console.log(title + " " + link);
            
                $('<div class="article-frame"><a href="' + link + '"><h3 class="article-title">' + title + '</h3></a>').hide().appendTo(".results").fadeIn(500);
            
                // clear input
                container.find('.search-input').val('');
            }
        });
    }

    // random search
    $('.random').click(function () {
       randomResult(); 
    });

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



//https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&grnlimit=5&prop=info&inprop=url
//
//{
//    "batchcomplete": "",
//    "continue": {
//        "grncontinue": "0.046177707503|0.046179792336|29235722|0",
//        "continue": "grncontinue||"
//    },
//    "query": {
//        "pages": {
//            "3100922": {
//                "pageid": 3100922,
//                "ns": 0,
//                "title": "Harry R\u00e9e",
//                "contentmodel": "wikitext",
//                "pagelanguage": "en",
//                "pagelanguagehtmlcode": "en",
//                "pagelanguagedir": "ltr",
//                "touched": "2016-02-22T00:50:12Z",
//                "lastrevid": 706193550,
//                "length": 3865,
//                "fullurl": "https://en.wikipedia.org/wiki/Harry_R%C3%A9e",
//                "editurl": "https://en.wikipedia.org/w/index.php?title=Harry_R%C3%A9e&action=edit",
//                "canonicalurl": "https://en.wikipedia.org/wiki/Harry_R%C3%A9e"
//            },
//            "48901872": {
//                "pageid": 48901872,
//                "ns": 0,
//                "title": "Chemill\u00e9-en-Anjou",
//                "contentmodel": "wikitext",
//                "pagelanguage": "en",
//                "pagelanguagehtmlcode": "en",
//                "pagelanguagedir": "ltr",
//                "touched": "2016-03-28T12:15:51Z",
//                "lastrevid": 705801369,
//                "length": 1755,
//                "fullurl": "https://en.wikipedia.org/wiki/Chemill%C3%A9-en-Anjou",
//                "editurl": "https://en.wikipedia.org/w/index.php?title=Chemill%C3%A9-en-Anjou&action=edit",
//                "canonicalurl": "https://en.wikipedia.org/wiki/Chemill%C3%A9-en-Anjou"
//            }
//        }
//    }
//}