const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.getAllUsers);
router.post('/add', mainController.addUser);
router.post('/editData', mainController.editUser);
router.get('/updateUser/:id', mainController.updateUser);

router.get('/delete/:id', mainController.deleteUser);

//getSingleUser

module.exports = router;
