var express = require('express');
var router = express.Router();

var {
  add_student,
  put_student,
  delete_student,
  logout
} = require('../controllers/attendance_controller.js');

const checkAuthenticated = (req, res, next) => {

  if (res.locals.authenticated) {
    return next()
  }
  
  res.status(401).end();
}

router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router.post('/student', checkAuthenticated, add_student);
router.put('/student', checkAuthenticated, put_student);
router.delete('/student', checkAuthenticated, delete_student);
router.get('/logout', logout);

module.exports = router;
