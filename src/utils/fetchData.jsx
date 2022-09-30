const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://currency-converter5.p.rapidapi.com/currency/list',
  headers: {
    'X-RapidAPI-Key': 'b354ccd105mshd1d28eafbec4dccp189dedjsn9bb5e24af953',
    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
  }
};

const getCurrencyList = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}


export default getCurrencyList