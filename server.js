import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './config/db_connection.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { app, server } from './config/socket.js';


// const app = express();
app.use(cors());
app.use(bodyParser.json());

// configs
dotenv.config();
dbConnection();

// routes
app.use('/users', userRouter)
app.use('/messages', messageRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})