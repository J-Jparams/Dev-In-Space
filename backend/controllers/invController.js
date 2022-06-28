const asyncHandler  = require ('express-async-handler')


// @desc Get Inventory
// @route GET /api/inventory   
// @access Private 
const getInventory = asyncHandler(async(req, res) => {
     res.status(200).json({ message: 'Get inventory'})
})

// @desc  Set Inventory
// @route POST /api/inventory
// @access Private
const setInventory =asyncHandler(async(req, res) => {
   res.status(200).json({ message: 'Set inventory'})
})


// @desc    Update Inventory
// @route   PUT /api/inventory/:id
// @access Private
const updateInventory = asyncHandler(async(req, res) => {
   res.status(200).json({ message: `Update inventory ${req.params.id}`})
})

// @desc Delete Inventory
// @route   DELETE /api/inventory/:id
// @access Private
const deleteInventory = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete inventory ${req.params.id}`})
})

module.exports = {
    getInventory,
    setInventory,
    updateInventory,
    deleteInventory,
}