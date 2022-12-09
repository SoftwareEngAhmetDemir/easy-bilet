import express from 'express';

const router = express.Router()
import yeniKayit from '../controllers/yenikayit';
import login from '../controllers/login';
import seyahatlar from '../controllers/seyahatlar';
import updateSeyahatlat from '../controllers/update-seyahatlar';

router.use('/yeniKayit', yeniKayit)
router.use('/login', login)
router.use('/seyahatlar',seyahatlar)
router.use('/updateseyahatlar',updateSeyahatlat)
module.exports = router