// document ready

// headings
// space for the quote
// button for the new quote calls newQuote function + needs to be called on page load 


// grab a random quote usign the api
// log it to the console
var stored;
$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
});
console.log(stored);
