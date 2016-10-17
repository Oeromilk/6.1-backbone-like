var $ = require('jquery');
var Like = require('./models/like').Like;
var likeTemp = require('../templates/likeTemp.hbs');

var likes = new Like();

$('.app').html(likeTemp());
$('#like-count').html(likes.get('likes'));
$('#label').html(likes.get('label'));

$('button').on('click', function(event){
  event.preventDefault();
  likes.addLike();
  console.log(likes.get('likes'));
  $('#like-count').html(likes.get('likes'));
  likes.toJSON();
  $('#label').html(likes.get('label'));
})
