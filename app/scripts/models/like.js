var Backbone = require('backbone');
var _ = require('underscore');

var Like = Backbone.Model.extend({
  defaults: {
    'likes': 0,
    'label': 'likes'
  },
  initialize: function(){
    console.log("Likes were created set to " + this.get('likes'));
  },
  addLike: function(){
    var likeCount = this.get('likes') + 1;
    this.set('likes', likeCount);
  },
  toJSON: function(){
    if (this.get('likes') === 1) {
      this.set('label', 'like');
    } else {
      this.set('label', 'likes');
    }

    // console.log('short', _.clone(this.attributes));
    // console.log('long', Backbone.Model.prototype.toJSON.call(this));

    return Backbone.Model.prototype.toJSON.call(this);
  }
});

module.exports = {
  'Like': Like
};
