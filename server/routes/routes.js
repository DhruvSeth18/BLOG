import express from 'express';
import { MemberSign } from '../controllers/user-controllers.js';
const router  = express.Router();

router.use('/signup',MemberSign);

export default router;