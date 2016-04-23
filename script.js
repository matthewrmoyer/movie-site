$(document).ready(function(){




var data = {

  movies: [
  {"show_title":"Kill Bill: Vol. 2","unit":84,"show_id":60032563, "netflix-url":"https://www.netflix.com/search/", "release_year":"2004","movieIMDB": "8.0", "movieRottenTomatoes":"84", "rating":"3.8","category":"Action & Adventure","show_cast":"Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton","director":"Quentin Tarantino","summary":"The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60032563.jpg","mediatype":0,"runtime":"137 min"},
  {"show_title":"Kill Bill: Vol. 1","unit":87,"show_id":60031236,"netflix-url":"https://www.netflix.com/search/", "release_year":"2003","movieIMDB":"8.1", "movieRottenTomatoes":"85", "rating":"3.8","category":"Action & Adventure","show_cast":"Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu","director":"Quentin Tarantino","summary":"An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60031236.jpg","mediatype":0,"runtime":"111 min"},
  {"show_title":"Pulp Fiction","unit":914,"show_id":880640,"netflix-url":"https://www.netflix.com/search/", "release_year":"1994","movieIMDB":"8.9", "movieRottenTomatoes":"94", "rating":"4.1","category":"Oscar-winning Movies","show_cast":"John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros","director":"Quentin Tarantino","summary":"Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.","poster":"http:\/\/netflixroulette.net\/api\/posters\/880640.jpg","mediatype":0,"runtime":"154 min"},
  {"show_title":"Jackie Brown","unit":943,"show_id":60010514,"netflix-url":"https://www.netflix.com/search/", "release_year":"1997","movieIMDB":"7.5", "movieRottenTomatoes":"87", "rating":"3.7","category":"Dramas","show_cast":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda, Michael Keaton, Robert De Niro, Michael Bowen, Chris Tucker, Lisa Gay Hamilton, Tommy 'Tiny' Lister","director":"Quentin Tarantino","summary":"Jackie Brown is an aging flight attendant who smuggles cash on the side. But when she's busted and pressured to help with an investigation, she plans to play the opposing forces against each other and walk away with the dough.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60010514.jpg","mediatype":0,"runtime":"154 min"},
  {"show_title":"Reservoir Dogs", "unit":1151,"show_id":902003,"netflix-url":"https://www.netflix.com/search/", "release_year":"1992","movieIMDB":"8.4", "movieRottenTomatoes":"90", "rating":"4.0","category":"Independent Movies","show_cast":"Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi, Chris Penn, Lawrence Tierney, Edward Bunker, Quentin Tarantino, Randy Brooks, Kirk Baltz","director":"Quentin Tarantino","summary":"Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.","poster":"http:\/\/netflixroulette.net\/api\/posters\/902003.jpg","mediatype":0,"runtime":"99 min"},
  {"show_title":"Four Rooms","unit":1463,"show_id":520179,"netflix-url":"https://www.netflix.com/search/","release_year":"1995","movieIMDB":"6.7", "movieRottenTomatoes":"14", "rating":"3.6","category":"Comedies","show_cast":"Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor","director":"Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell","summary":"One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.","poster":"http:\/\/netflixroulette.net\/api\/posters\/520179.jpg","mediatype":0,"runtime":"98 min"},
  {"show_title":"Django Unchained","unit":17300,"show_id":70230640,"netflix-url":"https://www.netflix.com/search/", "release_year":"2012","movieIMDB":"8.5", "movieRottenTomatoes":"88", "rating":"4.0","category":"Dramas","show_cast":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, Samuel L. Jackson, Walton Goggins, Dennis Christopher, James Remar, Michael Parks, Don Johnson","director":"Quentin Tarantino","summary":"Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70230640.jpg","mediatype":0,"runtime":"N\/A"}
  ]

}



function imdbSort(){


    $("#movies").empty();
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
  $(".movie-imdb-rating:empty").parents(".module-movie").hide();




};
}

function rottenTomatoesSort(){
    $("#movies").empty();
    data.movies.sort(function(a, b){
    return b.movieRottenTomatoes-a.movieRottenTomatoes
  });
   for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
  $(".movie-rotten-tomatoes-rating:empty").parents(".module-movie").hide();

};
};


function netflixRatingSort() {
  $("#movies").empty();
  data.movies.sort(function(a,b){
    return b.rating-a.rating
  });
  for(i=0; i<data.movies.length; i++){
    var html = template(data.movies[i]);
    $("#movies").append(html);
      $(".movie-netflix-rating:empty").parents(".module-movie").hide();

  }
}

function showDrama(){
  $("#movies").empty();
  data.movies.sort(function(a,b){
    return b.rating-a.rating
  });
  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Dramas'))").remove();
}

function showComedy(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Comedies'))").remove();
}
function showAction(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Action'))").remove();
}
function showAdventure(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Adventure'))").remove();
}
function showCrime(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Crime'))").remove();
}
function showHorror(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Horror'))").remove();
}
function showSciFi(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Sci-Fi'))").remove();
}


$("#tab-drama").on("click", showDrama);
$("#tab-comedy").on("click", showComedy);
$("#tab-action").on("click", showAction);
$("#tab-adventure").on("click", showAdventure);
$("#tab-crime").on("click", showCrime);
$("#tab-horror").on("click", showHorror);
$("#tab-sci-fi").on("click", showSciFi);



//grabbing guts of #media-template (getter)
var source = $("#media-template").html();
//template = handlebars complile method being passed "source" from above
//template is a function we can call
var template = Handlebars.compile(source);

for (i = 0; i < data.movies.length; i++) {

	//calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};

//cannot use $(".module-movie").on("click", function(){   }); with dynamically created elements, but you can use this!!!!!!
//works for anything with .module-movie class inside of body
 /*
  $('body').on('click', ".module-movie", function() {
    this.remove();
});

*/

$("#tab-netflix-rating-sort").on("click", netflixRatingSort);

$("#tab-imdb-sort").on("click",imdbSort);

$("#tab-rotten-tomatoes-sort").on("click",rottenTomatoesSort);
/* cannot use the following for for dynamically created elements:
$(".module-movie").hover(function(){
    }, function(){
    $(this).removeClass("module-movie-hovered");
        $(".description").addClass("hidden");
});
*/

$('body').on('mouseenter', ".module-movie", function() {





    $(".description").removeClass("hidden");

   

});



$('body').on('mouseleave', ".module-movie", function() {


    $(".description").addClass("hidden");
   

});

$("#search-button").on("click", function() {
var searchInput = $("#search-bar").val();
console.log(searchInput);
    $("#movies").empty(),
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
/*  
could use this instead. it makes a new methond called containsNC
 $.extend($.expr[":"], {
  "containsNC": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
*/

//makes contains method case insensitive, changes core funtionality of the method
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$(".module-movie:not(:contains('"+searchInput+"'))").remove();
});



$("#search-bar").bind("keypress",function(e) {

  if(event.keyCode == 13){
    event.preventDefault();
    $("#movies").empty(),
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
    $("#search-button").click();
  }
}); 




});