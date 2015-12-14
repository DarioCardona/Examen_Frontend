var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers', 'ngRoute', 'ngStorage']);
var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $routeProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController',
            name: "login",
            data: {
              pageTitle: 'Distribuidora DC'
            }
        })
				.state('usuario', {
            url: '/login',
            templateUrl: '/views/usuario.html',
            controller: 'usuarioController',

        })
				.state('regalo', {
            url: '/regalo',
            templateUrl: '/views/regalo.html',
            controller: 'regaloController',


        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminController',


        })
				.state('tabla1', {
            url: '/tabla1',
            templateUrl: '/views/tabla1.html',
            controller: 'tabla1Controller',

        })
				.state('tabla2', {
            url: '/tabla2',
            templateUrl: '/views/tabla2.html',
            controller: 'tabla2Controller',

        })

        /*$routeProvider
            .when('/compras', {template: 'views/compras.html', controller: 'comprasController'})
            .when('/facturacion', {template: '/views/facturacion.html', controller: 'facturacionController'})
            .when('/abono', {template: '/views/abono.html', controller: 'abonoController'});*/
}]);

app.run(function($rootScope, $state) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.title = $route.current.title;
  });
  $rootScope.$state = $state;
});

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Distribuidora DC - Bienvenido!';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);
