import {Dialect, Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    dialect: process.env.DIALECT as Dialect,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT as string),
});

export default sequelize;