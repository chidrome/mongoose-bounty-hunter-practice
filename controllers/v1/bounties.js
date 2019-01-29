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

router.post('/', (req, res) => {
    // Array data is sent as a string; parse it
    req.body.hunters = JSON.parse(req.body.hunters);
    db.Bounty.create(req.body)
    .then(bounty => {
        res.status(201).send(bounty)
    })
    .catch(error => {
        console.log('ERROR Creating', error)
        res.status(500).send({ message: 'Server Error' });
    })
})

router.get('/:id', (req, res) => {
    db.Bounty.findById(req.params.id)
    .then(bounty => {
        res.send(bounty)
    })
    .catch(error => {
        console.log('ERROR FINDING ID', error);
        res.status(500).send({ message: 'Server Error' });
    });
})

router.delete('/:id', (req, res) => {
    db.Bounty.findOneAndDelete({
        _id: req.params.id
    })
    .then(() => {
        res.status(204).send({ message: 'Successful Deletion' })
    })
    .catch(error => {
        console.log('ERROR FINDING ID', error);
        res.status(500).send({ message: 'Server Error' });
    })
})



module.exports = router;