import {Optional} from 'sequelize'

// export enum StatusRace {
//     Up = "",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

export interface PetAttributes {
    id: number;
    name: string;
    imagen: string;
    dateBirthday: number;
    razaId: number;
    createAt?: Date;
    updateAt?: Date;

}

export interface PetInput extends Optional<PetAttributes, 'id'> {}
export interface PetOuput extends Required<PetAttributes> {}