import { Job } from "../types"
import { Tag } from './Tag';

type CardProps = {
    job :Job
}
export const Card = ({ job }:CardProps) => {
  return (
    <article className="w-[90%] bg-white mx-4 shadow-lg min-h-64 shadow-cyan-700/10 relative  rounded-md  px-6 flex flex-col gap-4 max-w-[1110px] md:flex-row md:items-center md:min-h-[152px] md:gap-6">
            {
                (job.new && job.featured) && <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-(--Desaturated-DarkCyan) rounded-bl-md rounded-tl-md z-10" />
            }
            <figure className="w-[48px] absolute top-0 left-6 translate-y-[-50%] md:static md:w-[88px] md:translate-y-0">
                <img src={job.logo} alt="company logo" className="w-full block" />
            </figure>
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
                <h2 className="text-black font-bold">{job.position}</h2>
                <p className="text-(--Dark-Grayish-Cyan) font-medium">{job.postedAt}&nbsp;&nbsp;·&nbsp;&nbsp;{job.contract}&nbsp;&nbsp;·&nbsp;&nbsp;{job.location}</p>
            </div>
            <div className="px-6 h-[1px] bg-(--Dark-Grayish-Cyan) md:hidden"></div>
            <div className="flex flex-wrap gap-4 md:grow md:justify-end">
                <Tag text={job.role}/>
                <Tag text={job.level}/>
                {
                    job.tools.map((l)=>(
                        <Tag key={`tool-${l}-${job.id}`} text={l}/>
                    ))
                }
                {
                    job.languages.map((l)=>(
                        <Tag key={`lang-${l}-${job.id}`} text={l}/>
                    ))
                }
            </div>
    </article>
  )
}
