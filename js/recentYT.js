var channelID = "UC1o6fVUo5Rgc9IduQnQjbKA";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video-0").attr("src","https://youtube.com/embed/"+id + "?controls=1&showinfo=1&rel=0");
});

$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[1].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video-1").attr("src","https://youtube.com/embed/"+id + "?controls=1&showinfo=0&rel=0");
});

$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[2].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video-2").attr("src","https://youtube.com/embed/"+id + "?controls=1&showinfo=0&rel=0");
});