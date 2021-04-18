const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if (req.session.user) {
        req.session.user.log = true;
        res.render('pages/discretepage', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
    }
});

router.get('/lesson1', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/discretelesson1', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
    }
});

router.get('/lesson1game', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/discretelesson1game', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
    }
});

router.get('/lesson2', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/discretelesson2', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
    }
});

router.get('/lesson2game', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/discretelesson2game', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.status(401).render('pages/index', { error: true, etext: "Cannot Access Courses Without Logging In." });
    }
});

module.exports = router;