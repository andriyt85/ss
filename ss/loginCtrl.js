(function() {
    'use strict';
    angular.module('myApp')
        .controller('loginCtrl',['$http', function ($http) {
            var vm = this;
            vm.user = {
                username: "",
                password: ""
            };
            vm.enter = enter;
            function enter() {
                $http({
                    method: 'POST',
                    url: myAppConst.loginURL,
                    data: JSON.stringify(vm.user),
                    headers : {'Content-Type': 'application/json'}
                })
                    .success(function (data,status,headers,config) {
                        console.log('success' + data);
                    })
                    .error(function (data,status,headers,config) {
                        console.log('error');
                    })

            }
        }]);
})();
