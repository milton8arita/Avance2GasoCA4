const express = require('express')
const app = express();

const db = require('./database');

//llamando a index. 
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const usuarios = require('./router/usuarioroute');
app.use(usuarios);

const gasolineras = require('./router/gasolineraroute');
app.use(gasolineras);

const eventos = require('./router/eventosroute');
app.use(eventos);

const productos = require('./router/productosroute');
app.use(productos);

const calificacion = require('./router/calificacionroute');
app.use(calificacion)

const incidentes = require('./router/incidentesroute');
app.use(incidentes)


app.listen(3000, ()=>{
    console.log('Server is up!');
})





