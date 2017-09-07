(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    console.log(rooms, 'This is rooms in Room.js')

    Room.all = rooms;

    return Room;
    console.log(Room, 'This is Room object in Room.js')
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
