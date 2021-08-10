const { Router } = require('express');

const {
  arrayscore,
  sevenCows,
  TransformArray,
  sumArray,
  deletesign,
  average,
} = require('../controllers/challenge');

const router = Router();

router.get('/arrayscore', arrayscore );
router.get('/sevenCows', sevenCows );
router.get('/transformArray', TransformArray );
router.get('/sumArray', sumArray );
router.get('/deletesign', deletesign );
router.get('/average', average );




module.exports = router;