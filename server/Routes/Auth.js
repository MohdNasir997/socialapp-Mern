import {Router} from 'express'
import { Register, facebookAuth, googleAuth, signIn, signOut, twiiterAuth } from '../Controllers/AuthController.js';

const router = Router();

//Sign IN
router.post('/sign-in',signIn)

// Sign Up
router.post('/register',Register)

// Sign Out
router.get('/sign-out',signOut)

// Other Sign In & Register

router.post('/google',googleAuth)
router.post('/twitter',twiiterAuth)
router.post('/facebook',facebookAuth)




export default router