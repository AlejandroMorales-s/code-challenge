# Cursos de Visual Thinking API

Esta API, a partir del archivo **JSON** obtiene:

* Todos los estudiantes con todos sus campos.
* Los emails de todos los estudiantes que tengan certificación.
* Todos los estudiantes que tengan créditos mayores a 500.

Usando **endpoints** específicos para cada requerimiento.

---

## Como ejecutar el proyecto
### Descarga el proyecto en tu computadora
Puedes clonar el proyecto copiando el siguiente código en la terminal:
```
$ git clone https://github.com/AlejandroMorales-s/code-challenge
```
Después, en la carpeta del proyecto copia y pega en la terminal para descargar la carpeta node_modules: 
```
$ npm install
```
### Correr servidor
Copia y pega en la terminal: 
```
$ npm run server
```
Este comando habilitará el servidor para que puedas verlo en la sig url: [localhost:3000](http://localhost:3000)

---

## Endpoints
Este API tiene diferentes endpoints para cada requerimiento, los cuáles son:
* Para obtener la lista de todos los alumnos se usa el endpoint: [localhost:3000/students](http://localhost:3000/students)
* Para obtener el email de los estudiantes que tienen certificación: [localhost:3000/students/emails](http://localhost:3000/students/emails)
* Para obtener la lista de los estudiantes que tengan más de 500 créditos: [localhost:3000/students/credits](http://localhost:3000/students/credits)

---

## Dependencias
Las dependencias usadas en el proyecto son:

* Nodemon
* Jest
* Eslint
* Express

**Nodemon** es una dependencia que ayuda a que, cuando se esté creando y editando un servidor, los cambios sean escuchados por Nodemon y no sea necesario reiniciar el servidor para ver cambios hechos.

**Jest** fué utilizado para crear pruebas de unidad y así, crear un código que pueda ser testeado antes de ser utilizado en la aplicación.

**Eslint** es una dependencia para buscar y corregir errores en el código.

**Express** fué usado para desarrollar el API de la aplicación. 


