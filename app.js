const { getDirLatLng } = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion:{
        alias : 'd',
        desc  : 'Obtener clima por nombre de ciudad',
        demand: true
    }
}).argv;

//argv.direccion
/* getDirLatLng(argv.direccion).then( console.log )


clima.getClima(37.78938,-80.99028)
    .then(console.log)
    .catch(console.log); */

const getInfo = async ( direccion ) => {

    
    try {
        const resp = await getDirLatLng(direccion);
        const temperatura = await clima.getClima(resp.lat,resp.long)
        return `La temperatura de ${ resp.ciudad } es de ${temperatura}`;
        
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
    
}


getInfo(argv.direccion).then(console.log)
                        .catch(error => console.log(error));