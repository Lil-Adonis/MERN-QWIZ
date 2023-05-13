import express from 'express';

const app = express()


/** routes */
app.get('/', (req,res) => {
    try{
        res.json('get request')
    }catch(error){
        res.json(error)
    }
})