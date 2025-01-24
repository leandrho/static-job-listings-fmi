import { useContext } from "react"
import { JobContext } from "../context/JobsProvider";


export const useJobs = () => {
    const context = useContext(JobContext);
    if(!context)
        throw new Error('Usar dentro del Provider...');
    
    return {
        ...context
    }
}
