'use strict';

var express = require('express');
var router = express.Router();

// var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

router.get('/me', function(req, res) {
  User.findById('req.user', function(err, user){
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  });
});

module.exports = router;
