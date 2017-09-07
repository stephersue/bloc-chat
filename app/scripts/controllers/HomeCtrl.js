(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['ui.router', 'Room', HomeCtrl]);
})();
