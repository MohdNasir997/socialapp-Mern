import express from 'express'
import dotenv from 'dotenv';
import { ConnectDB } from './ConnectDB.js';
import AuthRoutes from './Routes/Auth.js'
import PostRoutes from './Routes/Posts.js'
import MessageRoutes from './Routes/Messages.js'
import CommentsRoutes from './Routes/Comments.js'
import UserRoutes from './Routes/User.js'
dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;
// connect to MONGO
ConnectDB();

app.use(express.json())
// routes

// auth
app.use('/api/auth',AuthRoutes)
// Posts
app.use('/api/posts',PostRoutes)
// Messages
app.use('/api/messages',MessageRoutes)
// Comments
app.use('/api/comments',CommentsRoutes)
// User
app.use('/api/users',UserRoutes)

// listen
app.listen(PORT,() => {
    console.log('listening to Port 3000')
})