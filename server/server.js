require('./config/config');

//Se probo con postman y funciono con get y url postman localhost/3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // se tiene que instalar  npm i body-parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // cuando es app.use es un middelware

// parse application/json
app.use(bodyParser.json())

app.get('/usuarios', function(req, res) {
    res.json('Hello World')
})
app.post('/usuarios', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({ body });
    }




})
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuarios', function(req, res) {
    res.json('Delete')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto');
})