const axios = require("axios");

const BASE_URI = 'https://currencyscoop.p.rapidapi.com/';

const options = {
  headers: {
    'X-RapidAPI-Key': 'b354ccd105mshd1d28eafbec4dccp189dedjsn9bb5e24af953',
    'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
  }
};


export const getCurrencyList = async () => {
  const response = await axios.get(`${BASE_URI}currencies`, options)
  return response.data.response.fiats
}

export const getCurrencyConverter = async () => {
  const response = await axios.get(`${BASE_URI}latest`, options)
  return response.data.response
}

export const getHistoricalCurrencyData = async () => {
  const response = await axios.get(`${BASE_URI}historical`, options)
  return response.data.response
}