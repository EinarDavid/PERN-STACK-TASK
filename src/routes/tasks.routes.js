const {Router} = require('express');
const { getAlltasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller')

const pool = require ('../db');

const router = Router();

router.get('/tasks', getAlltasks );

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask );

module.exports = router;