const express = require('express');
const Job = require('../models/Job');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Employer creates a job
router.post('/create', authMiddleware(['Employer']), async (request, response) => {
    // const { } = request.body;
    const job = new Job(request.body);
    await job.save();
    return response.status(201).send('Job created!');
});

// Coordinator gets the job
router.get('/', authMiddleware(['Coordinator']), async (request, response) => {
    const job = await Job.find({ isLive: false });
    return response.json(job);
});

router.post('/approve/:id', authMiddleware(['Coordinator']), async (request, response) => {
    const { id } = request.params;
    const { recruiterIds, r2Check } = request.body;
    const job = await Job.findByIdAndUpdate(id, { recruiterIds, r2Check, isLive: true }, { new: true });
    return response.json(job);
});

module.exports = router;