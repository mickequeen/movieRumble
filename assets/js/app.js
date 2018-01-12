
var idHeartOne = 0;
var idBombOne = 0;
var idTrashOne = 0;
var idHeartTwo = 0;
var idBombTwo = 0;
var idTrashTwo = 0;
var idHeartThree = 0;
var idBombThree = 0;
var idTrashThree = 0;
var idHeartFour = 0;
var idBombFour = 0;
var idTrashFour = 0;
var idHeartFive = 0;
var idBombFive = 0;
var idTrashFive = 0;
var idHeartSix = 0;
var idBombSix = 0;
var idTrashSix = 0;
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
    $('#firstBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
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
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameOne' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentOne' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareOne' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>");

    $("#shareOne").click(function (){
      var comment = $("#userCommentOne").val();
      var userOne = $("#userNameOne").val();
      $("#userNameOne").val("");
      $("#userCommentOne").val("");
      var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
      $("#contFirstCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com '><p id='usuario'>" + 
        "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userOne + '</b> Posted at: ' + timePost + "</p><p>" + comment +
        "</p><div id='icons'><i id='heartOne_" + idHeartOne +
        "' class='fas fa-heart '></i><i id='bombOne_" + idBombOne +
        "' class='fas fa-bomb '></i><a id='basura'><i id='trashOne_" + idTrashOne +
        "' class='fas fa-trash-alt '></i></a></div></div>");


        var idCoraOne = idHeartOne;
        $("#heartOne_" + idHeartOne).click(function(){
          $(this).toggleClass('red');
          $("#bombOne_" + idCoraOne).removeClass('black');
        });
        var idBombiOne = idBombOne;
        $('#bombOne_' + idBombOne).click(function(){
          $(this).toggleClass('black');
          $('#heartOne_' + idBombiOne).removeClass('red');
        });
        var idBasuritaOne = idTrashOne;
        $("#trashOne_" + idTrashOne).click(function(){
          $(this).parent().parent().parent().remove();
        });
        idHeartOne++;
        idBombOne++;
        idTrashOne++;
    });
/*
*segunda batalla, primera película
*/
    $('#secondBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
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

    $('#secondBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");


    $('#secondBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
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
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameTwo' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentTwo' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareTwo' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

/*
*funcion comentarios
*/

  $("#shareTwo").click(function (){
    var comment = $("#userCommentTwo").val();
    $("#userCommentTwo").val("");
    var userTwo = $("#userNameTwo").val();
    $("#userNameTwo").val("");
    var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
    $("#contSecondCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com'><p id='usuario'>" + 
      "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userTwo + '</b> Posted at: ' + timePost + "</p><p>" + comment +
      "</p><div id='icons'><i id='heartTwo_" + idHeartTwo +
      "' class='fas fa-heart '></i><i id='bombTwo_" + idBombTwo +
      "' class='fas fa-bomb '></i><a id='basura'><i id='trashTwo_" + idTrashTwo +
      "' class='fas fa-trash-alt '></i></a></div></div>");

  var idCoraTwo = idHeartTwo;
    $("#heartTwo_" + idHeartTwo).click(function(){
      $(this).toggleClass('red');
      $("#bombTwo_" + idCoraTwo).removeClass('black');
    });
    var idBombiTwo = idBombTwo;
    $('#bombTwo_' + idBombTwo).click(function(){
      $(this).toggleClass('black');
      $('#heartTwo_' + idBombiTwo).removeClass('red');
    });
    var idBasuritaTwo = idTrashTwo;
    $("#trashTwo_" + idTrashTwo).click(function(){
      $(this).parent().parent().parent().remove();
    });
    idHeartTwo++;
    idBombTwo++;
    idTrashTwo++;
  });
/*
*tercera batalla, primera pelicula
*/
    $('#thirdBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
    "<div class='thumbnail marvel'><img id='ironManPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='ironMan'>" + "</h3><p class='plot' id='plotironMan'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='ironManIMDataBase'></p><p id='ironManRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoironMan ();
    function infoironMan (){
    $.getJSON('http://www.omdbapi.com/?t=iron+man&apikey=3a181f1c').then(function(response){
      $('#ironMan').append('<b>' + (response.Title) + '</b>');
      $('#plotironMan').append(response.Plot);
      $('#ironManPoster').attr('src' , response.Poster);
      $('#ironManIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#ironManRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#thirdBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");


    $('#thirdBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
    "<div class='thumbnail DC'><img id='batmanBeginsPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='batmanBegins'>" + "</h3><p class='plot' id='plotbatmanBegins'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='batmanBeginsIMDataBase'></p><p id='batmanBeginsRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoBatmanBegins ();
    function infoBatmanBegins (){
    $.getJSON('http://www.omdbapi.com/?t=batman+begins&apikey=3a181f1c').then(function(response){
      $('#batmanBegins').append('<b>' + (response.Title) + '</b>');
      $('#plotbatmanBegins').append(response.Plot);
      $('#batmanBeginsPoster').attr('src' , response.Poster);
      $('#batmanBeginsIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#batmanBeginsRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#commentsThird').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameThree' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentThree' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareThree' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

/*
*funcion comentarios
*/

  $("#shareThree").click(function (){
    var comment = $("#userCommentThree").val();
    var userThree = $("#userNameThree").val();
    $("#userCommentThree").val("");
    $("#userNameThree").val("");
    var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
    $("#contThirdCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com'><p id='usuario'>" + 
      "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userThree + '</b> Posted at: ' + timePost + "</p><p>" + comment +
      "</p><div id='icons'><i id='heartThree_" + idHeartThree +
      "' class='fas fa-heart '></i><i id='bombThree_" + idBombThree +
      "' class='fas fa-bomb '></i><a id='basura'><i id='trashThree_" + idTrashThree +
      "' class='fas fa-trash-alt '></i></a></div></div>");

  var idCoraThree = idHeartThree;
    $("#heartThree_" + idHeartThree).click(function(){
      $(this).toggleClass('red');
      $("#bombThree_" + idCoraThree).removeClass('black');
    });
    var idBombiThree = idBombThree;
    $('#bombThree_' + idBombThree).click(function(){
      $(this).toggleClass('black');
      $('#heartThree_' + idBombiThree).removeClass('red');
    });
    var idBasuritaThree = idTrashThree;
    $("#trashThree_" + idTrashThree).click(function(){
      $(this).parent().parent().parent().remove();
    });
    idHeartThree++;
    idBombThree++;
    idTrashThree++;
  });
/*
*cuarta batalla
*/
    $('#fourthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
    "<div class='thumbnail marvel'><img id='ironMan2Poster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='ironMan2'>" + "</h3><p class='plot' id='plotironMan2'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='ironMan2IMDataBase'></p><p id='ironMan2Rotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoironMan2 ();
    function infoironMan2 (){
    $.getJSON('http://www.omdbapi.com/?t=iron+man+2&apikey=3a181f1c').then(function(response){
      $('#ironMan2').append('<b>' + (response.Title) + '</b>');
      $('#plotironMan2').append(response.Plot);
      $('#ironMan2Poster').attr('src' , response.Poster);
      $('#ironMan2IMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#ironMan2Rotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#fourthBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");


    $('#fourthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
    "<div class='thumbnail DC'><img id='darkKnightPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='darkKnight'>" + "</h3><p class='plot' id='plotdarkKnight'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='darkKnightIMDataBase'></p><p id='darkKnightRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infodarkKnight ();
    function infodarkKnight (){
    $.getJSON('http://www.omdbapi.com/?t=the+dark+knight&apikey=3a181f1c').then(function(response){
      $('#darkKnight').append('<b>' + (response.Title) + '</b>');
      $('#plotdarkKnight').append(response.Plot);
      $('#darkKnightPoster').attr('src' , response.Poster);
      $('#darkKnightIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#darkKnightRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#commentsFourth').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameFour' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentFour' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareFour' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

/*
*funcion comentarios
*/

  $("#shareFour").click(function (){
    var comment = $("#userCommentFour").val();
    var userFour = $("#userNameFour").val();
    $("#userNameFour").val("");
    $("#userCommentFour").val("");
    var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
    $("#contFouthCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com'><p id='usuario'>" + 
      "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userFour + '</b> Posted at: ' + timePost + "</p><p>" + comment +
      "</p><div id='icons'><i id='heartFour_" + idHeartFour +
      "' class='fas fa-heart '></i><i id='bombFour_" + idBombFour +
      "' class='fas fa-bomb '></i><a id='basura'><i id='trashFour_" + idTrashFour +
      "' class='fas fa-trash-alt '></i></a></div></div>");

  var idCoraFour = idHeartFour;
    $("#heartFour_" + idHeartFour).click(function(){
      $(this).toggleClass('red');
      $("#bombFour_" + idCoraFour).removeClass('black');
    });
    var idBombiFour = idBombFour;
    $('#bombFour_' + idBombFour).click(function(){
      $(this).toggleClass('black');
      $('#heartFour_' + idBombiFour).removeClass('red');
    });
    var idBasuritaFour = idTrashFour;
    $("#trashFour_" + idTrashFour).click(function(){
      $(this).parent().parent().parent().remove();
    });
    idHeartFour++;
    idBombFour++;
    idTrashFour++;
  });
/*
*quinta batalla
*/
    $('#fifthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
    "<div class='thumbnail marvel'><img id='ironMan3Poster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='ironMan3'>" + "</h3><p class='plot' id='plotironMan3'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='ironMan3IMDataBase'></p><p id='ironMan3Rotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoironMan3 ();
    function infoironMan3 (){
    $.getJSON('http://www.omdbapi.com/?t=iron+man+3&apikey=3a181f1c').then(function(response){
      $('#ironMan3').append('<b>' + (response.Title) + '</b>');
      $('#plotironMan3').append(response.Plot);
      $('#ironMan3Poster').attr('src' , response.Poster);
      $('#ironMan3IMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#ironMan3Rotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#fifthBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");


    $('#fifthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
    "<div class='thumbnail DC'><img id='darkKnightRisesPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='darkKnightRises'>" + "</h3><p class='plot' id='plotdarkKnightRises'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='darkKnightRisesIMDataBase'></p><p id='darkKnightRisesRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infodarkKnightRises ();
    function infodarkKnightRises (){
    $.getJSON('http://www.omdbapi.com/?t=the+dark+knight+rises&apikey=3a181f1c').then(function(response){
      $('#darkKnightRises').append('<b>' + (response.Title) + '</b>');
      $('#plotdarkKnightRises').append(response.Plot);
      $('#darkKnightRisesPoster').attr('src' , response.Poster);
      $('#darkKnightRisesIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#darkKnightRisesRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#commentsFifth').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameFive' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentFive' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareFive' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

/*
*funcion comentarios
*/

  $("#shareFive").click(function (){
    var comment = $("#userCommentFive").val();
    var userFive = $("#userNameFive").val();
    $("#userNameFive").val("");
    $("#userCommentFive").val("");
    var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
    $("#contFifthCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com'><p id='usuario'>" + 
      "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userFive + '</b> Posted at: ' + timePost + "</p><p>" + comment +
      "</p><div id='icons'><i id='heartFive_" + idHeartFive +
      "' class='fas fa-heart '></i><i id='bombFive_" + idBombFive +
      "' class='fas fa-bomb '></i><a id='basura'><i id='trashFive_" + idTrashFive +
      "' class='fas fa-trash-alt '></i></a></div></div>");

  var idCoraFive = idHeartFive;
    $("#heartFive_" + idHeartFive).click(function(){
      $(this).toggleClass('red');
      $("#bombFive_" + idCoraFive).removeClass('black');
    });
    var idBombiFive = idBombFive;
    $('#bombFive_' + idBombFive).click(function(){
      $(this).toggleClass('black');
      $('#heartFive_' + idBombiFive).removeClass('red');
    });
    var idBasuritaFive = idTrashFive;
    $("#trashFive_" + idTrashFive).click(function(){
      $(this).parent().parent().parent().remove();
    });
    idHeartFive++;
    idBombFive++;
    idTrashFive++;
  });
/*
*sexta batalla, primera peli
*/
    $('#sixthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1'>" +
    "<div class='thumbnail marvel'><img id='ThorPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='Thor'>" + "</h3><p class='plot' id='plotThor'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='ThorIMDataBase'></p><p id='ThorRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infoThor ();
    function infoThor (){
    $.getJSON('http://www.omdbapi.com/?t=thor&apikey=3a181f1c').then(function(response){
      $('#Thor').append('<b>' + (response.Title) + '</b>');
      $('#plotThor').append(response.Plot);
      $('#ThorPoster').attr('src' , response.Poster);
      $('#ThorIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#ThorRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#sixthBattle').append("<div class='col-xs-12 col-sm-12 col-md-1 col-md-pull-2 col-lg-1 col-lg-pull-2'>" +
      "<img class='versus' src='assets/img/versus.png' alt='versus'></div>");


    $('#sixthBattle').append("<div class='col-xs-12 col-sm-12 col-md-5 col-md-pull-1 col-lg-5 col-lg-pull-1'>" +
    "<div class='thumbnail DC'><img id='manOfSteelPoster' alt='...''>" +
      "<div class='caption'><h3 class='title' id='manOfSteel'>" + "</h3><p class='plot' id='plotmanOfSteel'></p>" +
      "<h4><b>Critics</b></h4>" +
      "<p id='manOfSteelIMDataBase'></p><p id='manOfSteelRotten'></p>" +
      "<p> <i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i>" +
      "<i class='fa fa-star movie' aria-hidden='true'></i></p>" +
      "</div></div></div>")
   infomanOfSteel ();
    function infomanOfSteel (){
    $.getJSON('http://www.omdbapi.com/?t=man+of+steel&apikey=3a181f1c').then(function(response){
      $('#manOfSteel').append('<b>' + (response.Title) + '</b>');
      $('#plotmanOfSteel').append(response.Plot);
      $('#manOfSteelPoster').attr('src' , response.Poster);
      $('#manOfSteelIMDataBase').append("<b>Source: </b>" + (response.Ratings[0].Source) + "; <b>Rating: </b>" + (response.Ratings[0].Value));
      $('#manOfSteelRotten').append("<b>Source: </b>" + (response.Ratings[1].Source) + "; <b>Rating: </b>" + (response.Ratings[1].Value));
      });
    };

    $('#commentsSixth').append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10'>" + 
      "<div class='widget-area no-padding blank'>" +
      "<div class='input-group'><span class='input-group-addon' id='basic-addon1'><i class='fas fa-user'></i></span>" +
      "<input id='userNameSix' type='text' class='form-control' placeholder='Username' aria-describedby='basic-addon1'></div>" +
      "<div class='status-upload'>" +
      "<form action='javascript:void(0)'><textarea id='userCommentSix' placeholder='Share your opinion!'></textarea>" +
      "<button id='shareSix' class='btn btn-info'><i class='fas fa-bomb'></i>Post</button>" +
      "</form></div></div></div>")

/*
*funcion comentarios
*/

  $("#shareSix").click(function (){
    var comment = $("#userCommentSix").val();
    var userSix = $("#userNameSix").val();
    $("#userNameSix").val("");
    $("#userCommentSix").val("");
    var timePost = (new Date().getHours() + ": " + new Date().getMinutes());
    $("#contSixthCom").append("<div class='col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 com'><p id='usuario'>" + 
      "<i class='fa fa-user-circle' aria-hidden='true'></i><b>" + userSix + '</b> Posted at: ' + timePost + "</p><p>" + comment +
      "</p><div id='icons'><i id='heartFive_" + idHeartFive +
      "' class='fas fa-heart '></i><i id='bombFive_" + idBombFive +
      "' class='fas fa-bomb '></i><a id='basura'><i id='trashFive_" + idTrashFive +
      "' class='fas fa-trash-alt '></i></a></div></div>");

  var idCoraSix = idHeartSix;
    $("#heartSix_" + idHeartSix).click(function(){
      $(this).toggleClass('red');
      $("#bombSix_" + idCoraSix).removeClass('black');
    });
    var idBombiSix = idBombSix;
    $('#bombSix_' + idBombSix).click(function(){
      $(this).toggleClass('black');
      $('#heartSix_' + idBombiSix).removeClass('red');
    });
    var idBasuritaSix = idTrashSix;
    $("#trashSix_" + idTrashSix).click(function(){
      $(this).parent().parent().parent().remove();
    });
    idHeartSix++;
    idBombSix++;
    idTrashSix++;
  });
});



/*
  function image (movie){
    $.getJSON(movie).then(function(response){
    var poster = ("<img src='"+ response.Poster +"'>");
  });
  }*/

