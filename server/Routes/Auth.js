import {Router} from 'express'
import { Register, signIn, signOut } from '../Controllers/AuthController.js';

const router = Router();

//Sign IN
router.post('/sign-in',signIn)

// Sign Up
router.post('/register',Register)

// Sign Out
router.get('/sign-out',signOut)

// Other Sign In & Register

router.post('/google')
router.post('/twitter')
router.post('/facebook')




export default router