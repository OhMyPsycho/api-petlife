import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { BannerAttributes, BannerInput } from "../interfaces/banner_interface";
import { AdsAttributes, AdsInput } from "../interfaces/ads_interface";
import { RaceAttributes, RaceInput } from "../interfaces/race_interface";

class Raze extends Model<RaceAttributes, RaceInput> implements RaceAttributes {
    name!: string;
    imagen!: string;
    characters!: string[];
    behavior!: string;
    education!: string;
    status!: boolean
    photo1!: string;
    photo2!: string;
    photo3!: string;
    id!: number;

    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

Raze.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    characters: {
        type: DataTypes.ARRAY,
        values: [],
        allowNull: true
    },
    behavior: {
        type: DataTypes.STRING,
        allowNull: true
    },
    education: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: true,
    sequelize,
    modelName: 'races'
});

export default Raze;