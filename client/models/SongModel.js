// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // defaults: {
  //   "playTimes": 0,
  // },

  countUp: function(){
    this.attributes.playTimes++;
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  disenqueue: function(){
    console.log("in songmodel disenqueu", this);
    this.trigger('disenqueue', this);
  },


});
