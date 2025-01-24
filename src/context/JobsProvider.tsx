import { createContext, ReactNode, useEffect, useState } from "react"
import { JobList } from '../types/index';
import { getJobs } from "../services";

type JobContextType = {
    jobs :JobList,
    labels: string[],
    addLabel :( label:string)=>void,
    rmLabel :( label:string)=>void,
    clearLabels :()=>void
}
export const JobContext = createContext({} as JobContextType);

const filterJob = (label:string, jobs:JobList) :JobList=>{
    let ret :JobList = [];
    ret = jobs.filter((j)=>{
        if(j.role == label) return true;
        if(j.level == label) return true;
        if(j.languages.includes(label))return true;
        if(j.tools.includes(label)) return true;
        return false;
    });
    return ret;
}
const filterJobs = (labels:string[], jobs:JobList) :JobList=>{
    let ret :JobList = jobs;
    for(let i = 0; i<labels.length; i++){
        const ff :JobList = filterJob(labels[i], ret);
        ret=ff;
    }
    return ret;
}

type JobsProviderProps = {
    children: ReactNode
}
export const JobsProvider = ({children}:JobsProviderProps) => {
    
    const [jobsP, setJobsP] = useState<JobList>([])
    const [jobs, setJobs] = useState<JobList>([])
    const [labels, setLabels] = useState<string[]>([])

    useEffect(() => {
        try {
            const js = getJobs();
            setJobsP(js);
            setJobs(js);
        } catch (error) {
            console.log('Init error - check data source')
        }
    }, [])

    const addLabel = (label :string) :void => {
        if(labels.includes(label))
            return;
        setLabels(prev=>[...prev,label]);
        const newJobs = filterJob(label, jobs);
        setJobs(newJobs);
    }
    const rmLabel = (label :string) :void => {
        if(!labels.includes(label))
            return;
        const newLabels = labels.filter((p)=>p!==label);
        setLabels(newLabels);
        setJobs(filterJobs(newLabels, jobsP));
    }
    const clearLabels = () :void  => {
        setLabels([]);
        setJobs(jobsP);
    }
  return (
    <JobContext.Provider value={{jobs, labels, addLabel, rmLabel, clearLabels}}>
        {children}
    </JobContext.Provider>
  )
}
