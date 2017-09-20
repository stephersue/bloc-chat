(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    Message.send = function(newMessage, currentRoom) {
      var date = new Date();
      var post = {
          username: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          sentAt: $filter('date')(date, 'shortTime'),
          roomId: currentRoom.$id
      }
      messages.$add(post);

    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
