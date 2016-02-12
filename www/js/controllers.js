angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $http, $state) {

    $scope.user = {email: "", password: ""}
    $scope.error_msg = ""
    $scope.login = function(){

        var loginObj = {
            email : $scope.user.email,
            password : $scope.user.password,
        };

        //var res = $http.post("http://localhost:8001/v1/login", loginStr);
        var res = $http({
            url: 'http://localhost:8001/v1/login',
            method: 'POST',
            data: JSON.stringify(loginObj),
            headers: {'Content-Type':'application/json'}
        })
        // On success
        res.success(function(data, status, headers, config) {

            // Remove error msg
            $scope.error_msg = ""

            // Navigate to profile page
            $state.go('profile')

       });

        // on Failure
        res.error(function(data, status, headers, config) {

            // Go back to login set error msg
            //alert( "failure message: " + JSON.stringify({data: data}));
            $scope.error_msg = "Incorrect Email or Password"
            $state.go("login")
        });
    }
})

.controller('signUpCtrl', function($scope, $http, $state) {

    $scope.signup = {email: "" , password: "", cpassword: "", admintoken:""}
    $scope.error_msg = ""
    $scope.signupFn = function() {

        if ($scope.signup.password != $scope.signup.cpassword) {

            // Two Passwords dont match ; redirect to signup
            $scope.error_msg = "Passwords don't match"
            $state.go('signUp')
            return
        }

        var signupObj = {
            email : $scope.signup.email,
            password : $scope.signup.password,
            admintoken: $scope.signup.admintoken,
        };

        //var res = $http.post("http://localhost:8001/v1/login", loginStr);
        var res = $http({
            url: 'http://localhost:8001/v1/signup',
            method: 'POST',
            data: JSON.stringify(signupObj),
            headers: {'Content-Type':'application/json'}
        })

        // On success
        res.success(function(data, status, headers, config) {

            // Remove error msg & Navigate to profile page
            $scope.error_msg = ""
            $state.go('profile')

       });

        // on Failure
        res.error(function(data, status, headers, config) {

            // Go back to signup set error msg
            switch (data.status) {
                case 403:
                    $scope.error_msg = "AdminToken is Incorrect";
                    break;

                case 500:
                    $scope.error_msg = "Email ID is already in use";
                    break;

                default:
                    $scope.error_msg = "Unknown Error. Try Later"

            }

            $state.go("signUp")
        });
    }
})

.controller('profileCtrl', function($scope) {

})

.controller('visitorsCtrl', function($scope) {

})

.controller('profileStatsCtrl', function($scope) {

})
