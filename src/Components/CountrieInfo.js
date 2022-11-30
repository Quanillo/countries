import axios from 'axios'
import React, { useEffect, useState } from 'react'

const key = process.env.REACT_APP_API_KEY

function CountrieInfo({ countrie }) {

    const [weather, setWeather] = useState({})
    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${countrie.capital}&units=metric&appid=${key}`)
          .then(response => {
            setWeather(response.data)
            console.log(weather)
          });
      }, [countrie.capital]);

      return (
        <div>
            <h2>{countrie.name.official}</h2>
            <img src={countrie.flags.png} alt="bandera" />
            <p>Population: {countrie.population}</p>
            <p>Languages: </p>
            <Languages languages={countrie} />
            <p><b>Capital: </b>{countrie.capital}</p>

            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
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