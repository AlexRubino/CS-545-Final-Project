const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/about', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
  }
  else {
    res.render('pages/about');
  }
});

module.exports = router;