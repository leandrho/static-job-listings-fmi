import { z } from 'zod'

export const JobSchema = z.object({
    id: z.number(),
    company: z.string(),
    logo: z.string(),
    new: z.boolean(),
    featured: z.boolean(),
    position: z.string(),
    role: z.string(),
    level: z.string(),
    postedAt: z.string(),
    contract: z.string(),
    location: z.string(),
    languages: z.array(z.string()),
    tools: z.array(z.string())
})
export const JobListSchema = z.array(JobSchema);