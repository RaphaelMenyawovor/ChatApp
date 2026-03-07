import express, { type Express} from 'express';
import path from 'path';

const app: Express = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


export default app;