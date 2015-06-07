'use strict';

angular
    .module('chat.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: '../templates/tab-chats.html',
                        controller: 'ChatCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
    });