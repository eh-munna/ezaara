import express, { type Express, type Request, type Response } from 'express';
import { pool } from './db/pool.ts';

export const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/health', async (_: Request, res: Response) => {
  const { rows } = await pool.query('select now() as now');
  res.status(200).json({
    status: 'ok',
    time: rows[0].now,
  });
});
