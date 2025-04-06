const { Router } = require('express');
const { getClass, saveClass, editClass, deleteClass } = require('./ClassController');

const router = Router();

router.get('/', getClass);
router.post('/saveClass', saveClass);
router.post('/editClass', editClass);
router.delete('/deleteClass/:id', deleteClass);

module.exports = router;