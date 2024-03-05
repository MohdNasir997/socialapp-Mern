import {Router} from 'express'
import { getComment, postComment } from '../Controllers/CommentsController.js';

const router = Router();

// Get Comments
router.get('/:postId',getComment)
// Post Comment
router.post('/:postId',postComment)




export default router