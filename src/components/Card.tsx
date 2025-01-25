import { Job } from "../types"

import { CardHeader } from './CardHeader';
import { CardTags } from './CardTags';

type CardProps = {
    job :Job,
}
export const Card = ({ job }:CardProps) => {
  return (
    <article className="w-full bg-white  shadow-lg min-h-64 shadow-cyan-700/10 relative  rounded-md  px-6 flex flex-col gap-4 md:flex-row md:items-center md:min-h-[152px] md:gap-6 animate-(--animate-opacity)">
        {
            (job.new && job.featured) && <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-(--Desaturated-DarkCyan) rounded-bl-md rounded-tl-md z-10" />
        }
        
        <figure className="w-[48px] absolute top-0 left-6 translate-y-[-50%] md:static md:w-[88px] md:translate-y-0">
            <img src={job.logo} alt="company logo" className="w-full block" />
        </figure>

        <CardHeader job={ job }/>

        <div className="px-6 h-[1px] bg-(--Dark-Grayish-Cyan) md:hidden"></div>
        
        <CardTags job={ job }/>
    </article>
  )
}
