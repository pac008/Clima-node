const axios = require('axios');

const getDirLatLng = async ( direccion) => {

const encodeUrl = encodeURI( direccion );



    const params = {
         auth: '111569076650591e15744570x6348',
         locate: encodeUrl,
         json: '1'
    }
  
    const resp = await axios.get('https://geocode.xyz', {params})

   if(resp.error){
    throw new Error (`No Hay resultados para ${direccion}`);
   }
   const ciudad = resp.data.standard.city;
   const long   = resp.data.longt;
   const lat    = resp.data.latt;
  
   return {
       ciudad,
       long,
       lat
   }
}


module.exports = {
    getDirLatLng

}