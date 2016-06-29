hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.job = [];

        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;

            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

    }]);
