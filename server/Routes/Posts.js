import {Router} from 'express'

const router = Router();

// Get Post
router.get('/:id')
// Get All post
router.get('/')
// Get Random Post
router.get('/random')
// Get Search Post
router.get('/search')
// Post Create Post
router.post('/')
// PUt Update Post
router.put('/:id')




export default router