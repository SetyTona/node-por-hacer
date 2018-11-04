// Objetos COMÚN a varios metodos para la llamada de parametros
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
}

// La definición de los parametros la tomamos de las definiciones de arriba de cada objeto parametro de la llamada a la función
const argv = require('yargs')
    .command('crear', 'Crear un nuevo elemento por hacer/tarea.', {
        descripcion
    })
    .command('actualizar', 'Cambia el valor completado de un elemento de la BD.', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todos los elementos de la tabla')
    .command('filtrar', 'Lista todos los elementos de la tabla que cumplan con el parametro completado', {
        completado
    })
    .command('borrar', 'Borra un elemento de la tabla', {
        descripcion
    })
    .help()
    .argv;

// publica la funció per fer-la servir en un altre fitxer
module.exports = {
    argv
}