angular.module('proyectoLuisa').controller('firstCtrl', firstCtrl);

firstCtrl.$inject = ['$scope', '$state', '$firebase'];

function firstCtrl($scope, $state, $firebase){

  // Movie Constructor
  $scope.movie = {
    title : '',
    releaseYear : '',
    rating : '',
    description : '',
    image : ''
  }

  $scope.category = '';

  // convert image to base64
  function el(id){
    return document.getElementById(id);
  } // Get elem by ID
  function readImage() {
    if ( this.files && this.files[0] ) {
      var FR = new FileReader();
       FR.onload = function(e) {
        $scope.movie.image = e.target.result;
        el("img").src = e.target.result;
        el("base").innerHTML = e.target.result;
      };
      FR.readAsDataURL( this.files[0] );
    }
  };
  el("asd").addEventListener("change", readImage, false);

  // ng-click methods
  $scope.saveMovie = function(){
    var saveRef = $firebase(new Firebase('https://cms-luisa.firebaseio.com/peliculas/' + $scope.category));
    saveRef.$push($scope.movie);
  };
};
