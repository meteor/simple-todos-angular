Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  // This code only runs on the client
  angular.module("simple-todos",['angular-meteor']);

  function onReady() {
    angular.bootstrap(document, ['simple-todos']);
  }

  if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
  else
    angular.element(document).ready(onReady);

  angular.module("simple-todos").controller("TodosListCtrl", ['$scope', '$meteor',
    function($scope, $meteor){

      $scope.tasks = $meteor.collection(function(){
        return Tasks.find({}, {sort: {createdAt: -1}})
      });

      $scope.addTask = function(newTask){
        $scope.tasks.push({
            text: newTask,
            createdAt: new Date()}
        );
      };

    }]);
}