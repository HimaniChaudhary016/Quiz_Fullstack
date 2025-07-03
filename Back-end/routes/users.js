var express = require('express');
var router = express.Router();
const { getMyNameController, createUserController } = require('../controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/myname', getMyNameController);
router.post('/create-user', createUserController);

module.exports = router;
