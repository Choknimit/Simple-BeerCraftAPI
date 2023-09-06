const mongoose = require('mongoose');

const listbeerSchema = new mongoose.Schema({
    beername: { type: String, required: true, },
    beertype: { type: String, required: true, },
    imgbeer: { type: String, required: true, },
    beerdescriptions: { type: String, required: true, },
}, {
    timestamps: true,
    collection: 'listbeer'
})

const listbeer = mongoose.model('Listbeer', listbeerSchema);
module.exports = listbeer;