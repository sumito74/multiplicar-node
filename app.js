// Requireds
const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

//const fs = require('express');
//const fs = require('./xxx');
//const multiplicar = require('./multiplicar/multiplicar');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base)
            //.then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//let base = 'abc';
//console.log(process.argv);

//let argv = process.argv;
//let argv2 = process.argv;

//console.log(process.argv);
//console.log(process.argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1];