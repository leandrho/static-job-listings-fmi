import { Job } from "../types"

type CardHeaderProps = {
    job :Job
}
export const CardHeader = ({ job }:CardHeaderProps) => {
  return (
    <div className="pt-9 flex flex-col gap-2 md:pt-0">
        <div className="flex gap-6 items-center">
            <p className="text-(--Desaturated-DarkCyan) font-bold ">{job.company}</p>
            {
                (job.featured || job.new)? 
                    <div className="flex gap-2">
                        {job.new && <p className="text-[14px] px-3 text-white bg-(--Desaturated-DarkCyan) font-bold uppercase rounded-full ">New!</p>}
                        {job.featured && <p className="text-[14px] px-3  text-white bg-black font-bold uppercase rounded-full flex items-center">Featured</p>}
                    </div>
                :''
            }
        </div>
        <h2 className="text-black font-bold hover:text-(--Desaturated-DarkCyan) cursor-pointer">{job.position}</h2>
        <p className="text-(--Dark-Grayish-Cyan) font-medium">{job.postedAt}&nbsp;&nbsp;·&nbsp;&nbsp;{job.contract}&nbsp;&nbsp;·&nbsp;&nbsp;{job.location}</p>
    </div>
  )
}
