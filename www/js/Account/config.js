'use strict';

angular
    .module('account.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: '../templates/tab-account.html',
                        controller: 'AccountCtrl',
                        controllerAs: "vm"
                    }
                }
            });
    });