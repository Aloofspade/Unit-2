const asyncWrapper = require('../middleware/async')
const Task = require("../models/Task")


const getAllTasks =  asyncWrapper( async (req, res) => {

const tasks = await Task.find({});

res.json({method: req.method, tasks });
})
const createTask =  asyncWrapper( async (req, res) => {

// res.json({method: req.method, task:  'createTask', body: req.body});

const task = await Task.create(req.body)
res.status(201).json({method: req.method, task, body: req.body})
})
const updateTask =  asyncWrapper( (req, res) => {
   
    res.json({method: req.method, task:  'updateTask',params: req.params, body: req.body});
    })
    const removeTask =  asyncWrapper( (req, res) => {
        
        res.json({method: req.method, task: 'removeTask', params: req.params});
        })
        const clearTasks =  asyncWrapper( (req, res) => {
            
            res.json({method: req.method, task:  'clearTasks'});
            })
            const getTask =  asyncWrapper(async (req, res) => {
                try{
                    const task  = await Task.findById(req.params.id);
                    if (!task){
                        return  res.status(404).json({ msg: `No task with id ${req.params.id}` } );
                    }
                    res.json({method: req.method, task, params: req.params});
                } catch (err) {
                    res.status(404).json({ err } );
                }
             
               
                })

              


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    removeTask,
    clearTasks,
    getTask
}


/* 
creating a libery DB

CLUSTER => libery 
COLLECTION => books 
| DOCUMENT => Harry Potter
| DOCUMENT 2 => Ergen 
COLLECTION => movies
| DOCUMENT => Avengers

*/

