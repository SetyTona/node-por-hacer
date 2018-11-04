## Aplicación de Tareas por Hacer

Esta es una aplicación de ejemplo, que se ejecuta en la consola de node 
con parametros que le pasamos por la misma y que ejecutan distintas funciones

Ayuda:
```
node app --help
app [command]

Commands:
  app crear       Crear un nuevo elemento por hacer/tarea.
  app actualizar  Cambia el valor completado de un elemento de la BD.
  app listar      Lista todos los elementos de la tabla
  app borrar      Borra un elemento de la tabla

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

Ejemplos de llamadas
```
node app listar
node app crear -d "Regar las flores"
node app actualizar -d "Barrer la casa" -c true 
node app borrar -d "Barrer la casa" 
```

Recuerden instalar los paquetes adicionales con:
```
npm install
```
