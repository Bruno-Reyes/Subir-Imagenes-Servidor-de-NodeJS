const express = require('express')
const morgan = require('morgan')
const path = require('path')



const app = express()

//Middlewares

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/upload'))

app.listen(5000, () => {
    console.log('Servidor en el puerto 5000|')
    
})
