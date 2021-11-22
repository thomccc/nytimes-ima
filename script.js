var app = {
  nyTimesArticles : [],

  initialize: function() {
    app.getNYTimesData();
  },

  makeHTML: function() {
    let theHTML = '';
    for (let i = 0; i < app.nyTimesArticles.length; i++){
      theHTML += "<div class='nytArticle'>";
      theHTML += "<h2>" + app.nyTimesArticles[i].headline.main + "</h2>";
      theHTML += "<p>" + app.nyTimesArticles[i].abstract + "</p>";
      theHTML += "<p>" + app.nyTimesArticles[i].pub_date + "</p";
      theHTML += "</div>";
    }
    $('.container').html(theHTML);
  },

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

  getNYTimesData: function() {
    console.log("Get NY Times Data");
    let currentSearchWord = 'apple';
    let currentFilter = 'glocations:("NEW YORK CITY")'
    let nyTimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + currentSearchWord + '&fq=' + currentFilter + '&api-key=';
    let myNYKey = '0pgnoYGBpkF7LpXNo9pXeW1tj4XkbLd3';
    let nyTimesReqURL = nyTimesURL + myNYKey;
    console.log(nyTimesReqURL);
    fetch(nyTimesReqURL)
    .then(response => response.json())
    .then(data => {
      debugger;
      app.nyTimesArticles = data.response.docs;
      console.log(app.nyTimesArticles);
      app.makeHTML();
    })
    .catch(error => console.log(error));
  }
};
