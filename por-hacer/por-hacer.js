// Instanaciamos la grabación de ficheros (fileSystem o fs)
const fs = require('fs');

// Creamos un arreglo vacío que servirá para ir añadiendo tareas
let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar');
        else
            console.log('Fichero guardado');
    });
}

const cargarDB = () => {
    try {
        // Esto debería cargarnos este fichero en la variable.
        // Además, ya lo serializa directamente del json
        listadoPorHacer = require('../db/data.json');
    } catch (eror) {
        listadoPorHacer = [];
    }

}

// creamos la función crar, pasandole como parametro la descripción de la tarea que crearemos y completado se inicializa a false
const crear = (descripcion) => {
    // Cargamos primero la BD
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    // subimos la tarea al array
    listadoPorHacer.push(porHacer);
    guardarDB();

    // Devolvemos el objeto agregado
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    // Cargamos la BBDD
    cargarDB();
    // Comprobamos que la hemos cargado e imprimimos el total de registros cargados
    let nelements = listadoPorHacer.length;
    console.log(`Numero de elementos totales en BD: ${nelements}`);

    // Buscamos el indice dentro del arreglo de la descripción de la tarea que 
    // coinicide con el parametro que nos pasan para actualizar
    // Esto se hace así y se puede simplificar la función, tal y como vemos más abajo
    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion
    // });
    // Expresión simplificada
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // Si el findIndex, no encuentra el registro, devuelve un -1, entonces si devuelve
    // de 0 a cualquier numero positivo, será el registro que estamos buscando
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    // Cargamos la BBDD
    cargarDB();
    // Comprobamos que la hemos cargado e imprimimos el total de registros cargados
    let nelementsIni = listadoPorHacer.length;

    // Si el findIndex, no encuentra el registro, devuelve un -1, entonces si devuelve
    // de 0 a cualquier numero positivo, será el registro que estamos buscando
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        // Si existe el elemento en el array, filtro el resultado del array, excluyendo a ese elemento 
        // luego guardo el arreglo entero de nuevo en la BD, sin ese registro. Es decir, lo elimino
        let result = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        listadoPorHacer = result;
        guardarDB();
        let nelementsFin = listadoPorHacer.length;
        // También podiamos haber comparado nElementsIni === nElementsFin, para indicar si se ha o no
        // borrado algun elemento de la BD y de esa forma, nos ahorrabamos el findIndex
        console.log(`Numero de elementos Iniciales en BD: ${nelementsIni}, numero elementos finales: ${nelementsFin}`);
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}