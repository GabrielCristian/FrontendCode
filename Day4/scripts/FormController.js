/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormController', ['$scope', function($scope){
    $scope.validate = function (myForm) {
        console.log(myForm.another.valid);
        if(myForm.another.$valid) {
            alert("Mesajul este valid");
        }
    };

}]);