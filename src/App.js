import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
//import { Filter } from './Components/Filter';
import { Countries } from './Components/Countries';
import { CountrieInfo} from './Components/CountrieInfo';

function App() {
  const [ countries, setCountries ] = useState([])
  //const [ filterList2, setFilterList2 ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  /*
  const handleChangeFilter = (event) => {
    let filter = event.target.value
    setFilter(event.target.value)
  
    const isInFilter = countries.filter(function (countrie){
      return countrie.name.official.toUpperCase().includes(filter.toUpperCase())
    })
    
    setFilterList2(isInFilter)
  }
  **/
  const isInFilter = countries.filter(function (countrie){
    return countrie.name.official.toUpperCase().includes(filter.toUpperCase())
  })
  
  return (
    <div className="App">
        <input value={filter} onChange={e => setFilter(e.target.value)} />
      <div>
        <Restult isInFilter={isInFilter} />
      </div>
    </div>
  );
}

const Restult = ({isInFilter}) => {
  if(isInFilter.length===1){
    const countrie = isInFilter[0];
    return(
    <CountrieInfo countrie={countrie} />
    )
  }
  if (isInFilter > 10){
    return <p>Too many matches, sepecify another filter</p>  
  }
  
  return <Countries  isInFilter={isInFilter} />
}



//<Filter filter={filter} handleChangeFilter={handleChangeFilter}/> 

export default App;