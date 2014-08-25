(function(angular) {
  "use strict";

  angular.module("risevision.widget.common.google-drive-picker")

    .factory("apiGooglePicker", ["$q", "$window", "$log", "pickerLoader",
      function ($q, $window, $log, pickerLoader) {
        var deferred = $q.defer();
        var promise;

        var factory = {
          get: function () {
            if (!promise) {
              promise = deferred.promise;
              pickerLoader.get().then(function () {
                deferred.resolve($window.google);
              });
            }
            return promise;
          }
        };

        return factory;

      }]);

})(angular);
