var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'LocalStorageModule',
    'ngSanitize'
])

app.config([
    '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    '$controllerProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $controllerProvider, $locationProvider, $httpProvider) {
        app.controller = $controllerProvider.register;

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'views/login/login.html',
                resolve: lazyLoad('views/login/login.js'),
                controller: 'loginCtrl',
                title: 'Log In'
            })
            .state('view', {
                abstract: true,
                templateUrl: 'views/layout/layout.html',
                resolve: lazyLoad('views/layout/layout.js'),
                controller: 'layoutCtrl'
            })
            .state('view.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/dashboard.html',
                resolve: lazyLoad('/views/dashboard/dashboard.js'),
                controller: 'dashboardCtrl',
                title: 'Dashboard'
            })
            .state('view.learningScheduler', {
                url: '/learning-scheduler',
                templateUrl: '/views/learning-scheduler/learning-scheduler.html',
                resolve: lazyLoad('/views/learning-scheduler/learning-scheduler.js'),
                controller: 'learningSchedulerCtrl',
                title: 'Learning Scheduler'
            })
            .state('view.about', {
                url: '/about',
                templateUrl: '/views/about.html',
                title: 'About'
            })
            .state('pageNotFound', {
                url: '/404',
                templateUrl: '/views/404.html',
                title: '404 - Not found'
            })

        $urlRouterProvider.otherwise('/');

        //$locationProvider.html5Mode(true);
        //fix this later :3

        function lazyLoad() {
            var args = [];
            for (var i = 0, n = arguments.length; i < n; i++) {
                args[i] = arguments[i];
            }
            return {
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(args);
                }]
            }
        };

    }])