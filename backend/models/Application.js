const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    candidateId: mongoose.Schema.Types.ObjectId,
    jobId: mongoose.Schema.Types.ObjectId,
    resume: String,
    r1Check: Array,
    r2Check: Array,
    status: { type: String, enum: ['Pending', 'Reviewed', 'Shortlisted'], default: 'Pending' },
});

module.exports = mongoose.model('Application', applicationSchema);