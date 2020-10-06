require('./config/config');

//Se probo con postman y funciono con get y url postman localhost/3000
const express = require('express')

const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')
    // se tiene que instalar  npm i body-parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // cuando es app.use es un middelware

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        throw err;

    }
    console.log('Base de Datos online');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto');
})