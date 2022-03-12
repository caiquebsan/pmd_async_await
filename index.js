require('dotenv').config()

//const API_KEY = process.env.OPEN_WEATHER_KEY
//const PROTOCOL = process.env.PROTOCOL
//const BASE_URL = process.env.BASE_URL

const { OPEN_WEATHER_ID , PROTOCOL , BASE_URL , UNITS , LANGUAGE} = process.env
const axios = require('axios')

const url = `${PROTOCOL}://${BASE_URL}?q=Itu&appid=${OPEN_WEATHER_ID}&lang=${LANGUAGE}&units=${UNITS}`

axios.get(url)
.then(res => console.log(res.data))