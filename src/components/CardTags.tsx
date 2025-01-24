import { Job } from "../types"
import { Tag } from "./Tag"

type CardTagsProps = {
    job :Job
}
export const CardTags = ({ job }:CardTagsProps) => {
    
  return (
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
  )
}
