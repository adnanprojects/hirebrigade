const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['Candidate', 'Coordinator', 'Employer', 'Recruiter'] }
}, { timestamps: true });

mongoose.model('User', UserSchema);

// This file defines the user schema 