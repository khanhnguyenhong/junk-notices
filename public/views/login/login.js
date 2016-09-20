app.controller('loginCtrl', ['$scope', '$state', 'users', function ($scope, $state, users) {
    $scope.hello = 'Hello from loginCtrl';
    $scope.login = function () {
        if (users.authen($scope.username, $scope.password)) {
            $state.go('view.dashboard');
        }
    }

    $scope.handleEnter = function (e) {
        if (e.keyCode == 13) {
            $scope.login();
        }
    }
}])