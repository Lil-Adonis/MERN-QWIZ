import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';

const app = express()


/** App middleware */
app.use(morgan(tiny));
app.use(cors());
app.use(express.json());
config();

/** App middleware */
const port = process.env.PORT 



/** routes */
app.get('/', (req,res) => {
    try{
        res.json('get request')
    }catch(error){
        res.json(error)
    }
})

app.listen (port, () => {
    console.log(`server connected  http://localhost:${port}`)
})