const asyncWrapper = require('../middleware/async')



const getAllTasks =  asyncWrapper( (req, res) => {
// const tasks = await Task.find({});
res.json({method: req.method, task:  'getAllTasks'});
})
const createTask =  asyncWrapper( async (req, res) => {

// res.json({method: req.method, task:  'createTask', body: req.body});

const task = await Task.create(req.body)
res.status(201).json({ task })
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
            const getTask =  asyncWrapper( (req, res) => {
              
                res.json({method: req.method, task:  'getTask', params: req.params});
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

