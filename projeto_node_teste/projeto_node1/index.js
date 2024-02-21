const express = require("express");
const uuid = require('uuid');

const port = 3000;
const app = express();
app.use(express.json());

/**
 *  - QUery params => meusite.com/users?nome=charles&age=28  // Filtros 
 *     http://localhost:3000/users?nome=charles&age=28
 *  - Route params => /users2/    // buscar, deletar ou atualizar algo específico
 * 
 *      Request Body => {"name":"Charles", "age":28}
 * 
 *      GET            => Buscar informação do back-end
 *      POST           => Criar informação no back end
 *      PUT / PATCH    => alterar / Atualizar informação no back end
 *      DELETE         => deletar informação no backend
 */

const users = [];

app.get('/users', (request, response) => {
    return response.json(users);
})


app.post('/users', (request, response) => {

    const {name, age} = request.body;
    const user = { id:uuid.v4(), name, age }
    users.push(user);

    return response.status(201).json(users);
})


app.put('/users/:id', (request, response) => {
    const { id } = request.params;
    const {name, age} = request.body;

    const updatedUser = { id, name, age }

    const index = users.findIndex( user => user.id === id)

    if(index < 0) {
        return response.status(404).json({ message: "User not found" });
    }
    
    users[index] = updatedUser;
    
    return response.json(users);
})


app.delete('/users/:id', (request, response) => {
    const { id } = request.params;

    const index = users.findIndex( user => user.id === id);

    if( index < 0 ) {
        return response.status(404).json({ message: "User not found "});
    }

    users.splice(index, 1);

    //return response.status(204).json(users);
     return response.json(users);
})


app.listen(port, () => {
    console.log(`🆗 --> Server started on port ${port} <-- 🚀`)
});