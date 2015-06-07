'use strict';

angular
    .module('chatdetail.module')
    .config(function config($stateProvider) {
        $stateProvider

            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: '../templates/chat-detail.html',
                        controller: 'ChatDetailCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
    });