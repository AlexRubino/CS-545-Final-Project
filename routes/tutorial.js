const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    const currentUserData = await userData.getUserById(req.session.uid);
    console.log(currentUserData);
    console.log(currentUserData.tutorialCount);
    const lesson1Completed = await userData.updateTutorialCount(req.session.uid, currentUserData.tutorialCount + 1);
    console.log(currentUserData.tutorialCount);
    res.render('pages/tutorial', { loggedin: true, currentUser: req.session.user, userID: req.session.uid, tutorialCount: currentUserData.tutorialCount});
  }
  else {
    res.render('pages/tutorial');
  }
});

module.exports = router;