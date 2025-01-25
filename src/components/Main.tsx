import { Card } from "./Card"
import { Filters } from './Filters';
import { useJobs } from "../hooks/useJobs";


export const Main = () => {
   const { jobs } = useJobs();

  return (
    <main className="flex flex-col gap-10  items-center py-14 md:gap-4 relative">
    
        <div className="max-w-[1110px] flex flex-col gap-10 items-center md:gap-6 mx-4 absolute top-[-42px] xl:w-[1110px]">
            <Filters />
            {
                jobs.map((job)=>(
                    <Card key={job.id} job={job}/>
                ))
            }
            <div className="h-12 w-full"></div>
        </div>
    </main>
  )
}
