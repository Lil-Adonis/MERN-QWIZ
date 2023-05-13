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

app.listen (8080, () => {
    console.log('server connected')
})