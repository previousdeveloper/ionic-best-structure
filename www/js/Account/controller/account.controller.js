'use strict';

angular
    .module('account.module')
    .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', '$ionicPopup'];

function AccountCtrl($scope, $ionicPopup) {
    /* jshint validthis: true */
    var vm = this;

    vm.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Enable Friends',
            template: 'Are you sure you want to enable friends ?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                vm.settings = {
                    enableFriends: true
                };
            } else {
                vm.settings = {
                    enableFriends: false
                };
            }
        });
    };

    vm.title = "account"
}