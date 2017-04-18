const express = require('express');
const router = express.Router();
const Controller = require('../controllers/houseControllers');

router.post('/house', Controller.create);
router.get('/house', Controller.getAll);
router.put('/house/:id', Controller.update);
router.delete('/house/:id', Controller.delete);

module.exports = router;
