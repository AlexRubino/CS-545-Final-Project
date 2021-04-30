const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    const currentUserData = await userData.getUserById(req.session.uid);
    console.log(currentUserData);
    console.log(currentUserData.discreteLessonProgress);
    res.render('pages/discretepage', { loggedin: true, currentUser: req.session.user, userID: req.session.uid, discreteProgress: currentUserData.discreteLessonProgress });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

router.get('/lesson1', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/discretelesson', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

//This is for completion of lesson 1 when the next button is pressed in discretelessson.handlebars
router.post('/lesson1', async (req, res) => {
  console.log("Test 1");
  if (req.session.user) {
    console.log("Test 1.5");
    req.session.user.log = true;
    try {
      console.log("Test 2");
      const lesson1Completed = await userData.updateProgress(req.session.uid, "discrete", 50);
      console.log("Test 3");
    }
    catch (e) {
      //Should not reach this error
      console.log("Test 4");
      console.log(e);
      res.status(401).render('pages/error', { error: true, etext: "Failed to update lesson 1 completed on the database" });
      console.log("You messed up bro");
      return;
    }
    console.log("Test 6");
    res.render('pages/discretelesson2', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
});

router.get('/lesson2', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/discretelesson', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

module.exports = router;