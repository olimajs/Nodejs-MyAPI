const express = require('express')
const app = express()

let notes = [
    {
        "id": 1,
        "content": "Recuerda porque comenzaste este camino",
        "date": "2020-05-12",
        "important": true
    },
    {
        "id": 2,
        "content": "3 empanadas de choclo, 2 de pollo y 1 de jyq",
        "date": "2020-05-12",
        "important": false
    },
    {
        "id": 3,
        "content": "Tu nunca fallas: ganas o aprendes.",
        "date": "2020-05-12",
        "important": true
    }
]





/*with express way*/
app.get('/', (request, response) => {
    response.send('<h1>Have a nice day</h1>')
});

app.get('/api/notes', (request, response) => {
    response.json(notes)
});

app.get('/api/notes/:id', (request, response) => {  /*con id nos devuelve una note en concreto colocando parametros*/
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    response.json(note)

    if(note) {
        response.json(note)
    /*devolviendo otro status code, sino tiene esa nota u id devolver 404*/
    } else {
        response.status(404).end()
    }
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

