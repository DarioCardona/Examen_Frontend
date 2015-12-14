angular.module('AngularScaffold.Controllers')
  .controller('adminController', ['AuthService','$state','$scope', 'indexService','$rootScope', '$sessionStorage',
   function (AuthService,$state,$scope, indexService, $rootScope, $sessionStorage) {

    $scope.gousuario = function(){
      //if($sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('Administrador') > -1){
          $state.go('usuario');

    }

    $scope.goregalo = function(){
        $state.go('regalo');

    }

    $scope.gotabla1 = function(){

          $state.go('tabla1');

    }

    $scope.gotabla2 = function(){
      $state.go('tabla2');
    }


    indexService.setTitle("Bienvenido!");
  }]);
