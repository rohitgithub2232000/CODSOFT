const express = require('express');
const router = express.Router()
const { createJob, singleJob, updateJob, showJob } = require('../controller.js/jobController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

router.post('/job/create', isAuthenticated, isAdmin, createJob)
router.get('/job/:id', singleJob )
router.put('/job/update/:job_id',isAuthenticated, isAdmin, updateJob )
router.get('/jobs/show', showJob )

module.exports = router;
