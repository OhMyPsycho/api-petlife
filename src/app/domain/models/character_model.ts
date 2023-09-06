import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { CharacterAttributes, CharacterInput } from "../interfaces/character_interface";

class Character extends Model<CharacterAttributes, CharacterInput> implements CharacterAttributes {
    name!: string;
    id!: number;

    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: true,
    sequelize,
    modelName: 'characters'
});

export default Character;