$.ajaxSetup({
  async: false
});

var html = "";
$(document).ready(function() {
  
  url = "http://www.freecodecamp.com/news/hot";
    $.getJSON(url, function(json) {
      
      for (var i = 0; i < json.length; i++) {
        //var i = 45;
        var title = json[i].headline;
        var d = json[i].timePosted;
        var link = json[i].link;
        var desc = json[i].metaDescription;
        var likes = json[i].rank;
        var picy = json[i].author.picture;
        var author = json[i].author.username;
      
        if (desc.length > 250) {desc = desc.substring(0,250) + "...";}
        var month = new Date(d).getMonth() + 1;
        var date = new Date(d).getDate();
        var year = new Date(d).getFullYear();
        var now = new Date();
        var elapsed = Math.floor((now-d)/3600/1000);
        
        if (elapsed === 0) {
          var date_str = "less than 1 hour ago";
        } else if (elapsed < 24) {
          var date_str = elapsed + " hours ago";
        } else {
          var date_str = month + "/" + date + "/" + year;
        }
        
      
        html += '<div class="container col-md-offset-1">';
        html += '  <div class="row pad">';
        html += '    <div class="col-md-2">';
        html += '      <div class="quad_line" id="picy"><img src='+ picy +' height="86"></div>';
        html += '    </div>';
        html += '    <div class="col-md-10 dodo">';
        html += '      <div class="row">';
        html += '        <div class="col-md-9 story" id="title"><a href="' + link + '" target="_blank">' + title + '</a></div>';
        html += '        <div class="col-md-3 story" id="date">' + date_str + '</div>';
        html += '        <div class="col-md-12 story double_line" id="desc">' + desc + '</div>';
        html += '        <div class="col-md-9 story" id="author">By: ' + author + '</div>';
        html += '        <div class="col-md-3 story" id="likes">Likes: ' + likes + '</div>';
        html += '      </div>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
      
      }
      
      $("#news").html(html);
    });
  
        
});