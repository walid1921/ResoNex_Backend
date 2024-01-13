const express = require('express')
const router = express.Router();
const { getAllPercentages, createPercentage, deleteAllPercentages } = require('../controllers/percentagesController')


//! Get all percentages
router.get('/', getAllPercentages)

//! Create an percentages
router.post('/', createPercentage)

//! Delete all percentages
router.delete('/', deleteAllPercentages)



module.exports = router;