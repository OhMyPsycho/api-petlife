import {Optional} from 'sequelize'

export interface UserAttributes {
    id: number;
    name: string;
    lastName: string;
    password: string;
    email: string;
    rol: string;
    status: string;
    createAt?: Date;
    updateAt?: Date;

}

export interface UserInput extends Optional<UserAttributes, 'id' | 'name' | 'lastName' | 'status' | 'rol'> {}
export interface UserOuput extends Required<UserAttributes> {}
