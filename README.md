
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
-----
Llamando por id(con express asi ahorro codígo):

![call-notesxid-en-express](https://user-images.githubusercontent.com/84105167/158836668-0d47d630-03ea-4955-a379-ec9c10e512fe.png)

