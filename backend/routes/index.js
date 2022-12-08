import express from 'express';

const router = express.Router()
import yeniKayit from '../controllers/yenikayit';
import login from '../controllers/login';

router.use('/yeniKayit', yeniKayit)
router.use('/login', login)
module.exports = router