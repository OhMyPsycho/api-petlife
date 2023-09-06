import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { UserAttributes, UserInput } from "../interfaces/user_interface";

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    name!: string;
    lastName!: string;
    email!: string;
    rol!: string;
    status!: string;
    password!: string;
    id!: number;

    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rol: {
        type: DataTypes.ENUM,
        values: ['owner', 'customer']
    },
    status: {
        type: DataTypes.ENUM,
        values: ['active', 'disable', 'delete']
    }
}, {
    timestamps: true,
    sequelize,
    modelName: 'user'
});

export default User;