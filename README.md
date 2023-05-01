# sanas

APIS Exposed 
  * http://localhost:3000/getJob
    * Get the highest Priority Job from the queue
    * Higher the priority number , higher the priority of the job 
 
  * http://localhost:3000/createAndEnqueuJobBulk
    * Update the queue with the jobs in bulk ( for the demo purposes adds jobs in queue by iterating over items unoptimized )
  
 
  * http://localhost:3000/viewCurrentQueue
    * View the currentJobs in queue. The returned array contains jobs in random order
