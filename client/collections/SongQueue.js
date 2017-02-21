// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst();
      }  
    });
    // where do we get song from ??
    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },
  
  playFirst: function() {
    this.at(0).play();
  }

});