app.controller('layoutCtrl', ['$scope', '$state', function ($scope, $state) {
    var state = ['', 'view.dashboard', 'view.learningScheduler', 'view.about'];

    $scope.changeState = function (index) {
        $state.go(state[index]);
        $scope.state = index;
    }

    switch ($state.current.name) {
        case 'view.dashboard':
            $scope.state = 1;
            break;
        case 'view.learningScheduler':
            $scope.state = 2;
            break;
        case 'view.about':
            $scope.state = 3;
            break;
        default:
            $scope.state = 0;
    }
}])