import {Optional} from 'sequelize'

// export enum StatusRace {
//     Up = "",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

export interface RaceAttributes {
    id: number;
    name: string;
    imagen: string;
    characters: string[];
    behavior: string;
    education: string;
    status: boolean
    photo1: string;
    photo2: string;
    photo3: string;
    createAt?: Date;
    updateAt?: Date;

}

export interface RaceInput extends Optional<RaceAttributes, 'id' | 'status'> {}
export interface RaceOuput extends Required<RaceAttributes> {}
