export class RSVPController {
  constructor ($scope, $firebaseArray, $location) {
    'ngInject';

    var resultPage = $location.path().indexOf('rsvp-list') > 0;

    var rsvpRef = new Firebase("https://rsvp-app-dev.firebaseio.com/rsvp-data");
    var rsvpData = $firebaseArray(rsvpRef);

    $scope.rsvpList = [];

    rsvpData.$loaded()
    .then(function(res){
      $scope.rsvpList = res;
    });

    $scope.error = false;

    $scope.input = {};
    $scope.input.friendOf = 1;

    $scope.saveRsvp = function(data) {
      if (data.name && data.plusOne) {
        $scope.error = false;
        rsvpData.$add(data)
        .then(function(res){
          console.log("Data saved");
          $location.path('/thank-you');
        });
      } else {
        $scope.error = true;
      }
    };
  }

}
