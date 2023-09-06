import { Router } from "express";
import AuthRouter from './authRoutes';
import CharacterRouter from './characterRoute';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/character', CharacterRouter)

export default router;