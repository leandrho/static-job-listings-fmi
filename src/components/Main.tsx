import { useEffect, useState } from "react"
import { JobList } from "../types"
import { getJobs } from "../services"
import { Card } from "./Card"


export const Main = () => {
    const [jobs, setJobs] = useState<JobList>([])
    useEffect(() => {
        try {
            setJobs(getJobs());
        } catch (error) {
            console.log('Init error - check data source')
        }
    }, [])
    
  return (
    <main className="flex flex-col gap-10 bg-(--Light-Grayish-Cyan-Bg) items-center py-14 md:gap-4">
        {
            jobs.map((job)=>(
                <Card key={job.id} job={job} />
            ))
        }
    </main>
  )
}
