const editIcon = document.querySelectorAll('.edit_icon');

editIcon.forEach(edit => {

    edit.addEventListener('click', () => {

        const task = edit.closest('.task');

        taskId = task.dataset.id;

        const editForm = document.querySelector('#edit_task_form')
    })
})