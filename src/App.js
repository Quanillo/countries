import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Countries } from './Components/Countries';
import { CountrieInfo} from './Components/CountrieInfo';

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const isInFilter = countries.filter(function (countrie){
    return countrie.name.official.toUpperCase().includes(filter.toUpperCase())
  })
  
  const Restult = ({isInFilter}) => {
    if(isInFilter.length===1){
      const countrie = isInFilter[0];
      return(
      <CountrieInfo countrie={countrie} />
      )
    }
    else{
      return <Countries  isInFilter={isInFilter} />
    }    
    
  }
  
  return (
    <div className="App">
        <input value={filter} onChange={e => setFilter(e.target.value)} />
      <div>
        <Restult isInFilter={isInFilter} />
      </div>
    </div>
  );
}

export default App;