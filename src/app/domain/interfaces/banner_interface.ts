import {Optional} from 'sequelize'

// export enum StatusBanner {
//     Up = "",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }

export interface BannerAttributes {
    id: number;
    title: string;
    imagen: string;
    website: string;
    phone: string;
    status: boolean
    createAt?: Date;
    updateAt?: Date;

}

export interface BannerInput extends Optional<BannerAttributes, 'id' | 'status' | 'phone' | 'website'> {}
export interface BannerOuput extends Required<BannerAttributes> {}
