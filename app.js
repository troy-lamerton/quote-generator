// document ready

// headings
// space for the quote
// button for the new quote calls newQuote function + needs to be called on page load 


// grab a random quote usign the api
// log it to the console
var singleQuote = "&#39;";
var doubleQuote = "&quot;";

$(document).ready(function() {

function newQuote() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(quote) {
    $('#quote').html(quote[0].content);
    $('#author').html(" — " + quote[0].title);
    console.log(quote[0].content);
    //replace %data% in tweet link to quote text
    var tweetLink = $('.twitter-share-button').attr("href");
    //remove <p> and </p> tags from quote content
    var escapedQuote = quote[0].content.slice(3, quote[0].content.length - 5);
    //remove <strong> </strong> etc tags
    
    console.log(escapedQuote);
    escapedQuote = escapedQuote.replace(/'/g, singleQuote);
    escapedQuote = escapedQuote.replace(/"/g, doubleQuote);
    console.log(escapedQuote);
    //tweetLink = tweetLink.replace("%data%", (escapedQuote + " — " + quote[0].title));
    tweetLink = tweetLink.slice(0, 38) + (escapedQuote + " — " + quote[0].title);
    $('.twitter-share-button').attr("href", tweetLink);
  });
}

newQuote();

$('.btn').click(function() {
  newQuote();
});

});