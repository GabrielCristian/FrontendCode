/**
 * Created by Gabi on 29-Jun-16.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService',
    function ($scope, $http, $routeParams, $location, JobService) {

        JobService.findById($routeParams.jobId)
            .then(function (res) {
               
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/jobList');
        }
    }]);