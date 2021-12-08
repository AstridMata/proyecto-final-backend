const express = require('express');
const router = express.Router();

//importando controladores
const {createUser,modifyUser,deleteUser,getData,login} = require('../controllers/users.controllers');
const {createTask, getTask,modifyTask,deleteTask} = require('../controllers/todos.controllers');

//    =>/users
//app.METODO('RUTA',(req,res)=>{

//})
router.get('/', getData);
router.post('/users', createUser);
router.put('/users/:id',modifyUser);
router.delete('/users/:id',deleteUser);

// RUTA DE TODOS
router.post('/tasks',createTask);
router.get('/tasks',getTask);
router.put('/tasks/:id',modifyTask);
router.delete('/tasks/:id',deleteTask);

// login    //ruta   //controlador
router.post('/login',login);




module.exports = router;