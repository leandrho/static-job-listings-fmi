import { z } from 'zod';
import { JobSchema, JobListSchema } from '../schemas/job-schema';

export type Job = z.infer<typeof JobSchema>;
export type JobList = z.infer<typeof JobListSchema>;