import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import serveIndex from 'serve-index';
import path from 'path';


dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

// configure middleware
app.use('/static', express.static(path.join(__dirname, '..', '/public', 'static')));
app.use('/static', serveIndex(path.join(__dirname, '..', '/public', 'static')));

app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    
});

app.listen(PORT, () => {
    console.log('server is running');
});