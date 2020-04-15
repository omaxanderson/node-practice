const express = require('express');
const router = express.Router();
const Test = require('../models/User');

router.post('/', function(req, res) {
    const user = new Test(req.body);
   console.log('user', JSON.stringify(user, null, 2));
   res.render('index');
});

router.get('/', function(req, res) {
   // manually creating users (sorta cheating)
   const users = [
      new Test({ username: 'omax', password: 'hunter2' }),
      new Test({ username: 'bstark', password: 'hunter2' }),
      new Test({ username: 'jdog', password: 'hunter2' }),
   ];
   res.render('index', { usernames: users  });
});





module.exports = router;
