import { Router } from 'express';
import userService from '../services/user.service';

const router = Router();

router.get('/v1/users', userService.gerUsers);

export default router;