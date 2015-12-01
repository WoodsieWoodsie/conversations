'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jwt = require('jwt-simple');
var moment = require('moment');


var Conversation;

var conversationSchema = Schema({
  owner1: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  owner2: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  message: String  
});


conversationSchema.statics.loadUserConversations = function(userId, cb) {
  Conversation.find( { owner: userId }, function(err, conversations) {
    if(err || !conversations) return cb(err || 'No conversations found.');
    cb(err, conversations);
  });
};

conversationSchema.statics.addConversation = function(conversation, cb) {
  var newConversation = new Conversation();
  newConversation.owner1 = conversation.owner1;
  newConversation.owner2 = conversation.owner2;
  newConversation.message = conversation.message;
  newConversation.save(function(err, savedConversation) {
    cb(err, savedConversation);
  });
};


Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;