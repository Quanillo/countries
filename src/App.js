import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Countries } from './Components/Countries';
import CountrieInfo from './Components/CountrieInfo';
import { Filter } from './Components/Filter';

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ weather, setWeather ] = useState({})
  const key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }
  
  const isInFilter = countries.filter(function (countrie){
    return countrie.name.official.toUpperCase().includes(filter.toUpperCase())
  })

  const Restult = ({isInFilter}) => {
    if(isInFilter.length===1){
      const countrie = { ...isInFilter[0] }
      return(
      <CountrieInfo countrie={countrie} weather={weather} />
      )
    }
    else{
      return <Countries  isInFilter={isInFilter} />
    }    
  }

  return (
    <div className="App">
        <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
      <div>
        <Restult isInFilter={isInFilter} />
      </div>
    </div>
  );
}

export default App;
