import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
   url: 'postgresql://interviewer_owner:eWroz3QpOu7F@ep-calm-dawn-a1u08tpr.ap-southeast-1.aws.neon.tech/interviewer?sslmode=require',
//url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,  
},
});