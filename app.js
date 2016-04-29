// document ready

// headings
// space for the quote
// button for the new quote calls newQuote function + needs to be called on page load 


// grab a random quote usign the api
// log it to the console


$(document).ready(function() {

$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(quote) {
  $('#quote').append(quote[0].content);
  $('#author').append(" — " + quote[0].title);
})

})

