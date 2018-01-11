
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
  /*
  *Modal Login
  */
  $ ('#login').click (function(){
    $ ('#modal').modal ();
  });

  /*
  *Modal Registrate
  */
  $ ('.registrar-btn').click (function(){
    $ ('#modal2').modal ();
  });


/*
*thumbnail avengers
*/
    $('#firstBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset'>" +
    "<div class='thumbnail marvel'><img id='ultronPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='ultron'>" + "</h3><p class='plot' id='plotUltron'></p>" +
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
    };

    $('#firstBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");
/*
*Thumbnail Justice League
*/
    $('#firstBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
    "<div class='thumbnail DC'><img id='JusticeLPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='justiceL'>" + "</h3><p class='plot' id='plotJustice'></p>" +
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
/*
*sección comentarios primera batalla
*/
    $('#commentsFirst').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'><div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentOne' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareOne' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>");

    $("#shareOne").click(function (){
      var comment = $("#userCommentOne").val();
      $("#userCommentOne").val("");
      $("#contFirstCom").append("<div class='col-xs-10 col-sm-10 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2> </col-lg-offset-2> com'><p id='usuario'><i class='fa fa-user-circle' aria-hidden='true'></i></p><p>" + comment + "</p></div>" );
    });
/*
*segunda batalla, primera película
*/
    $('#secondBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset'>" +
    "<div class='thumbnail marvel'><img id='civilWarPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='civilWar'>" + "</h3><p class='plot' id='plotCivilWar'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='civilWarIMDataBase'></p><p id='civilWarRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoCivilWar ();
    function infoCivilWar (){
    $.getJSON('https://www.omdbapi.com/?t=captain+america+civil+war&apikey=3a181f1c').then(function(response){
      $('#civilWar').append('<b>' + (response.Title) + '</b>');
      $('#plotCivilWar').append(response.Plot);
      $('#civilWarPoster').attr('src' , response.Poster);
      $('#civilWarIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#civilWarRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    /*$('#firstBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");*/

    $('#secondBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-lg-5'>" +
    "<div class='thumbnail DC'><img id='BvsSPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='BvsS'>" + "</h3><p class='plot' id='plotBvsS'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='BvsSIMDataBase'></p><p id='BvsSRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoBatmanVSuperman ();
    function infoBatmanVSuperman (){
    $.getJSON('https://www.omdbapi.com/?t=dawn+of+justice&apikey=3a181f1c').then(function(response){
      $('#BvsS').append('<b>' + (response.Title) + '</b>');
      $('#plotBvsS').append(response.Plot);
      $('#BvsSPoster').attr('src' , response.Poster);
      $('#BvsSIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#BvsSRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#commentsSecond').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'><div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentTwo' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareTwo' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

    /*$('#firstBattle').append("<div id='firstMarvel' class='col-xs-6 col-sm-6 col-ms-6 col-lg-6>" +
      "<div class=thumbnail'><img src='" + title(spiderMan)"' alt="...">")*/
/*
*funcion comentarios
*/

  $("#shareTwo").click(function (){
    var comment = $("#userCommentTwo").val();
    $("#userCommentUTwo").val("");
    $("#contSecondCom").append("<div class='col-xs-10 col-sm-10 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2> </col-lg-offset-2> com'><p id='usuario'><i class='fa fa-user-circle' aria-hidden='true'></i></p><p>" + comment + "</p></div>" );
  });

});



/*
  function image (movie){
    $.getJSON(movie).then(function(response){
    var poster = ("<img src='"+ response.Poster +"'>");
  });
  }*/




