import axios from 'axios'
import React, { useEffect, useState } from "react";

export const CountrieInfo = ({countrie}) => {
/** 
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        console.log('hola')
        const key = process.env.REACT_APP_API_KEY
        axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${countrie.countrie.capital[0]}`).then((data) => {
        console.log(data);
        setWeather(data?.data);
        });
    }, []);
    <Weather key={weather} weather={weather} />
    */
    return (
        <div>
            <h2>{countrie.name.official}</h2>
            <img src={countrie.flags.png} />
            <p>Population: {countrie.population}</p>
            <p>Languages: </p>
            <Languages languages={countrie}/>
            <p><b>Capital: </b>{countrie.capital}</p>
            
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

const Weather = async (weather) => {
/**
    const key = process.env.REACT_APP_API_KEY
    const weather = axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${countrie.countrie.capital[0]}`)
    .then(response => {
      const apiResponse = response.data;
    }).catch(error => {
      console.log(error);
    });**/
    const time = weather[0];
    return (
        <div>
            <p>Temperature: {time.current.temperature}°C</p>
            <p>Humidity: {time.current.humidity}%</p>
            <p>Wind: {time.current.wind_speed} km/h</p>
            <img src={time.weather_icons[0]}></img>
        </div>
    )
    
}


