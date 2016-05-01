$(document).ready(function(){




var data = {

  movies: [
  {"show_title":"Kill Bill: Vol. 2","unit":84,"show_id":60032563, "netflix-url":"https://www.netflix.com/search/", "release_year":"2004","movieIMDB": "8.0", "movieRottenTomatoes":"84", "rating":"3.8","category":"Action & Adventure","show_cast":"Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton","director":"Quentin Tarantino","summary":"The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60032563.jpg","mediatype":0,"runtime":"137 min"},
  {"show_title":"Kill Bill: Vol. 1","unit":87,"show_id":60031236,"netflix-url":"https://www.netflix.com/search/", "release_year":"2003","movieIMDB":"8.1", "movieRottenTomatoes":"85", "rating":"3.8","category":"Action & Adventure","show_cast":"Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu","director":"Quentin Tarantino","summary":"An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60031236.jpg","mediatype":0,"runtime":"111 min"},
  {"show_title":"Pulp Fiction","unit":914,"show_id":880640,"netflix-url":"https://www.netflix.com/search/", "release_year":"1994","movieIMDB":"8.9", "movieRottenTomatoes":"94", "rating":"4.1","category":"Oscar-winning Movies","show_cast":"John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros","director":"Quentin Tarantino","summary":"Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.","poster":"http:\/\/netflixroulette.net\/api\/posters\/880640.jpg","mediatype":0,"runtime":"154 min"},
  {"show_title":"Jackie Brown","unit":943,"show_id":60010514,"netflix-url":"https://www.netflix.com/search/", "release_year":"1997","movieIMDB":"7.5", "movieRottenTomatoes":"87", "rating":"3.7","category":"Dramas","show_cast":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda, Michael Keaton, Robert De Niro, Michael Bowen, Chris Tucker, Lisa Gay Hamilton, Tommy 'Tiny' Lister","director":"Quentin Tarantino","summary":"Jackie Brown is an aging flight attendant who smuggles cash on the side. But when she's busted and pressured to help with an investigation, she plans to play the opposing forces against each other and walk away with the dough.","poster":"http:\/\/netflixroulette.net\/api\/posters\/60010514.jpg","mediatype":0,"runtime":"154 min"},
  {"show_title":"Reservoir Dogs", "unit":1151,"show_id":902003,"netflix-url":"https://www.netflix.com/search/", "release_year":"1992","movieIMDB":"8.4", "movieRottenTomatoes":"90", "rating":"4.0","category":"Independent Movies","show_cast":"Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi, Chris Penn, Lawrence Tierney, Edward Bunker, Quentin Tarantino, Randy Brooks, Kirk Baltz","director":"Quentin Tarantino","summary":"Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.","poster":"http:\/\/netflixroulette.net\/api\/posters\/902003.jpg","mediatype":0,"runtime":"99 min"},
  {"show_title":"Four Rooms","unit":1463,"show_id":520179,"netflix-url":"https://www.netflix.com/search/","release_year":"1995","movieIMDB":"6.7", "movieRottenTomatoes":"14", "rating":"3.6","category":"Comedies","show_cast":"Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor","director":"Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell","summary":"One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.","poster":"http:\/\/netflixroulette.net\/api\/posters\/520179.jpg","mediatype":0,"runtime":"98 min"},
  {"show_title":"Django Unchained","unit":17300,"show_id":70230640,"netflix-url":"https://www.netflix.com/search/", "release_year":"2012","movieIMDB":"8.5", "movieRottenTomatoes":"88", "rating":"4.0","category":"Dramas","show_cast":"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, Samuel L. Jackson, Walton Goggins, Dennis Christopher, James Remar, Michael Parks, Don Johnson","director":"Quentin Tarantino","summary":"Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70230640.jpg","mediatype":0,"runtime":"N\/A"},



  {"unit":134,"show_id":600346,"show_title":"Hook","release_year":"1991","rating":"3.5","category":"Children & Family Movies","show_cast":"Dustin Hoffman, Robin Williams, Julia Roberts, Bob Hoskins, Maggie Smith, Caroline Goodall, Charlie Korsmo, Amber Scott, Laurel Cronin, Phil Collins","director":"Steven Spielberg","summary":"Peter Pan, the boy who wasn't supposed to grow up, did just that. But vengeful Capt. Hook kidnaps Peter's kids, forcing him to return to Neverland.","poster":"http:\/\/netflixroulette.net\/api\/posters\/600346.jpg","mediatype":0,"runtime":"144 min"},{"unit":287,"show_id":70095540,"show_title":"Close Encounters of the Third Kind: 30th Anniversary Ultimate Edition","release_year":"1977","rating":"3.9","category":"Sci-Fi & Fantasy","show_cast":"Richard Dreyfuss, Fran\u00e7ois Truffaut, Teri Garr, Melinda Dillon, Bob Balaban, J. Patrick McNamara, Warren J. Kemmerling, Roberts Blossom, Philip Dodds, Cary Guffey","director":"Steven Spielberg","summary":"A cable line worker, a single mother and others who sight mysterious lights in the sky are inexplicably drawn to the same isolated spot in the desert.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70095540.jpg","mediatype":0,"runtime":"None"},{"unit":354,"show_id":1181506,"show_title":"Amistad","release_year":"1997","rating":"3.8","category":"Dramas","show_cast":"Morgan Freeman, Nigel Hawthorne, Anthony Hopkins, Djimon Hounsou, Matthew McConaughey, David Paymer, Pete Postlethwaite, Stellan Skarsg\u00e5rd, Razaaq Adoti, Abu Bakaar Fofanah","director":"Steven Spielberg","summary":"Steven Spielberg directed this story about the 1839 revolt aboard Spanish slave ship La Amistad and the uprising's tragic aftermath.","poster":"http:\/\/netflixroulette.net\/api\/posters\/1181506.jpg","mediatype":0,"runtime":"155 min"},{"unit":4712,"show_id":70121502,"show_title":"The Adventures of Tintin","release_year":"2011","rating":"3.8","category":"Children & Family Movies","show_cast":"Andy Serkis, Daniel Craig, Nick Frost, Simon Pegg, Toby Jones, Mackenzie Crook, Daniel Mays, Gad Elmaleh, Joe Starr, Kim Stengel","director":"Steven Spielberg","summary":"Blockbuster filmmakers Steven Spielberg and Peter Jackson team up for this 3-D motion capture adaptation of Georges Remi's classic comic strip, centered around the adventures of fearless young journalist Tintin and his trusty dog, Snowy.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70121502.jpg","mediatype":0,"runtime":"107 min"},{"unit":8465,"show_id":206584,"show_title":"1941","release_year":"1979","rating":"3.2","category":"Comedies","show_cast":"Dan Aykroyd, Ned Beatty, John Belushi, Lorraine Gary, Murray Hamilton, Christopher Lee, Tim Matheson, Toshir\u00f4 Mifune, Warren Oates, Treat Williams","director":"Steven Spielberg","summary":"In the days after the Japanese attack on Pearl Harbor, panic sets in among California's citizens, who imagine their shores as the next target.","poster":"http:\/\/netflixroulette.net\/api\/posters\/206584.jpg","mediatype":0,"runtime":"N\/A"},





  {"unit":582,"show_id":18907685,"show_title":"Taxi Driver","release_year":"1976","rating":"3.8","category":"Classic Movies","show_cast":"Robert De Niro, Jodie Foster, Cybill Shepherd, Albert Brooks, Harvey Keitel, Leonard Harris, Peter Boyle, Victor Argo","director":"Martin Scorsese","summary":"After a cute political campaign worker spurns him, an unhinged New York City cabbie decides to assassinate her candidate. Meanwhile, he tries to protect a child prostitute from a smooth-talking pimp in this gripping tale of urban decay and insanity.","poster":"http:\/\/netflixroulette.net\/api\/posters\/18907685.jpg","mediatype":0,"runtime":"113 min"},{"unit":1095,"show_id":70020699,"show_title":"Raging Bull","release_year":"1980","rating":"3.9","category":"Oscar-winning Movies","show_cast":"Robert De Niro, Cathy Moriarty, Joe Pesci, Frank Vincent, Nicholas Colasanto, Theresa Saldana, Mario Gallo, Frank Adonis, Joseph Bono","director":"Martin Scorsese","summary":"Robert De Niro won an Oscar for his portrayal of self-destructive boxer Jake LaMotta in Martin Scorsese's widely acclaimed biopic, which paints a raw portrait of a tormented soul unable to control his violent outbursts.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70020699.jpg","mediatype":0,"runtime":"129 min"},{"unit":3815,"show_id":28000446,"show_title":"The Last Temptation of Christ","release_year":"1988","rating":"3.4","category":"Dramas","show_cast":"Willem Dafoe, Harvey Keitel, Verna Bloom, Barbara Hershey, Barry Miller, Gary Basaraba, Irvin Kershner, Victor Argo, Paul Herman, John Lurie","director":"Martin Scorsese","summary":"Nikos Kazantzakis's landmark novel comes to life in director Martin Scorsese's moving, spiritual and highly controversial film that challenges the Christian notion that Jesus (Willem Dafoe) was both a man and a divine being. With an all-star cast that includes Harvey Keitel, Barbara Hershey, Harry Dean Stanton and David Bowie, the film portrays Jesus as unmistakably human, susceptible to the desires, doubts and temptations that all men face.","poster":"http:\/\/netflixroulette.net\/api\/posters\/28000446.jpg","mediatype":0,"runtime":"164 min"},{"unit":4795,"show_id":70202136,"show_title":"Hugo","release_year":"2011","rating":"3.8","category":"Oscar-winning Movies","show_cast":"Ben Kingsley, Sacha Baron Cohen, Asa Butterfield, Chlo\u00eb Grace Moretz, Ray Winstone, Emily Mortimer, Christopher Lee, Helen McCrory, Michael Stuhlbarg, Frances de la Tour","director":"Martin Scorsese","summary":"When his father dies, 12-year-old orphan Hugo takes up residence behind the walls of a Parisian train station. There, he meets Isabelle, the daughter of filmmaker Georges M\u00e9li\u00e8s, who holds the key to Hugo's destiny.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70202136.jpg","mediatype":0,"runtime":"126 min"},{"unit":32074,"show_id":70266676,"show_title":"The Wolf of Wall Street","release_year":"2013","rating":"3.9","category":"Dramas","show_cast":"Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey, Kyle Chandler, Jon Bernthal, Jon Favreau, Rob Reiner, Jean Dujardin, Joanna Lumley, Cristin Milioti, Christine Ebersole, Shea Whigham, Katarina Cas, P.J. Byrne, Kenneth Choi, Brian Sacca, H","director":"Martin Scorsese","summary":"Martin Scorcese's high-rolling Wall Street drama is based on the memoirs of stockbroker Jordan Belfort, whose giddy career ended in federal prison.","poster":"http:\/\/netflixroulette.net\/api\/posters\/70266676.jpg","mediatype":0,"runtime":"N\/A"}
  





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
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();



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
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
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
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
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
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showComedy(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Comedies'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showAction(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Action'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showAdventure(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Adventure'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showCrime(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Crime'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showHorror(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Horror'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
}

function showSciFi(){
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
$(".module-movie:not(:contains('Sci-Fi'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();
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

//hover doesn't do anything on small screens so that the click function will work correctly, tablets/phones = no hover
$('body').on('mouseenter', ".module-movie", function() {
  if ($(window).width()<=500){
      ///nothing
  }
    else {
      $(".description").removeClass("hidden");
  }
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

//makes contains method case insensitive, changes core funtionality of the Jquery method
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

//lets user click to see description, tablets/phones = no hover
$(".module-movie").on("click", function(){
  if($(window).width()<=500)
    $(".description").toggleClass("hidden");
});



//remove these divs if empty
$(".movie-imdb-rating:empty").remove();
$(".movie-rotten-tomatoes-rating:empty").remove();



});