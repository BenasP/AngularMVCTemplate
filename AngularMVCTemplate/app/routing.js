(function (ng) {

    'use stict';

    var config = function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });


        $stateProvider
            .state('Root', {
                abstract: true,
                url: '',
                template: '<ui-view></ui-view>'
            })
            .state('Root.home', {
                url: '/',
                templateUrl: 'app/home/index.html',
                controller: 'homeController'
            });

        $urlRouterProvider.otherwise('');
    }

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]);

})(angular)