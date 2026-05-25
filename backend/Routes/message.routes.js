import express from 'express';
import { sendMessage } from '../Controllers/message.controller.js';
// 
import protectRoute from '../middleware/protectedRoutes.js';

const router = express.Router()


router.get('/:id, protectRoute, getMessage')
router.post('/send/:id', protectRoute, sendMessage)









export default Router