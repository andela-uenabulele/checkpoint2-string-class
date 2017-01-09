angular.module('stringClass', ['ngMaterial', 'ngTagsInput'])
  .controller('StringClassController', ['$scope', '$mdDialog', function($scope, $mdDialog) {

    $scope.showModal = function(ev) {
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'help.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: false // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    DialogController = function($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    let actions = Object.keys(stringClassExtension).map((element) => {
      return {
        text: element
      }
    });

    $scope.loadActions = (query) => {
      return actions;
    };

    $scope.actions = [];

    $scope.callAction = () => {
      $scope.theResults = [];
      $scope.actions.forEach((action) => {
        let label = action.text;
        let value = $scope.stringToConvert[label]();
        $scope.theResults.push({
          label,
          value
        });
      });
    }

  }]);
