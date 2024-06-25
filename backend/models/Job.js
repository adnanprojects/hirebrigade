const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: String,
    location: String,
    salary: Number,
    responsibilities: String,
    r1Check: Array,
    isLive: { type: Boolean, default: false },
    r2Check: Array,
    coordinatorId: mongoose.Schema.Types.ObjectId,
    recruiterIds: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Job', jobSchema);