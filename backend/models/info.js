const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({

    imeIPrezime: { type: String, require: true },
    mjesto: { type: String, require: true },
    email: { type: String, require: true },
});

module.exports = mongoose.model ('Info', infoSchema);
