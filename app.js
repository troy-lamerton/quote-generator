// document ready

// headings
// space for the quote
// button for the new quote calls newQuote function + needs to be called on page load 


// grab a random quote usign the api
// log it to the console
var semiColon = "%3B";

$(document).ready(function() {

function newQuote() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(quote) {
    $('#quote').html(quote[0].content);
    $('#author').html(" — " + quote[0].title);
    var tweetLink = $('.twitter-share-button').attr("href");
    //remove <p> and </p> tags from quote contet
    //remove <strong> </strong> etc tags
    escapedQuote = $('#quote').text();
    escapedQuote = escapedQuote.replace(/;/g, semiColon);
    var tweetQuote = escapedQuote.length;
    var tweetAuthor = quote[0].title.length + 3;

    if (tweetQuote + tweetAuthor > 140){
        escapedQuote = escapedQuote.slice(0 , 140 - tweetAuthor - 3) + "...";
    }

    tweetLink = tweetLink.slice(0, 38) + (escapedQuote + " — " + quote[0].title);

    $('.twitter-share-button').attr("href", tweetLink);
  });
}

newQuote();

$('.btn').click(function() {
  newQuote();
});

});