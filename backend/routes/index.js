import express from 'express';

const router = express.Router()
import yeniKayit from '../controllers/index';

router.use('/yeniKayit', yeniKayit)

module.exports = router