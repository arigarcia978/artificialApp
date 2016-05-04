angular.module('starter.controllers', ['ionic'])

  .controller('ProfileController', ['$scope', '$stateParams', 'profileService',
    function($scope, $stateParams, profileService) {
      var id = $stateParams.id;
      $scope.userProfile = profileService.getProfile(id);
    }
  ])

  .controller('AddsController', ['$scope', '$ionicModal', 'profileService', 
    function($scope, $ionicModal, profileService) {
      $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
  }])

  .controller('ProfilesController', ['$scope', 'profileService', function($scope, profileService) {
    $scope.users = profileService.getProfiles();
  }])

  .controller('AllAdsController', ['addsService', '$scope', '$ionicPopup', '$timeout',
    function(addsService, $scope, $ionicPopup, $timeout){
      $scope.propagandas = addsService.getPublicidades();

      $scope.mostrarPropagandas = function(item){
        for(i = 0; i < item.propagandas.length; i++){
          $scope.showAlert(item.propagandas[i].Titulo, item.propagandas[i].Descripcion);
        }
      };

      $scope.showAlert = function(titulo, descripcion) {
        var alertPopup = $ionicPopup.alert({
          title: titulo,
          template: descripcion
        });
      };
    }
  ]);
