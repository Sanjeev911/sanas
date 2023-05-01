const { PriorityQueue } = require("js-sdsl")
class JobQueueService {
    constructor(){
        this.queue = new PriorityQueue([],(x,y) => y.priority - x.priority); // higher the integer , higher the priority
    }

    enqueJob(Job){
        this.queue.push(Job)
    }

    getJob(){
        return this.queue.pop()
    }

    getAllJobsInQueue(){
        return this.queue.toArray()
    }
}

module.exports = {
    JobQueueService
}