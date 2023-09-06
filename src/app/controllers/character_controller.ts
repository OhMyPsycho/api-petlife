import { Request, Response } from "express";
import { CharacterInput } from "../domain/interfaces/character_interface";
import CharacterUseCase from "../usecases/characterUseCase";


class CharacterController {
    constructor(private caracterCase: CharacterUseCase) {}
    async create(req: Request, res: Response) {
        const {name} = req.body;
        const character: CharacterInput = {name}

        try {
            const response = await this.caracterCase.create(character);
            res.json(response);
        } catch (error: any) {

            res.status(400).json({error: error.message, ok: false});
        }
    }
}

export default CharacterController;