const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/help', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
  }
  else {
    res.render('pages/help');
  }
});

module.exports = router;