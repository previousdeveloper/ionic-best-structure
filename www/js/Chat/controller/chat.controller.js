'use strict';

angular
    .module('chat.module')
    .controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['$scope','Chats'];

function ChatCtrl($scope,Chats) {
    /* jshint validthis: true */
    var vm = this;

    vm.chats = Chats.getAll();
    vm.remove = function(chat) {
        Chats.remove(chat);
    }
}