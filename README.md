MonedBank API

MonedBank API es un servicio backend desarrollado con Node.js, Express y MongoDB que permite gestionar usuarios, transacciones y subastas dentro de una plataforma financiera simulada. Este proyecto fue construido como ejercicio práctico de desarrollo backend y arquitectura de APIs REST, integrando autenticación, conexión a base de datos en la nube y despliegue en un servicio de hosting.

La API está diseñada para funcionar como el backend de una aplicación web o móvil, permitiendo registrar usuarios, iniciar sesión, administrar transacciones y manejar procesos de subasta.

El proyecto utiliza MongoDB Atlas como base de datos en la nube y puede desplegarse fácilmente en plataformas como Render.

Tecnologías utilizadas

Node.js como entorno de ejecución para JavaScript en el servidor.

Express como framework para la construcción de la API REST.

MongoDB como base de datos NoSQL.

Mongoose como ODM para modelar los datos.

JWT para autenticación mediante tokens.

bcryptjs para cifrado de contraseñas.

dotenv para gestión de variables de entorno.

cors para permitir conexiones desde aplicaciones externas.

Arquitectura del proyecto

El proyecto sigue una estructura modular para separar responsabilidades dentro del backend.

config contiene la configuración de conexión a la base de datos.

models define los esquemas de MongoDB.

routes contiene las rutas de la API.

controllers gestiona la lógica de negocio.

server.js inicializa el servidor y conecta todos los componentes.

La estructura del proyecto es la siguiente

config
database.js

models
User.js
Transaction.js
Auction.js

routes
userRoutes.js
transactionRoutes.js
auctionRoutes.js

controllers
userController.js
transactionController.js
auctionController.js

server.js
package.json

Instalación del proyecto

Primero clona el repositorio

git clone https://github.com/tuusuario/monedbank-api.git

Luego entra a la carpeta del proyecto

cd monedbank-api

Instala las dependencias

npm install

Configuración de variables de entorno

Debes crear un archivo llamado .env en la raíz del proyecto con las siguientes variables

MONGO_URI=tu_cadena_de_conexion_mongodb
JWT_SECRET=tu_clave_secreta
PORT=3000

La cadena de conexión se obtiene desde MongoDB Atlas al crear el cluster.

Ejecución del servidor

Para iniciar el servidor ejecuta

node server.js

Si todo está configurado correctamente deberías ver un mensaje indicando que el servidor está ejecutándose y que la base de datos está conectada.

Endpoints principales de la API

Usuarios

POST /api/users/register
Permite registrar un nuevo usuario en el sistema.

POST /api/users/login
Permite iniciar sesión y obtener un token de autenticación.

Transacciones

GET /api/transactions
Obtiene todas las transacciones registradas.

POST /api/transactions
Crea una nueva transacción.

Subastas

GET /api/auctions
Obtiene todas las subastas disponibles.

POST /api/auctions
Crea una nueva subasta.

Pruebas de la API

La API puede probarse fácilmente usando herramientas como Postman o Thunder Client.

Ejemplo de URL local

http://localhost:3000/api/users/register

Despliegue

El proyecto puede desplegarse en Render conectando el repositorio de GitHub y configurando las variables de entorno necesarias dentro del panel de configuración del servicio.

Una vez desplegada, la API queda disponible mediante una URL pública que puede ser consumida por aplicaciones web o móviles.

Integración con aplicaciones móviles

Esta API fue diseñada para integrarse fácilmente con aplicaciones Android desarrolladas en Android Studio. Las solicitudes pueden realizarse utilizando bibliotecas como Retrofit o Volley para consumir los endpoints REST.

Autor

Proyecto desarrollado por Karen Palacios como ejercicio de desarrollo backend y consumo de APIs para aplicaciones móviles.
