hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, CommonResourcesFactoryBackup) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                //console.log(data[0])
                $scope.departments = data;
            });
        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    }]);