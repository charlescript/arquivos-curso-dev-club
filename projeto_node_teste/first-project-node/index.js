const express = require("express");
const port = 3000;

const app = express();

/**
 *  - QUery params => meusite.com/users?nome=charles&age=28  // Filtros 
 *      http://localhost:3000/users?nome=charles&age=28
 *  - Route params => /users2/    // buscar, deletar ou atualizar algo específico
 */

app.get('/projects', (request, response) => {
    return response.send('Hello Projects');
});

app.get('/users', (request, response) => {
    // const name = request.query.name;
    // const age = request.query.age;

    const { name, age } = request.query;

    
    return response.json({name: name, age: age});
});

app.get('/matriculas', (request, response) => {
    return response.send('Matriculas abertas');
});


app.listen(port, () => {
    console.log(`🆗 --> Server started on port ${port} <-- 🚀`)
});