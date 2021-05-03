const express = require('express');
const router = express.Router();
const userData = require('../data/users');

router.get('/', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    const currentUserData = await userData.getUserById(req.session.uid);
    console.log(currentUserData);
    console.log(currentUserData.hciLessonProgress);
    res.render('pages/hcipage', { loggedin: true, currentUser: req.session.user, userID: req.session.uid, hciProgress: currentUserData.hciLessonProgress  });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

router.get('/lesson1', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/hcilesson1', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

router.get('/lesson1game', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/hci', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

//This is for completion of lesson 1 when the finish button is pressed in hcilesson1.handlebars
router.post('/lesson1', async (req, res) => {
  console.log("Test 1");
  if (req.session.user) {
    console.log("Test 1.5");
    req.session.user.log = true;
    try {
      console.log("Test 2");
      const lesson1Completed = await userData.updateProgress(req.session.uid, "hci", 25);
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
    res.redirect('/hci');
  }
});

//This is for completion of lesson 1 game when the finish button is pressed in hci.handlebars
router.post('/lesson1game', async (req, res) => {
  console.log("Test 1");
  if (req.session.user) {
    console.log("Test 1.5");
    req.session.user.log = true;
    try {
      console.log("Test 2");
      const lesson1Completed = await userData.updateProgress(req.session.uid, "hci", 50);
      console.log("Test 3");
    }
    catch (e) {
      //Should not reach this error
      console.log("Test 4");
      console.log(e);
      res.status(401).render('pages/error', { error: true, etext: "Failed to update lesson 1 game completed on the database" });
      console.log("You messed up bro");
      return;
    }
    console.log("Test 6");
    res.redirect('/hci');
  }
});

router.get('/lesson2', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/hcilesson2', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

router.get('/lesson2game', async (req, res) => {
  if (req.session.user) {
    req.session.user.log = true;
    res.render('pages/hcilesson2game', { loggedin: true, currentUser: req.session.user, userID: req.session.uid });
  }
  else {
    res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
  }
});

//This is for completion of lesson 2 when the finish button is pressed in hcilesson2.handlebars
router.post('/lesson2', async (req, res) => {
  console.log("Test 1");
  if (req.session.user) {
    console.log("Test 1.5");
    req.session.user.log = true;
    try {
      console.log("Test 2");
      const lesson1Completed = await userData.updateProgress(req.session.uid, "hci", 75);
      console.log("Test 3");
    }
    catch (e) {
      //Should not reach this error
      console.log("Test 4");
      console.log(e);
      res.status(401).render('pages/error', { error: true, etext: "Failed to update lesson 2 completed on the database" });
      console.log("You messed up bro");
      return;
    }
    console.log("Test 6");
    res.redirect('/hci');
  }
});

//This is for completion of lesson 1 game when the finish button is pressed in hci.handlebars
router.post('/lesson2game', async (req, res) => {
  console.log("Test 1");
  if (req.session.user) {
    console.log("Test 1.5");
    req.session.user.log = true;
    try {
      console.log("Test 2");
      const lesson1Completed = await userData.updateProgress(req.session.uid, "hci", 100);
      console.log("Test 3");
    }
    catch (e) {
      //Should not reach this error
      console.log("Test 4");
      console.log(e);
      res.status(401).render('pages/error', { error: true, etext: "Failed to update lesson 1 game completed on the database" });
      console.log("You messed up bro");
      return;
    }
    console.log("Test 6");
    res.redirect('/hci');
  }
});
module.exports = router;