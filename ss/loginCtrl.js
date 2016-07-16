app.controller('myCtrl', function ($scope, $http) {
       var user = {};
    function myLoginFunction () {
       $http({
           method: 'POST',
           url: 'http://dtapi.local/login/index',
           data: $scope.user,
           headers : {'Content-Type': 'application/x-www-form-urlencoded'}
       })
           .success(function (data,status,headers,config) {
                   console.log(data);
               })
           .error(function (data,status,headers,config) {
                   console.log('error');
               })
   }

});
