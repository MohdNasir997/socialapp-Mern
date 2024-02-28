import express from 'express'
import dotenv from 'dotenv';
import { ConnectDB } from './ConnectDB';
dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;
// connect to MONGO
ConnectDB();
// listen
app.listen(PORT,() => {
    console.log('listening to Port 3000')
})