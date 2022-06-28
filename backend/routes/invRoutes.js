const express = require('express')
const router = express.Router()
const {
     getInventory, 
     setInventory, 
     updateInventory, 
     deleteInventory,
    } =  require('../controllers/invController')

    
router.route('/').get(getInventory).post(setInventory)
router.route('/:id').delete(deleteInventory).put(updateInventory)

module.exports = router