import express, { type Express} from 'express';
import path from 'path';

const app: Express = express();

app.use(express.static('public'));

export default app;