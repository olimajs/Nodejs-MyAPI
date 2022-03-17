
<h1>Node.JS y Express para crear una API</h1>


<h2>API: application programming interface: me permite a través de unos inpoint, recuperar recursos, guardar datos o intercambiar ,etc.</h2>
-	Aqui en este ejercicio voy a crear una API.

Local Host: My own net computer.
Common js es más similar solo cambia la sintaxis un poco e internamente funciona obvio distinto, pero en general y aspect al codear es similar.
(en 2020 node js ya creo y dio soporte a sus modules, pero esta fresco todavía) 
En este ejercicio utilize los common.(en común)

-	Callback: es super utilizable en nodejs. (una función que se ejecuta al dar una petición(click) y el servidor lo notifica. (call = llamada al servidor sobre un evento)
-	

Instalo Nodemon, me sirve para detectar un cambio en un archivo y refrescar el servidor asi puedo trabajar en la app tranquilamente. 
Esto evita tener que salir y cerrar el servidor para cambiar algo y tener que volverlo a levantar al server.
(es recomendable instalarlo una dependencia por cada proyecto y no global)

Framework: expressjs
Express.js es un framework para crear Web Apps, Web APIs o cualquier tipo de Web Services, es libre bajo la licencia MIT.. Express es muy liviano y minimalista además de ser extensible a través de Middlewares. Los Middlewares interceptan el request y el response para ejecutar una acción en medio.
"2.0.15"
- Esto en completo es numero de versión, el ultimo numero significa el patch o parche, cuando se arregla algo o actualiza. Tambien llamado “semantic versioning”.
(super importante verlo para los paquetes) no dejar los carets < son como esto pero para arriba, porque te rompe la compatibilidad a veces.
-	App.listen(seria cuando llame al evento ejecuta el callback)


<h1>Aún sigo desarrollando este proyecto</h1>


--------------------------
ejecutando el server:
![expresserver jpg](https://user-images.githubusercontent.com/84105167/158836547-ffa06639-2487-4544-bcd2-1a330b7893ec.png)
--------------------------
Llamando por id(con express asi ahorro codígo):

![call-notesxid-en-express](https://user-images.githubusercontent.com/84105167/158836668-0d47d630-03ea-4955-a379-ec9c10e512fe.png)

<br>
Añadiendo Delete a nuestra API:

app.delete('/api/notes/:id', (request,response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id != id)
    response.status(204).end()
});



------
![deletealAPI](https://user-images.githubusercontent.com/84105167/158898166-7c9eac82-8e72-4c2c-acda-83ad79126f26.png)




-	Probamos la API con INSOMNIA, postwoman ya no existe cambiaron el nombre a Hoppscotch.
Postman es buena alternativa, pero me gusta Insomnia entonces usamos insomnia.
(Más sencilla que postman, pero tiene la app de desktop si quieres algo más complejo)

------
![Untitled](https://user-images.githubusercontent.com/84105167/158897780-ffc36c2d-dda5-4fea-9dbf-788f9787bb94.png)

<br>
-	Otra opción es en el mismo vsStudio con Rest Client
------


![testapiconvsstudio](https://user-images.githubusercontent.com/84105167/158897786-9aef7208-9bf2-4a57-bf3b-5ef400c63f05.png)
---------------------------------------------------------


<br>
Ahora creamos un recurso en nuestra API con POST:
------


![post api jpg](https://user-images.githubusercontent.com/84105167/158897846-d81bbe58-3f1a-4e3c-911d-c76a01d82a68.png)



