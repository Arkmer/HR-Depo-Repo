const app = angular.module('routesApp', ['ngRoute']); // Other side of the link to the html, also links angular-route module

app.config(function($routeProvider){ // $routeProvider is magic?
    $routeProvider.when('/', { // Initial url request, must include the "#!"
        templateUrl: 'views/home.html', // This is a file location, no magic words
        controller: 'HomeController as hc'
    }).when('/away', { // This is not a "done" like function, this is an alternate route to take; note the differing url request; note further that when is also used for the first url as well
        templateUrl: 'views/away.html', // Alternate location
        controller: 'AwayController as ac'
    }).otherwise({redirectTo: '/'}); // Kinda like the error, but just sends you back to where you were. Nothing changes
}); // end $routeProvider
