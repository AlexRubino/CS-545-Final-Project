const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    const currentUserData = await userData.getUserById(req.session.uid);
    res.render('pages/index', { loggedin: true, currentUser: req.session.user, userID: req.session.uid, discreteProgress: currentUserData.discreteLessonProgress, hciProgress: currentUserData.hciLessonProgress});
  }
  else {
    res.render('pages/index');
  }
});


module.exports = router;