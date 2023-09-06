import {Optional} from 'sequelize'

// export enum StatusBanner {
//     Up = "",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

export interface CharacterAttributes {
    id: number;
    name: string;
    createAt?: Date;
    updateAt?: Date;

}

export interface CharacterInput extends Optional<CharacterAttributes, 'id'> {}
export interface CharacterOuput extends Required<CharacterAttributes> {}