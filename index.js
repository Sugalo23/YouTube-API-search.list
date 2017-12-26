$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

// request json data from YouTube API

    var request = gapi.client.youtube.search.list ({
      part: 'snippet',
      type: 'video',
      q: ($('#search').val()),
      maxResults: 10,
});

// use execute to parse json data requeseted by YouTube API

    request.execute(function(response) {
      var results = response.result;
      var resultsCount = response.pageInfo.totalResults;
      $("#results").html("");
      $.each(results.items, function(index, item) {
          $("#results").append([
            "<div class='list'><h3 class='titles'><a href='http://www.youtube.com/watch?v=" + 
            item.id.videoId +" 'target='_blank'>" + item.snippet.title + "</a></h3>" +
            "<a href='http://www.youtube.com/watch?v="+ 
            item.id.videoId +" 'target='_blank'>" +
            "<img src='" + item.snippet.thumbnails.medium.url + "' alt='Video Thumbnail'/>" +
            "</a></div>"]);
        });
      });
    });
  });
  
// Grab Key and Endpoint

function init() {
  gapi.client.setApiKey("AIzaSyCUJsaURE_pZgSlOlfB69TCKrlqMc7ghv4");
  gapi.client.load("youtube", "v3", function() {
  });
}


//http://www.youtube.com/watch?v=
//item.snippet.thumbnails.medium.url
