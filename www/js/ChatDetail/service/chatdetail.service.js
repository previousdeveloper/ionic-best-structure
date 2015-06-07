'use strict';

angular
    .module('chatdetail.module')
    .factory('Chats', [chatDetailService])

;

function chatDetailService() {

    var service = {
        getAll: all,
        getMessageById: get,
        remove: remove
    };

    return service;


    function all() {
        return chats;
    }

    function remove(chat) {
        chats.splice(chats.indexOf(chat), 1);
    }
    function get(chatId) {

        for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
                return chats[i];
            }
        }
        return null;
    }
}

var chats = [{
    id: 0,
    name: 'Gokhan Karadas',
    lastText: 'Hey',
    face: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10256220_10152326632602557_6060801088484753415_n.jpg?oh=438a69b0c36d561fc64e0088abcf66d3&oe=5603E808&__gda__=1443442039_5adaf501e15c002aa4a370b5d6c78b49'
},{
    id: 1,
    name: 'Gokhan Karadas',
    lastText: 'My Other Photo',
    face: 'https://scontent-ams2-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1622830_10152135569347557_81221403_n.jpg?oh=a0237d2b0c0fa3cfb7ee92d1dd84e497&oe=56012212'
}];