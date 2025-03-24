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

        const tasksContainer = document.querySelector('#tasks');
        const taskContainer = document.createElement('div');
        const titleContainer = document.createElement('div');
        const descContainer = document.createElement('div');
        const dateContainer = document.createElement('div');
        const statusContainer = document.createElement('div');
        const checkContainer = document.createElement('div');
        const checkIcon = document.createElement('img');
        const editContainer = document.createElement('div');
        const deleteContainer = document.createElement('div');
        const editIcon = document.createElement('img');
        const trashIcon = document.createElement('img');
        const taskInfo = document.createElement('div');
        const actionsContainer = document.createElement('div');
        const otherInfo = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskDesc = document.createElement('p');
        const finalDate = document.createElement('p');
        const taskStatus = document.createElement('p');

        const [ano, mes, dia] = task.final_date.split("-");
        const formattedDate = `${dia}/${mes}/${ano}`;

        const taskId = task.id;
        
        taskTitle.innerText = task.task_name;
        taskDesc.innerText = task.task_desc;
        finalDate.innerText = formattedDate;
        taskStatus.innerText = task.task_status;

        tasksContainer.appendChild(taskContainer);
        taskContainer.appendChild(checkContainer);
        taskContainer.setAttribute('task_id', task.id);
        checkContainer.appendChild(checkIcon);
        actionsContainer.appendChild(editContainer);
        actionsContainer.appendChild(deleteContainer);
        editContainer.appendChild(editIcon);
        deleteContainer.appendChild(trashIcon);
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
        editContainer.classList.add('icon');
        editContainer.classList.add('edit_icon');
        deleteContainer.classList.add('icon');
        actionsContainer.classList.add('actions')
        titleContainer.classList.add('task_title');
        descContainer.classList.add('task_desc');
        dateContainer.classList.add('created_at');
        statusContainer.classList.add('task_status');

        editIcon.addEventListener('click', () => {
            
            editForm.classList.remove('hide');
            titleEdit.classList.add('blur');
            addTaskButtonEdit.classList.add('blur');
            tasksContainer.classList.add('blur');
        })
        

    })
    
}



const addTaskButtonEdit = document.querySelector('#add_task');
const titleEdit = document.querySelector('#tasks_title');
const cancelEdit = document.querySelector('.cancel_edit');
const editForm = document.querySelector('#edit_task_form')
const editButton = document.querySelector('.edit_task');

editButton.addEventListener('click', async () => {

    tasks.forEach(task => {
        
    })
            
    const taskNameInput = document.querySelector('[name="edit_task_name"]').value;
    const taskDescInput = document.querySelector('[name="edit_task_desc"]').value;
    const taskDateInput = document.querySelector('[name="edit_final_date"]').value;
    const taskStatusInput = document.querySelector('[name="edit_status"]').value;

    console.log(taskId);
    console.log(taskNameInput);
    console.log(taskDescInput);
    console.log(taskDateInput);
    console.log(taskStatusInput);
    
    if(taskNameInput !== ''){
        console.log('fetch feito');
        const updatedTask = {
            id: taskId,
            task_name: taskNameInput,
            task_desc: taskDescInput,
            final_date: taskDateInput,
            task_status: taskStatusInput
        };

        try {
            const response = await fetch('../app/index.php?method=tasks&action=edit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar a tarefa');
            }

            setTimeout(() => {
                window.location.reload();
            }, 500)
        } catch (error) {
            console.error('Erro ao editar a tarefa:', error);
        }
    }
    
});

getTasks()