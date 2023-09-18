# Biblioteca Virtual

Pequeña api de una Biblioteca Virtual.

## Tecnologias y dependencias utilizadas:

- Node.js - v14.17.3
- Dotenv - v10.0.0
- Express - v4.17.1
- Nodemon - v2.0.12
- Postman para el manejo de endpoints

## Actividad
### Rutas / Acciones

### /autores
- Devolver todos los autores
- Crear un nuevo autor
### /autores/:id
- Devolver el autor con el id indicado
- Eliminar el autor con el id indicado
- Modificar el autor con el id indicado

Validar a través de un middleware que el escritor 
exista en tu array

### /autores/:id/libros
- Devolver todos los libros de un autor
- Agregar un nuevo libro al autor

Utilizar el mismo middleware para verificar que el autor exista

### /autores/:id/libros/:idLibro
- Devolver el libro con el id indicado del autor
- Modificar el libro con el id indicado del autor
- Eliminar el libro con el id indicado del autor

Crear un nuevo middleware para verificar la existencia del 
libro y también que corresponda al autor