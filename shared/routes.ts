import { z } from 'zod';
import { 
  projects, experience, education, skills, achievements, contact
} from './schema';

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(z.custom<typeof experience.$inferSelect>()),
      },
    },
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(z.custom<typeof education.$inferSelect>()),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    },
  },
  achievements: {
    list: {
      method: 'GET' as const,
      path: '/api/achievements',
      responses: {
        200: z.array(z.custom<typeof achievements.$inferSelect>()),
      },
    },
  },
  contact: {
    list: {
      method: 'GET' as const,
      path: '/api/contact',
      responses: {
        200: z.array(z.custom<typeof contact.$inferSelect>()),
      },
    },
  },
};
