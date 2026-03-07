import express, { type Express} from 'express';

const app: Express = express();

// Serve static files from the 'public' directory
app.use(express.static('./public'));



export default app;