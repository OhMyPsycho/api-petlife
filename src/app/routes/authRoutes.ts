import { Router } from "express";
import AuthController from "../controllers/authController";
import AuthUseCase from "../usecases/authUseCase";
import UserRepository from "../domain/repositories/userRepository";
import { schemaValidator } from "../../middleware/schema_validator";
import { LoginSchema, RegisterSchema } from "../schemas/auth_schema";

const router = Router();

const userRepository = new UserRepository();
const authUseCase = new AuthUseCase(userRepository, 'secret')
const authController = new AuthController(authUseCase);

router.post('/login', schemaValidator(LoginSchema), authController.login.bind(authController))
router.post('/register', schemaValidator(RegisterSchema), authController.createUser.bind(authController))

export default router;