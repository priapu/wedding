export class MainController {
  constructor ($scope, $location) {
    'ngInject';

    $scope.rsvp = function(){
      $location.path('/rsvp');
    };
  }

}
