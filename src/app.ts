import express from 'express';
import cors from 'cors';
import "dotenv/config";
import sequelize from './app/config/database';
import rootRouter from './app/routes/index';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static(`${process.cwd()}/public`))


app.use('/api', rootRouter);

sequelize.sync()
.then(() => {
    console.log("connected to db")
    app.listen(PORT, () => console.log(`Run in http://localhost:${PORT}`))
})
.catch(error => {
    console.error('Unable to connect to the database:', error);
})

