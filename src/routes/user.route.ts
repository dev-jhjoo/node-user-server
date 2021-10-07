import { Router } from 'express';
import userService from '../services/user.service';

const router = Router();

router.get('/v1/users', userService.gerUsers);
router.post('/v1/users', userService.createUser);

export default router;