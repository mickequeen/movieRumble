
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


  title(spiderMan)

  function title(movie){
    $.getJSON(movie).then(function(response){
      console.log("título: " + response.Title);
    });
  }
    /*$('#firstBattle').append("<div id='firstMarvel' class='col-xs-6 col-sm-6 col-ms-6 col-lg-6>" +
      "<div class=thumbnail'><img src='" + title(spiderMan)"' alt="...">")*/
});


/*
*funcion comentarios
*/

$("#btn").click(function comm(){
  var comment = $("#comment").val();
  $("#post").append("<span id='usuario'><i class='fa fa-user-circle' aria-hidden='true'></i></span>" + comment + "</br>"+"</div>" );
    
});



