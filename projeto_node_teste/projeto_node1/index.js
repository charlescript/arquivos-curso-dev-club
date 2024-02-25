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
 * 
 *      MIDDLEWARE => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição
 */

const users = [];

// Criando middleware para validar ID
const checkUserId = (request, response, next ) => {
    const { id } = request.params;

    const index = users.findIndex( user => user.id === id);
    
    if(index < 0 ){
        return response.status(404).json({ error: "User not found "});
    }

    request.userIndex = index;
    request.userId = id;

    next()
}


app.get('/users', (request, response) => {

    console.log('A rota para requisição de usuários foi chamada')

    return response.json(users);
})



app.post('/users', (request, response) => {

    try {
        const {name, age} = request.body;

        if(age < 18) throw new Error("Only allowed users over 18 years old")  // Se tiver menos de 18 anos, crio um erro

        const user = { id:uuid.v4(), name, age }
        users.push(user);

        return response.status(201).json(users);
    } catch(err){
        return response.status(500).json({error: err.message});
    }
})


app.put('/users/:id', checkUserId, (request, response) => {

    const id = request.userId;
    const {name, age} = request.body;
    const index = request.userIndex;

    const updatedUser = { id, name, age }
    
    users[index] = updatedUser;
    
    return response.json(users);
})


app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1);

    //return response.status(204).json(users);
     return response.json(users);
})


app.listen(port, () => {
    console.log(`🆗 --> Server started on port ${port} <-- 🚀`)
});