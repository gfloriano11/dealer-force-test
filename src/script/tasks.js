function getTasks(){

    try{ 
        const response = fetch('../../app/model/tasks.php', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('Erro ao buscar tasks');
        }

        console.log(response);

    } catch {
        console.log('Erro ao buscar tasks');
    }
}