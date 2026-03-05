MonedBank API

MonedBank API es un backend desarrollado con Node.js y Express que permite gestionar usuarios, transacciones y subastas dentro de una aplicación bancaria simulada. Este proyecto fue creado como parte de un ejercicio académico para practicar desarrollo de APIs REST, autenticación y conexión con bases de datos en la nube.

La API está diseñada para funcionar como el backend de una aplicación móvil desarrollada en Android Studio, permitiendo registrar usuarios, iniciar sesión y manejar operaciones relacionadas con transacciones y subastas.

Tecnologías utilizadas

El proyecto fue desarrollado utilizando Node.js como entorno de ejecución del servidor y Express como framework para la creación de la API. Para la base de datos se utiliza MongoDB alojada en MongoDB Atlas. La autenticación se maneja con JSON Web Token y las contraseñas se encriptan utilizando bcryptjs.

También se utilizan dotenv para manejar variables de entorno y cors para permitir la comunicación entre diferentes dominios.

Estructura del proyecto

El proyecto está organizado en varias carpetas para mantener una estructura clara y fácil de mantener.

La carpeta config contiene la configuración de la base de datos.

La carpeta controllers contiene la lógica de negocio para usuarios, transacciones y subastas.

La carpeta models contiene los modelos de MongoDB definidos con Mongoose.

La carpeta routes contiene las rutas de la API que conectan las solicitudes HTTP con los controladores.

El archivo server.js es el punto de entrada del servidor.

Instalación del proyecto

Para ejecutar el proyecto de forma local primero es necesario clonar el repositorio.

git clone https://github.com/kaparepennn/monedbank-api

Luego ingresar a la carpeta del proyecto.

cd monedbank-api

Instalar las dependencias necesarias.

npm install

Después se debe crear un archivo .env en la raíz del proyecto con las variables necesarias para la conexión con la base de datos.

MONGO_URI=tu_conexion_de_mongodb
JWT_SECRET=clave_secreta

Finalmente se puede iniciar el servidor con el siguiente comando.

node server.js

El servidor se ejecutará por defecto en el puerto 3000.

Endpoints principales

La API cuenta con diferentes endpoints para manejar la información del sistema.

Registro de usuario

POST
/api/users/register

Login de usuario

POST
/api/users/login

Crear una transacción

POST
/api/transactions

Obtener transacciones

GET
/api/transactions

Crear una subasta

POST
/api/auctions

Obtener subastas

GET
/api/auctions

Despliegue

La API está desplegada en la plataforma Render, lo que permite acceder a ella desde aplicaciones externas como clientes web o aplicaciones móviles.

La base de datos está alojada en MongoDB Atlas para permitir acceso seguro desde el servidor desplegado.

Uso con aplicaciones móviles

Esta API fue diseñada para ser consumida desde una aplicación Android desarrollada en Android Studio. Las peticiones se pueden realizar mediante librerías como Retrofit o mediante peticiones HTTP estándar.

Autor

Proyecto desarrollado por Karen Palacios y Cristian rINCÓN como parte de un ejercicio académico de desarrollo backend y consumo de APIs.
