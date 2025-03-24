const addTaskButton = document.querySelector('#add_task');
const cancelButton = document.querySelector('.cancel_add_button');

addTaskButton.addEventListener('click', () => {

    const tasks = document.querySelector('#tasks');
    const title = document.querySelector('#tasks_title');

    const addTaskForm = document.querySelector('#add_task_form');

    tasks.classList.add('blur');
    title.classList.add('blur');
    addTaskButton.classList.add('blur');
    addTaskForm.classList.remove('hide');

});

const createTask = document.querySelector('.create_button');

createTask.addEventListener('click', async () => {

    const taskName = document.querySelector('[name="task_name"]').value;
    const taskDesc = document.querySelector('[name="task_desc"]').value;
    const taskDate = document.querySelector('[name="final_date"]').value;

    try {

        const response = await fetch('http://localhost:80/dealer-force-test/app/index.php?method=tasks&action=create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskName: taskName,
                taskDesc: taskDesc,
                taskDate: taskDate
            })
        })

        if(!response.ok){
            throw new Error('Erro ao criar task');
        }

        
    } catch (error){
        console.log('Erro ao criar task', error)
    }
})
cancelButton.addEventListener('click', () => {
    const tasks = document.querySelector('#tasks');
    const title = document.querySelector('#tasks_title');
    const inputName = document.querySelector('[name="task_name"]');
    const inputDesc = document.querySelector('[name="task_desc"]');
    const inputDate = document.querySelector('[name="final_date"]');

    const addTaskForm = document.querySelector('#add_task_form');

    tasks.classList.remove('blur');
    title.classList.remove('blur');
    addTaskButton.classList.remove('blur');
    addTaskForm.classList.add('hide');
    inputName.value = '';
    inputDesc.value = '';
    inputDate.value = '';
})