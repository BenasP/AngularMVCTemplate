(function(ng) {
    
    var controller = function($scope) {
        $scope.message = 'Home controller';
    }

    controller.$inject = ['$scope'];
    app.controller('homeController', controller);

})(angular)