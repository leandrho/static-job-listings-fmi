
import data from '../data/data.json'
import { JobList } from '../types'
import { JobListSchema } from '../schemas/job-schema'

export const getJobs = () :JobList => {
    try {
        const ret = JobListSchema.safeParse(data);
        if(ret.success)
            return ret.data;
        else
            throw new Error('invalid json');
    } catch (error) {
        console.log('Error loading jobs from data.json')
        throw error;
    }
}