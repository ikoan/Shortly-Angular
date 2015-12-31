angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  //should have a link property on the $scope
})

.factory('Links', function(){
  var data = {};
  return {
    data: data
  };
});
