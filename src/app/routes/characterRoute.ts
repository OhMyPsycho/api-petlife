import { Router } from "express";
import AuthController from "../controllers/authController";
import AuthUseCase from "../usecases/authUseCase";
import UserRepository from "../domain/repositories/userRepository";
import { schemaValidator } from "../../middleware/schema_validator";
import { CharacterCreateSchema } from "../schemas/characterSchema";
import { checkJwt } from "../../middleware/session";
import CharacterRepository from "../domain/repositories/character_repository";
import CharacterUseCase from "../usecases/characterUseCase";
import CharacterController from "../controllers/character_controller";

const router = Router();

const characterRepository = new CharacterRepository();
const characterUseCase = new CharacterUseCase(characterRepository);
const controller = new CharacterController(characterUseCase);

router.post('/', checkJwt, schemaValidator(CharacterCreateSchema), controller.create.bind(controller))
// router.post('/register', schemaValidator(RegisterSchema), authController.createUser.bind(authController))

export default router;