const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const auth = require('./routes/auth');
const jobs = require('./routes/jobs');
const applications = require('./routes/applications');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/jobs', jobs);
app.use('/api/applications', applications);

// connection to DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));