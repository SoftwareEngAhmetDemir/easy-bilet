import express from 'express';

const router = express.Router()
import yeniKayit from '../controllers/yenikayit';
import login from '../controllers/login';
import seyahatlar from '../controllers/seyahatlar';

router.use('/yeniKayit', yeniKayit)
router.use('/login', login)
router.use('/seyahatlar',seyahatlar)
module.exports = router