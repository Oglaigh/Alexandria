# Alexandria

Alexandria es una pltaforma que te permite compartir tus libros que no querés mas, así como solicitar libros que no tienes.



## PROYECTO WEB
## Abrir la consola en el directorio donde se clonó el repositiorio y utilizar los siguientes comandos.

### `npm start`

Corre la aplicacion en modo desarrollador.<br />
Abrir [http://localhost:3000](http://localhost:3000) para paoder verlo en el navegador.


## SERVIDOR

## Abrir la consola en el directorio src/server 

### `node server`

Corre el servidor en modo desarrollador en el puerto 80 (por default). <br />
en la consola deberán visualizarse las siguientes lineas para conocer si el servidor se encuentra online:

Server running on port: 80<br />
DataBase is connected...<br />


## BASE DE DATOS

La base de datos se encuentra en un cluster de MongoDB Atlas llamado Serapeum<br />

Si bien los strings de conexion se encunetran en la ruta /src/server/config/database.js, a continuacion se detallan las credenciales de la base de datos para poder autenticarse:

USER: alx_admin<br />
PASS: SuperAdmin<br />

str_connection: mongodb+srv://alx_admin:<password>@serapeum-edlmi.mongodb.net/test?retryWrites=true&w=majority
