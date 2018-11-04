const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer.js');
const color = require('colors');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // Ejemplo de como lanzar la llamada a esta función:
        //  node app actualizar crear -d "Regar las flores" 

        let tarea = porHacer.crear(argv.descripcion);
        console.log('Crear una Tarea por hacer');
        console.log(tarea);
        break;
    case 'listar':
        // Ejemplo de como lanzar la llamada a esta función:
        //  node app listar

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============== Por Hacer ==============.'.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=======================================.'.green);

        }
        break;
    case 'filtrar':
        // Ejemplo de como lanzar la llamada a esta función:
        //  node app filtrar -c true

        let filtrado = porHacer.getFiltrado(argv.completado);
        for (let tarea of filtrado) {
            console.log('============== Por Hacer ==============.'.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=======================================.'.green);

        }
        break;
    case 'actualizar':
        // Ejemplo de como lanzar la llamada a esta función:
        //  node app actualizar -d "Lavar el coche" -c false
        //  node app actualizar -d Comer -c true
        //  node app actualizar --descripcion "Lavar el coche" 
        // en este ultimo caso, fijemonos que al no pasarle -c, actuará el default y completado pasará a true


        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Tarea actualizada: ${actualizado}`);
        break;
    case 'borrar':
        // Ejemplo de como lanzar la llamada a esta función:
        //  node app borrar -d "Lavar el coche"
        //  node app actualizar -descripcion Comer

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Tarea actualizada: ${borrado}`);
        break;
    default:
        console.log('Comando no es reconocido');
}