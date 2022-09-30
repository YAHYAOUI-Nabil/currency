import React, { useEffect } from 'react'
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://currencyscoop.p.rapidapi.com/currencies',
    headers: {
      'X-RapidAPI-Key': 'b354ccd105mshd1d28eafbec4dccp189dedjsn9bb5e24af953',
      'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
    }
  };




const CurrencyList = () => {
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    
  return (
    <div>CurrencyList</div>
  )
}

export default CurrencyList