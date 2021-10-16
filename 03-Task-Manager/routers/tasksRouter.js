/*  post('/') createTask => adds a new task to the list 
    put('/:id') updateTask => update a single task
    delete('/:id') removeTask => deletes a single task
    get('/:id') getTask => read a single task
    delete('/') clearTask => deletes all task 
    get('/') getAllTasks => readl all tasks 
*/

const express = require('express');

const router =  express.Router()

const {
    getTask,
    removeTask,
    clearTask,
    getAllTasks,
    updateTask,
    createTask,
} = require('../controllers/tasksCon')

router.route('/').post(createTask).delete(clearTask).get(getAllTasks)
router.route('/:id').put(updateTask).delete(removeTask).get(getTask)

module.exports = router;