if (Meteor.isClient) {

  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {

      $scope.tasks = [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' }
      ];

  }]);
}
