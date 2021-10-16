const asyncWrapper = require('../middleware/async')



const getAllTasks =  asyncWrapper( (req, res) => {
// const tasks = await Task.find({});
})


const createTask = asyncWrapper((req, res) => {})
const updateTask = asyncWrapper((req, res) => {})
const removeTask = asyncWrapper((req, res) => {})
const clearTask = asyncWrapper((req, res) => {})
const getTask = asyncWrapper((req, res) => {})


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    removeTask,
    clearTask,
    getTask,
}