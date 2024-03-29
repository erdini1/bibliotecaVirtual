# Biblioteca Virtual

Pequeña api de una Biblioteca Virtual.

## Tecnologias y dependencias utilizadas:

- Node.js - v18.16.1
- Dotenv - v16.3.1
- Express - v4.18.2
- Nodemon - v3.0.1
- Postman para el manejo de endpoints

## Rutas / Acciones

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

## Estado: Terminado