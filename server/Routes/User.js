import {Router} from 'express'
import { GetUser, dislikes, likes } from '../Controllers/UserController.js';

const router = Router();

// Get User
router.get('/:id',GetUser)
// Like a post
router.put('/post/like/:postId',likes)
// Dislike a post
router.put('/post/dislike/:postId',dislikes)


export default router