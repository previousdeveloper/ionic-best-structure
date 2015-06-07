'use strict';

angular
    .module('chatdetail.module')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

ChatDetailCtrl.$inject = ['$scope','$stateParams','Chats'];

function ChatDetailCtrl($scope, $stateParams, Chats) {
    /* jshint validthis: true */
    var vm = this;

    vm.chat = Chats.getMessageById($stateParams.chatId);
}