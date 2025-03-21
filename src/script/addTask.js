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

cancelButton.addEventListener('click', () => {
    const tasks = document.querySelector('#tasks');
    const title = document.querySelector('#tasks_title');

    const addTaskForm = document.querySelector('#add_task_form');

    tasks.classList.remove('blur');
    title.classList.remove('blur');
    addTaskButton.classList.remove('blur');
    addTaskForm.classList.add('hide');
})