import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
//async function main() {
  //  const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
    // const db = drizzle(sql);
//}
//main();
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
    export const db = drizzle(sql,{schema});