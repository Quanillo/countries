import axios from 'axios'
import React, { useEffect, useState } from 'react'
const key = process.env.REACT_APP_API_KEY

function CountrieInfo ({countrie}) {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie.capital}&units=metric&appid=${key}`)
          .then(response => {
            setWeather(response.data)
            console.log(weather)
          });
      }, [countrie.capital]);


      const Result = ({weather}) => {
       if(weather === {}){
        return(
            <div>
                <h2>{countrie.name.official}</h2>
                <img src={countrie.flags.png} alt="bandera"/>
                <p>Population: {countrie.population}</p>
                <p>Languages: </p>
                <Languages languages={countrie}/>
                <p><b>Capital: </b>{countrie.capital}</p>
            </div>
        )
       }
       else{
        return(
            <div>
                <h2>{countrie.name.official}</h2>
                <img src={countrie.flags.png} alt="bandera"/>
                <p>Population: {countrie.population}</p>
                <p>Languages: </p>
                <Languages languages={countrie}/>
                <p><b>Capital: </b>{countrie.capital}</p>
                
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed} km/h</p>
            </div>
        ) 
       }
      }

    return (
        <div>
            <Result weather={weather}/>
        </div>
    )
};

const Languages = (countrie) => {
    return (
        <ul>
            {Object.values(countrie.languages.languages).map((item =>
                <li key={item} >{item}</li>
            ))}
        </ul>
    )
}
 



export default CountrieInfo;

     /**
      *  <Weather weather={weather} />
      * 
      * const Weather = async (weather) => {
    return (
        <div>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
        </div>
    )
}
      * 
      * const response=await Axios('https://jsonplaceholder.typicode.com/comments');
      * 
      * 
      * 
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        console.log('hola')
        const key = process.env.REACT_APP_API_KEY
        axios
          .get(`http://api.weatherstack.com/current?access_key=${key}&query=${countrie.countrie.capital[0]}`)
          .then(response => {
            const arr = [];
            arr.push(response.data)
            setWeather(arr)
          })
    }, [])
    
<Weather key={weather} weather={weather} />


const key = process.env.REACT_APP_API_KEY
    const weather = axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${countrie.countrie.capital[0]}`)
    .then(response => {
      const apiResponse = response.data;
    }).catch(error => {
      console.log(error);
    });

    async function apiWeather (countrie){
        const key = process.env.REACT_APP_API_KEY
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie.countrie.capital[0]}&units=metric&appid=${key}`)
        return response.data;
    }
    const time = await apiWeather(countrie)
    const weather = await time;



    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie.countrie.capital[0]}&units=metric&appid=${key}`)
          .then(response => {
            setWeather(response.data)
          })
      }, [])

 **/
