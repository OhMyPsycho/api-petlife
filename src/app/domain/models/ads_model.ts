import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { BannerAttributes, BannerInput } from "../interfaces/banner_interface";
import { AdsAttributes, AdsInput } from "../interfaces/ads_interface";

class Ads extends Model<AdsAttributes, AdsInput> implements AdsAttributes {
    title!: string;
    description: string;
    imagen!: string;
    website!: string;
    phone!: string;
    status!: boolean;
    id!: number;

    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

Ads.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: true,
    sequelize,
    modelName: 'ads'
});

export default Ads;