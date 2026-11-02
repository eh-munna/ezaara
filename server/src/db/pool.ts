import { Pool } from 'pg';
import { env } from '../config/env.ts';

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}
export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});
