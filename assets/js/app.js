
  var spiderMan = 'http://www.omdbapi.com/?t=spider-man&plot=full&apikey=3a181f1c';
  var spiderMan2 = 'http://www.omdbapi.com/?t=spider-man-2&apikey=3a181f1c';
  var spiderMan3 = 'http://www.omdbapi.com/?t=spider-man-3&apikey=3a181f1c';
  var AmazingSpiderMan = 'http://www.omdbapi.com/?t=amazing-spider-man&apikey=3a181f1c';
  var AmazingSpiderMan2 = 'http://www.omdbapi.com/?t=amazing-spider-man-2&apikey=3a181f1c';
  var capitanAmerica = 'http://www.omdbapi.com/?t=captain+america&apikey=3a181f1c';
  var ironMan = 'http://www.omdbapi.com/?t=iron+man&apikey=3a181f1c';
  var ironMan2 = 'http://www.omdbapi.com/?t=iron+man+2&apikey=3a181f1c';
  var ironMan3 = 'http://www.omdbapi.com/?t=iron+man+3&apikey=3a181f1c';
  var Thor = 'http://www.omdbapi.com/?t=thor&apikey=3a181f1c';


$(document).ready(function(){

  $ ('#login').click(function(){
    $ ('#modal').modal ();
  });

/*
*thumbnail avengers
*/
    $('#firstBattle').append("<div class='col-xs-6 col-sm-6 col-md-6 col-log-6'>" +
    "<div class='thumbnail marvel'><img id='ultronPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='ultron'>" + "</h3><p id='plotUltron'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='avengersIMDataBase'></p><p id='avengersRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoUltron();
    function infoUltron (){
    $.getJSON('https://www.omdbapi.com/?t=ultron&apikey=3a181f1c').then(function(response){
      $('#ultron').append('<b>' + (response.Title) + '</b>');
      $('#plotUltron').append(response.Plot);
      $('#ultronPoster').attr('src' , response.Poster);
      $('#avengersIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#avengersRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    }

/*
*Thumbnail Justice League
*/
    $('#firstBattle').append("<div class='col-xs-6 col-sm-6 col-md-6 col-log-6'>" +
    "<div class='thumbnail DC'><img id='JusticeLPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='justiceL'>" + "</h3><p id='plotJustice'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='jLeagueIMDataBase'></p><p id='jLeagueRotten'></p>"+
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoJusticeL();
    function infoJusticeL (){
    $.getJSON('https://www.omdbapi.com/?t=justice+league&apikey=3a181f1c').then(function(response){
      $('#justiceL').append('<b>' + (response.Title) + '</b>');
      $('#JusticeLPoster').attr('src' , response.Poster);
      $('#plotJustice').append(response.Plot);
      $('#jLeagueIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#jLeagueRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    }



    /*$('#firstBattle').append("<div id='firstMarvel' class='col-xs-6 col-sm-6 col-ms-6 col-lg-6>" +
      "<div class=thumbnail'><img src='" + title(spiderMan)"' alt="...">")*/
/*
*funcion comentarios
*/

  $("#btn").click(function comm(){
    var comment = $("#comment").val();
    $("#post").append("<span id='usuario'><i class='fa fa-user-circle' aria-hidden='true'></i></span>" + comment + "</br>"+"</div>" );
  });

});



/*
  function image (movie){
    $.getJSON(movie).then(function(response){
    var poster = ("<img src='"+ response.Poster +"'>");
  });
  }*/




