(function(angular) {
  "use strict";

  angular.module("risevision.common.auth", ["risevision.common.gapi"])

    .value("CLIENT_ID", "614513768474.apps.googleusercontent.com")
    .value("SCOPE", ["https://www.googleapis.com/auth/drive"])

    .factory("apiAuth", ["$q", "$http", "$log", "gapiLoader", "oauthAPILoader", "CLIENT_ID", "SCOPE",
      function($q, $http, $log, gapiLoader, oauthAPILoader, CLIENT_ID, SCOPE) {

        var oauthToken = null,
          factory = {};

        factory.authorize = function(attemptImmediate) {
          var authorizeDeferred = $q.defer();

          var opts = {
            client_id: CLIENT_ID,
            scope: SCOPE,
            immediate: attemptImmediate
          };

          oauthAPILoader.get().then(function (gApi) {
            gApi.auth.authorize(opts, function (authResult) {
              $log.debug("authResult", authResult);

              if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                authorizeDeferred.resolve(authResult);
              } else {
                authorizeDeferred.reject("Authentication Error: " + authResult.error);
              }
            });
          });
          return authorizeDeferred.promise;
        };

        factory.getAuthToken = function () {
          return oauthToken;
        };

        return factory;

      }]);

})(angular);


