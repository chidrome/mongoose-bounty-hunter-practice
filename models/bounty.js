// Require needed modules
const mongoose = require('mongoose');

// Create a Schema for Bounty
const bountySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    ship: {
        type: String
    },
    reward: {
        type: Number,
        default: 10000
    },
    hunter: {
        type: Array
    },
    capture: {
        type: Boolean,
        default: false
    },
    lastSeen: {
        type: String
    }
})

// Create and export model
module.exports = mongoose.model('Bounty', bountySchema);