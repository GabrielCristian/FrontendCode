/**
 * Created by user on 6/29/2016.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
                    .success(function (data) {
                        
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": 1
                        };
                    });
            }
        }
    }]
);