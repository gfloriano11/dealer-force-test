async function getTasks(){

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

        const data = await response.json();
        console.log(data);

    } catch (error){
        console.log('Erro ao buscar tasks', error);
    }
}

getTasks()