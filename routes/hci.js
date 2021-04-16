const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if (req.session.user) {
        req.session.user.log = true;
        res.render('pages/hcipage', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
        res.render('pages/index');
    }
});

router.get('/lesson1', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/hcilesson1', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.render('pages/index');
    }
});

router.get('/lesson1game', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/hcilesson1game', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.render('pages/index');
    }
});

router.get('/lesson2', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/hcilesson2', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.render('pages/index');
    }
});

router.get('/lesson2game', async (req, res) => {
    if (req.session.user) {
      req.session.user.log = true;
      res.render('pages/hcilesson2game', { loggedin: true, currentUser: req.session.user, userID: req.session.uid});
    }
    else {
      res.render('pages/index');
    }
});

module.exports = router;