const editForm = document.querySelector('#edit_task_form');
const editTask = document.querySelector('.edit_task');
const tasksContainer = document.querySelector('#tasks');
const tasksTitle = document.querySelector('#tasks_title');
const addTaskButtonEdit = document.querySelector('#add_task_button');
const cancelEdit = document.querySelector('.cancel_edit');
let taskId;

async function getTasks(){
    
    let tasks;
    
    try{ 
        const response = await fetch('../app/index.php?method=tasks&action=get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(!response.ok){
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        
        tasks = await response.json();
        
    } catch (error){
        console.log('Erro ao buscar tasks', error);
    }
    
    tasks.forEach(task => {

        const taskContainer = document.createElement('div');
        const titleContainer = document.createElement('div');
        const descContainer = document.createElement('div');
        const dateContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const checkContainer = document.createElement('div');
        const checkIcon = document.createElement('img');
        const editIcon = document.createElement('img');
        const trashIcon = document.createElement('img');
        const taskInfo = document.createElement('div');
        const actionsContainer = document.createElement('div');
        const otherInfo = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskDesc = document.createElement('p');
        const finalDate = document.createElement('p');
        const taskStatus = document.createElement('p');

        taskTitle.innerText = task.task_name;
        taskDesc.innerText = task.task_desc;
        finalDate.innerText = task.final_date;
        taskStatus.innerText = task.task_status;

        tasksContainer.appendChild(taskContainer);
        taskContainer.appendChild(checkContainer);
        taskContainer.setAttribute('task_id', task.id);
        checkContainer.appendChild(checkIcon);
        actionsContainer.appendChild(editIcon);
        actionsContainer.appendChild(trashIcon);
        checkIcon.setAttribute('src', 'assets/check-mark.svg');
        editIcon.setAttribute('src', 'assets/line-md--edit.svg');
        trashIcon.setAttribute('src', 'assets/material-symbols--delete-outline.svg');
        taskContainer.appendChild(titleContainer);
        taskContainer.appendChild(descContainer);
        taskContainer.appendChild(taskInfo);
        taskContainer.appendChild(actionsContainer);
        taskContainer.appendChild(otherInfo);
        otherInfo.appendChild(dateContainer);
        otherInfo.appendChild(statusContainer);

        taskInfo.appendChild(titleContainer);
        taskInfo.appendChild(descContainer);
        taskInfo.appendChild(otherInfo);

        titleContainer.appendChild(taskTitle);
        descContainer.appendChild(taskDesc);
        dateContainer.appendChild(finalDate);
        statusContainer.appendChild(taskStatus);

        taskInfo.classList.add('task_info')
        otherInfo.classList.add('other_info');
        taskContainer.classList.add('task');
        checkContainer.classList.add('check');
        checkIcon.classList.add('check_icon');
        editIcon.classList.add('icon');
        editIcon.classList.add('edit_icon');
        trashIcon.classList.add('icon');
        trashIcon.classList.add('delete_icon');
        actionsContainer.classList.add('actions')
        titleContainer.classList.add('task_title');
        descContainer.classList.add('task_desc');
        dateContainer.classList.add('created_at');
        statusContainer.classList.add('task_status');

        const editIcons = document.querySelectorAll('.edit_icon');
        const deleteIcons = document.querySelectorAll('.delete_icon');
    
        editIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                // Pegar o ID da task mais próxima
                const taskContainer = icon.closest('.task');
                taskId = taskContainer.getAttribute('task_id');

                editForm.classList.remove('hide');
                tasksContainer.classList.add('blur');
                tasksTitle.classList.add('blur');
                addTaskButtonEdit.classList.add('blur');
                
            });
        });

        deleteIcons.forEach(icon => {
            icon.addEventListener('click', async () => {
                const taskContainer = icon.closest('.task');
                taskId = taskContainer.getAttribute('task_id');
                console.log('clicou pra excluir o id', taskId);

                try {

                    const response = await fetch('http://localhost:80/dealer-force-test/app/index.php?method=tasks&action=delete', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: taskId,
                        })
                    })
            
                    if(!response.ok){
                        throw new Error('Erro ao deletar task');
                    }
            
                    setInterval(() => {
                        window.location.reload();
                    }, 500);
            
                    
                } catch (error){
                    console.log('Erro ao deletar task', error)
                }
            })
        })
    })
}

cancelEdit.addEventListener('click', () => {
    editForm.classList.add('hide');
    tasksContainer.classList.remove('blur');
    tasksTitle.classList.remove('blur');
    addTaskButtonEdit.classList.remove('blur');
})

editTask.addEventListener('click', async () => {
    console.log('editando task com o id: ', taskId);

    const taskName = document.querySelector('[name="edit_task_name"]').value;
    const taskDesc = document.querySelector('[name="edit_task_desc"]').value;
    const taskDate = document.querySelector('[name="edit_final_date"]').value;
    const taskStatus = document.querySelector('[name="edit_status"]').value;

    console.log(taskName);
    console.log(taskDesc);
    console.log(taskDate);
    console.log(taskStatus);

    try {

        const response = await fetch('http://localhost:80/dealer-force-test/app/index.php?method=tasks&action=edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: taskId,
                task_name: taskName,
                task_desc: taskDesc,
                task_date: taskDate,
                task_status: taskStatus
            })
        })

        if(!response.ok){
            throw new Error('Erro ao editar task');
        }

        setInterval(() => {
            window.location.reload();
        }, 500);

        
    } catch (error){
        console.log('Erro ao editar task', error)
    }
})

getTasks()