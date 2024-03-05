import {Router} from 'express'
import { GetUser } from '../Controllers/UserController.js';

const router = Router();

// Get User
router.get('/:id',GetUser)


export default router