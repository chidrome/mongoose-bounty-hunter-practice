const express = require('express');
const router = express.Router();

// Include models
const db = require('../../models')

// Define some routes
router.get('/', (req, res)=>{
    db.Bounty.find()
    .then(bounties => {
        res.send(bounties);
    })
    .catch(error => {
        console.log('ERROR FINDING BOUNTY', error);
        res.status(500).send({ message: 'Server Error' });
    })
})


module.exports = router;