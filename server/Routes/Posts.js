import {Router} from 'express'
import { createpost, getPost, getposts,randompost } from '../Controllers/PostController.js';

const router = Router();

// Get Post
router.get('/:id',getPost)
// Get All post
router.get('/',getposts)
// Get Random Post
router.get('/random',randompost)

// Get Search Post
router.get('/search')
// Post Create Post
router.post('/',createpost)
// PUt Update Post
router.put('/:id')




export default router