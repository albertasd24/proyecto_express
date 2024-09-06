# Proyecto Express

Este proyecto contiene un arquitectura **monolitica** y con patron de **arquitectura por capas**

```
Capa Presentación: Es la capa con la que el usuario interactua

Capa Negocio: Es la capa que se encarga de procesar la lógica de negocio

Capa Persistencia: Es la capa en que la información se procesa para ser almacenada en la base de datos
```

### Estructura de Directorios de la Aplicación

- **`config/`**: Configuración de la aplicación.
- **`controller/`**: Controladores de la aplicación.
- **`models/`**: Modelos (esquemas) de la base de datos.
- **`public/`**: Recursos estáticos de la aplicación.
- **`routes/`**: Rutas de la aplicación.
- **`services/`**: Servicios que conectan y envían información a la base de datos.
- **`util/`**: Funciones adicionales para funcionalidades pequeñas.
- **`views/`**: Vistas de la aplicación.

## Comandos

Iniciar el contnedor de la base de datos con docker
```
docker compose up --build -d
```

Iniciar la aplicación en modo producción producción
```
npm run start
```

Iniciar la aplicación en modo desarrollo
```
npm run dev
```

### Tecnologías Utilizadas

- **Express**: Framework minimalista para crear servidores web con JavaScript de manera sencilla y eficiente.

- **EJS**: Motor de plantillas que permite incluir lógica en las vistas HTML de la aplicación, facilitando la generación dinámica de contenido.

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor, diseñado para construir aplicaciones rápidas y escalables.

- **MongoDB**: Base de datos NoSQL orientada a documentos, ideal para manejar grandes volúmenes de datos no estructurados.

- **Docker**: Plataforma que permite crear, desplegar y gestionar aplicaciones dentro de contenedores, asegurando la portabilidad y consistencia del entorno de ejecución.
