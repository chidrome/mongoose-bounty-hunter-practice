const express = require('express');
const router = express.Router();

// Define some routes
router.get('/', (req, res)=>{
    res.send('STUB!')
})


module.exports = router;