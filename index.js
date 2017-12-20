$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

// request json data from YouTube API
    var request = gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'thumbnail',
      q: ($('#search').val()),
      maxResults: 3,
});

// use execute to parse json data requeseted by YouTube API
    request.execute(function(response) {
      var results = response.result;
      $("#results").html("");
      $.each(results.items, function(index, item) {
          $("#results").append([
            "<h2><a href='http://www.youtube.com/watch?v="+ item.id.videoId +"'>" + item.snippet.title +"</a></h2>" +
            "<a href='" + item.snippet.thumbnails.medium.url + "'><img src='" + item.snippet.thumbnails.medium.url + "'/></a><br>" +
            "<br><br>"]);
        });
      });
    });
  });
  
// Grab Key and Endpoint URL
function init() {
  gapi.client.setApiKey("AIzaSyCUJsaURE_pZgSlOlfB69TCKrlqMc7ghv4");
  gapi.client.load("youtube", "v3", function() {
  });
}


//http://www.youtube.com/watch?v=
//item.snippet.thumbnails.medium.url