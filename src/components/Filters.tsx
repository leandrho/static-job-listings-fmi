import { useJobs } from "../hooks/useJobs"
import { Label } from "./Label"

export const Filters = () => {
    const {labels, rmLabel, clearLabels} = useJobs();
    const closeLabel = ( label :string )=>{
        rmLabel(label);
    }
  return (
    <>
    {
        labels.length==0 
        ? <div className="bg-transparent h-[72px] "></div>
        : <div className="w-full bg-white  shadow-lg py-2 shadow-cyan-700/10 relative  rounded-md  px-6 flex justify-between gap-4 max-w-[1110px] flex-row items-center  md:gap-6 animate-(--animate-opacity)">
            <div className="flex flex-wrap gap-4 py-4">
                {
                    labels.map((lab)=>(
                        <Label key={lab} text={lab} closeLabel={closeLabel} />
                    ))
                }
            </div>
            <button 
                className="text-(--Dark-Grayish-Cyan) font-bold hover:underline hover:text-(--Desaturated-DarkCyan) cursor-pointer"
                onClick={clearLabels}
            >Clear</button>
        </div>

    }
    </>
  )
}
