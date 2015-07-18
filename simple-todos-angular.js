Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {

      $scope.tasks = $meteor.collection(Tasks);

    }]);
}
