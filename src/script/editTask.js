const editIcon = document.querySelectorAll('.edit_icon');
const addTaskButtonEdit = document.querySelector('#add_task');
const tasksEdit = document.querySelector('#tasks');
const titleEdit = document.querySelector('#tasks_title');
const cancelEdit = document.querySelector('.cancel_edit');
const editForm = document.querySelector('#edit_task_form')

editIcon.forEach(edit => {

    edit.addEventListener('click', () => {

        const task = edit.closest('.task');

        taskId = task.dataset.id;

        editForm.classList.remove('hide');
        tasksEdit.classList.add('blur');
        titleEdit.classList.add('blur');
        addTaskButtonEdit.classList.add('blur');

        const taskName = document.querySelector('input[name="edit_task_name"]').value;
        const taskDesc = document.querySelector('textarea[name="edit_task_desc"]').value;
        const taskDate = document.querySelector('input[name="edit_final_date"]').value;

    })
})

const editButton = document.querySelector('.edit_task')

editButton.addEventListener('click', async () => {

    const response = await fetch('http://localhost:80/dealer-force-test/app/index.php?method=tasksk&action=edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskId: taskId,
            taskName: taskName,
            taskDesc: taskDesc,
            taskDate: taskDate
        })
    })

    if(!response.ok){
        throw new Error('Não foi possível editar task');
    }
})
cancelEdit.addEventListener('click', () => {
    editForm.classList.add('hide');
    tasksEdit.classList.remove('blur');
    titleEdit.classList.remove('blur');
    addTaskButtonEdit.classList.remove('blur');
})