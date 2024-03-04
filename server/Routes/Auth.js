import {Router} from 'express'
import { Register } from '../Controllers/AuthController.js';

const router = Router();

//Sign IN
router.post('/sign-in')

// Sign Up
router.post('/register',Register)

// Sign Out
router.get('/sign-out')

// Other Sign In & Register

router.post('/google')
router.post('/twitter')
router.post('/facebook')




export default router