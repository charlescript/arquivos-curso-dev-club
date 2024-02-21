const express = require("express");
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

app.get('/projects', (request, response) => {
    return response.send('Hello Projects');
});

app.get('/users/', (request, response) => {
    // const name = request.query.name;
    // const age = request.query.age;
    const { name, age } = request.query;
    return response.json({name: name, age: age});
});


app.get('/users_id/:id', (request, response) => {
    const{ id } = request.params;
    console.log(id);
    return response.json({id});
});


app.get('/user_menseger/', (request, response) => {

    const { name, age } = request.body;
    //console.log(request.body);
    return response.json({ name, age });
})

app.get('/matriculas', (request, response) => {
    return response.send('Matriculas abertas');
});


app.listen(port, () => {
    console.log(`🆗 --> Server started on port ${port} <-- 🚀`)
});