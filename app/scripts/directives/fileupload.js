'use strict';

/*global _ */

/**
 * @ngdoc directive
 * @name health3App.directive:fileUpload
 * @description
 * # fileUpload
 */
angular.module('health3App')
  .directive('fileUpload', function () {
    return {
      template: '<div><label for=""></label>' +
        '<input type="file" ng-file-select="onFileSelect($files)">' +
        '<span ng-show="!fileUpload.isValid">Please upload only *.jpg or *.jpeg or *.png file</span></div>',
      restrict: 'E',
      replace: true,
      controller: 'fileUploadCtrl',
      scope : {
        onError : '&',
        onSuccess : '&'
      }

    };
  })
  .controller('fileUploadCtrl', function($scope, $upload) {
    $scope.fileUpload = {};
    $scope.fileUpload.isValid = true;

    $scope.onFileSelect = function($files) {
      _.each($files, function(file){

        //check for image file type
        var typeValid = file.type.match(/(?:jpe?g|png)/);
        $scope.fileUpload.isValid = true;

        if(typeValid === null) {
          $scope.fileUpload.isValid = false;
          return false;
        }

        $scope.upload = $upload.upload({
          url: '/upload-script',
          file: file
          // data: { myObj: $scope.my }
        })
          .progress(function(evt){
            console.log(parseInt(evt.loaded / evt.total));
          })
          .success(function(){
            // data, status, headers, config = file uploaded args
          })
          .error(function(data) {
            //store image temporarily until api gets ready
            var reader = new FileReader();
            reader.onload = function(e) {
              $scope.onError({file: e.target.result});
            };
            reader.readAsDataURL(file);
          });

      });
    };
  });
