async function getTasks(){

    try{ 
        const response = await fetch('../app/model/tasks.php', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

        if(!response.ok){
            throw new Error('Erro ao buscar tasks');
        }

        const data = await response.json();
        console.log(data);

    } catch {
        console.log('Erro ao buscar tasks');
    }
}

getTasks()