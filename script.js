$(document).ready(function(){




var data = {
  movies: [{
    movieTitle: "Ender's Game",
    movieDirector: "Gavin Hood",
    movieImage: "https://henryehooper.files.wordpress.com/2014/10/enders_game_book_cover.jpg",
    movieIMDB: "8.7",
    movieRottenTomatoes: "93",
    movieDescription: "Ende fhild who is sent to an advanced military academy in outer space to prepare for a future alien invasion. The supporting cast includes Harrison Ford, Hailee Steinfeld, Viola Davis, Abigail Breslin, and Ben Kingsley."

  }, {
    movieTitle: "Avatar",
    movieDirector: "James Cameron",
    movieImage: "http://cdn.theatlantic.com/static/mt/assets/what-were-reading/Avatar.jpg",
    movieIMDB: "10",
    movieRottenTomatoes: "78",
    movieDescription: "Esdfkljsd;klfjsdlkfjs;lkdjf;ldksjf;lksdjfkl;sejdldkfj e to prepare for a future alien invasion. The supporting cast includes Harrison Ford, Hailee Steinfeld, Viola Davis, Abigail Breslin, and Ben Kingsley."



  
  }]

}

function imdbSort(){
    $("#movies").empty(),
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
}

function rottenTomatoesSort(){
    $("#movies").empty(),
    data.movies.sort(function(a, b){
    return b.movieRottenTomatoes-a.movieRottenTomatoes
  });
  

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
  $("#movies").append(html);
};
}




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
  $('body').on('click', ".module-movie", function() {
    this.remove();
});



$("#button-imdb-sort").on("click",imdbSort);

$("#button-rotten-tomatoes-sort").on("click",rottenTomatoesSort);
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

   $(this).removeClass("module-movie-hovered");

    $(".description").addClass("hidden");
   

});



});