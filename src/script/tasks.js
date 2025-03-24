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
        trashIcon.classList.add('icon');
        actionsContainer.classList.add('actions')
        titleContainer.classList.add('task_title');
        descContainer.classList.add('task_desc');
        dateContainer.classList.add('created_at');
        statusContainer.classList.add('task_status');
    })
    

}

getTasks()