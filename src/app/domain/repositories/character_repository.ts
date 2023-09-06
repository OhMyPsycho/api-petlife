import { Model } from "sequelize";
import { paginationInput } from "../../schemas/pagination_schema";
import BaseRepository from "../base/base_repository";
import { CharacterInput } from "../interfaces/character_interface";
import Character from "../models/character_model";
import { query } from "express";

class CharacterRepository {
    create(item: CharacterInput): Promise<Character> {
        return Character.create(item);
    }

    findAll({query: {limit, page}}: paginationInput): Promise<{ count: number; rows: Character[] }> {
        return Character.findAndCountAll({limit, offset: 0});
    }

    findOne(id: number): Promise<Character | null> {
        return Character.findByPk(id);
    }

    update(model: Character, data: CharacterInput): Promise<Character> {
        return model.update(data);
    }

    delete(id: number): Promise<number> {
        return Character.destroy({where: {id}});
    }

}

 export default CharacterRepository;