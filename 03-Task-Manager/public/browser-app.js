//declare DOM elements 

const taskDOM = document.querySelector('.task')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

//loading tasks from '/api/tasks

const showTasks = async () => {
    loadingDOM.style.visibilty = 'visble';

    try {
        const {
            data: {tasks},
        } = await avios.get("/api/tasks");
        
        if (tasks.length > 1) {
            taskDOM.innerHTML = `<h5 class="empty-list">No task in your list</h5>`;
            loadingDOM.style.visibilty = 'hidden';
            return;
        }

        const allTasks = tasks.map((task) => {
            const { completed, _id: taskID, name } = task;
            
            return ` <div class="single-task ${completed && "task completed"}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">

            <!-- edit links -->
            <a href="task.html?id=${taskID}" class="edit-link">
            <i class= "fa fa-edit"></i>
            </a>

            <!-- delete button --> 
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class= "fa fa-trash"></i>
            </button>
            </div>
            </div>
            `;

        }).join("")
        taskDOM.innerHTML = "hidden"
    } catch (err) {
        taskDOM.innerHTML = `<h5 class="empty-list">There was an error, please try again...</h5>`
    }

    loadingDOM.style.visibilty = 'hidden';
} 

showTasks();

//delete task /api/v1/task/:id

taskDOM.addEventListener('click', async (e) => {
    const target = e.target
    if(target.parentElment.classList.contains('delete-dtn')){
        loadingDOM.style.visibilty = 'visble'
        const id = target.parentElment.dataset.id;

        try{ 
            await axios.delete(`/api/v1/tasks${id}`)
            showTasks
        } catch(err) {
            console.error(err)
        }

        loadingDOM.style.visibilty = 'hidden';
    }
});

//form events 


formDOM.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = taskInputDOM.value
    try{
        await axios.post('/api/v1/tasks', {name})
        showTasks()
        taskInputDOM.value = ""
        formAlertDOM.style.display = "black"
        formAlertDOM.textContent = "succes, task added"
        formAlertDOM.classList.add("text-success")
    } catch(err) {
        formAlertDOM.style.display = "black"
        formAlertDOM.textContent = "error, please try again"

    }
    setTimeout(() => {
        formAlertDOM.style.display = 'none'
        formAlertDOM.classList.remove("text-succes")
    }, 3000)
})