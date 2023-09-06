import { CharacterInput } from "../domain/interfaces/character_interface";
import { ResponseData } from "../domain/interfaces/response_data";
import CharacterRepository from "../domain/repositories/character_repository";

class CharacterUseCase {
    constructor(private characterRepository: CharacterRepository) {}

    async create(data: CharacterInput): Promise<ResponseData> {
        const character = await this.characterRepository.create(data);
        if(!character) throw  new Error("Error al crear character");
        return {
            data: character.toJSON(),
            ok: true,
            message: "character creado con exito",
        }
    }

    // async findAll(): Promise<ResponseData> {
    //     const characters = await this.characterRepository.findAll()
    // }

}



export default CharacterUseCase;