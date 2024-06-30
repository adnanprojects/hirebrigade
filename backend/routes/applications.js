const express = require('express');
const Application = require('../models/Application');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Apply
router.post('/apply', authMiddleware(['Candidate']), async (request, response) => {
    const application = new Application(request.body);
    await application.save();
    response.status(201).send('Application submitted');
});

// Review
router.get('/review', authMiddleware(['Recruiter']), async (request, response) => {
    const application = await Application.findOne({ status: 'Pending' }).populate('candidateId jobId');
    response.json(application);
});

// Application Update
router.post('/review/:id', authMiddleware(['Recruiter']), async (request, response) => {
    const { id } = request.params;
    const { r2Check, status } = request.body;
    const application = Application.findByIdAndUpdate(id, { r2Check, status }, { new: true });
    response.json(application);
});

module.exports = router;