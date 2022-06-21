# tareas
software de tareas


1. Crear una base de datos en Mysql con el nombre tasksoft
2. cambiar la contraseña en el archivo config.js en la ruta server/src/database/config/config.js  , colocar la contraseña de su base de datos en la linea 4.
3. luego por postman hacer una peticion post a la ruta  http://localhost:3001/api/user/signup  envando un body con lo siguiente: 
   {
      name:"Juan",
      lastName:"restrepo",
      email:"test@gmail.com",
      password:"1234567"
    }
 esto para crear el primer usuario con el que nos vamos a logear.
 
 4. luego abrir el contenido de la carpeta en vs code y abrir la terminar
 5. ingresar a la ruta del server con cd server y ejecutar npm i.
 6. luego ejecutar npm start.
 7. abrir otra termina y dirigirse a la carpeta del cliente con cd client y ejecutar npm i
 8. luego ejecutar npm start en el cliente tambien.
 9. luego ya puedes iniciar sesion con los siguientes datos
      email:"test@gmail.com",
      password:"1234567"
 10. una ves logeado puedes crear tareas y visualizarlas
    
    
