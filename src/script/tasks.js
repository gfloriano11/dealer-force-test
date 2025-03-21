async function getTasks(){
    
    let tasks;
    
    try{ 
        const response = await fetch('../app/index.php?method=tasks', {
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
        const taskTitle = document.createElement('p');

        taskTitle.innerText = task.task_name;
    })
    

}

getTasks()