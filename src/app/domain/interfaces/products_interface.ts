import {Optional} from 'sequelize'

export enum ProductState {
    DISABLE = "disable",
    ACTIVE = "active",
    DELETE = "delete",
  }

export interface ProductAttributes {
    id: number;
    name: string;
    description: string;
    imagen: string;
    price: number;
    stock: number;
    status: boolean
    createAt?: Date;
    updateAt?: Date;

}

export interface ProductInput extends Optional<ProductAttributes, 'id' | 'status'> {}
export interface ProductOuput extends Required<ProductAttributes> {}
