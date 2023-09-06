import {Optional} from 'sequelize'

// export enum StatusBanner {
//     Up = "",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

export interface AdsAttributes {
    id: number;
    title: string;
    description: string;
    imagen: string;
    website: string;
    phone: string;
    status: boolean
    createAt?: Date;
    updateAt?: Date;

}

export interface AdsInput extends Optional<AdsAttributes, 'id' | 'status' | 'phone' | 'website'> {}
export interface AdsOuput extends Required<AdsAttributes> {}
