const express = require("express");
const port = 3000;

const app = express();

app.get('/projects', (request, response) => {
    return response.send('Hello Projects');
});

app.get('/users', (request, response) => {
    return response.send('Hello Users');
});

app.get('/matriculas', (request, response) => {
    return response.send('Matriculas abertas');
});


app.listen(port, () => {
    console.log(`🆗 --> Server started on port ${port} <-- 🚀`)
});