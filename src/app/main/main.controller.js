export class MainController {
  constructor ($scope, $location) {
    'ngInject';

    $scope.rsvp = function(){
      $location.path('/rsvp');
    };

    $scope.saveToCalendar = function(){
      $location.path('/assets/cal/invite.ics');
    };
  }

}
