const axios = require('axios');


const getClima = async ( lat, lng) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=131668ed47c3ead35d170bf47f686d88&units=metric`)

    return resp.data.main.temp;
}



module.exports = {
    getClima
}