export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/rsvp', {
      templateUrl: 'app/rsvp/rsvp.html',
      controller: 'RSVPController',
      controllerAs: 'rsvp'
    })
    .when('/thank-you', {
      templateUrl: 'app/rsvp/thanks.html',
      controller: 'RSVPController',
      controllerAs: 'rsvp'
    })
    .otherwise({
      redirectTo: '/'
    });
}
