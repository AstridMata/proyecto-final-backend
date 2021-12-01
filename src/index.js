const express = require('express');
const app = express();
//importando rutas
const publicRoutes = require('./routes/public_routes');
// const privateRoutes = require('./routes/private_routes');

const port = process.env.PORT || 8080;


//MIDLEWARES
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//rutas publicas
app.use(publicRoutes);
// app.use(bodyParser());

//colocar aqui el middleware de JWT

//rutas privadas
// app.use(privateRoutes);

//iniciamos servidor de express
app.listen(port,()=>{
  console.info(`Servidor escuchando por el puerto ${port} 🤘😎`)
})