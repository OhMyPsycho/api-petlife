import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { BannerAttributes, BannerInput } from "../interfaces/banner_interface";

class Banner extends Model<BannerAttributes, BannerInput> implements BannerAttributes {
    title!: string;
    imagen!: string;
    website!: string;
    phone!: string;
    status!: boolean;
    id!: number;

    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

Banner.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    modelName: 'banners'
});

export default Banner;