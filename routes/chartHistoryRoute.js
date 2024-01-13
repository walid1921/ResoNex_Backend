const express = require('express')
const router = express.Router();
const { getAllChartHistory, deleteAllChartHistory, createChartHistory } = require('../controllers/chartHistoryController')


//! Get all chartHistory
router.get('/', getAllChartHistory)

//! Create an chartHistory
router.post('/', createChartHistory)

//! Delete all chartHistory
router.delete('/', deleteAllChartHistory)



module.exports = router;