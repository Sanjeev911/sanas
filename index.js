const express = require('express');
const app = express();

const { createJobEntity } = require('./job');
const { JobQueueService } = require('./JobQueueService');


const port = process.env.PORT || 3000;
const jobQueueService = new JobQueueService();

app.use(express.json());

app.post('/createAndEnqueuJobBulk', (req, res) => {
    const { jobs } = req.body;
    jobs.map((inputJob) => {
        const { payload, priority} = inputJob;
        const job = createJobEntity(payload, priority);
        jobQueueService.enqueJob(job)
    })
    res.send({status: "success"})
});

app.get('/getJob', (req, res) => {
    const highestPriorityJob = jobQueueService.getJob();
    res.send({job: highestPriorityJob});
});

app.post('/updateJobStatus', (req, res) => {
    // const { jobId , updatedStatus } = req.body;
    // based on status -> if status is FAILED -> update the job status in db and enqueue the job again
    // if status -> Success -> update the job status in the db.
});

app.get('/viewCurrentQueue', (req, res) => {
    const jobs = jobQueueService.getAllJobsInQueue();
    res.send({jobs})
})

app.get('/jobProgress', (req, res) => {
    const { jobId } = req.body;
    //based on jobId get the details from db and return 
    res.send({jobInfo: {}});
});

app.get('/jobProgress', (req, res) => {
    // fetch all the jobs from the database and share their status
    res.send({jobsInfo: {}});
});

app.listen(port, () => console.log(`Listening on port ${port}...`));