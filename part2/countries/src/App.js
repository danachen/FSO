import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  // search item setting
  const [searchCountry, setSearchCountry] = useState('')
  // all results
  const [allCountries, setAllCountries] = useState([])
  // display filtered results
  const [displayCountries, setDisplayCountries] = useState([])
  // display one country result
  const [clickCountry, setClickCountry] = useState({})
  // get weather data for country
  const [weatherData, setWeatherData] = useState({})
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
         .then(response => {
           setAllCountries(response.data)
         })
  }, [])

  useEffect(() => {
   const filteredCountries = allCountries.filter(country => {
     return country.name.common.toLowerCase().includes(searchCountry.toLowerCase());
   }) 
   setDisplayCountries(filteredCountries);
  }, [searchCountry, allCountries])

  useEffect(() => {
    console.log(clickCountry);
    // TODO: not able to set the city/country in the search string yet, `setClickCountry(country)` is not yet working
    // Ideally, the country name clicked on or filtered out should be available, and the country.capital should be passed in as the string here
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=Beijing`)
         .then(response => {
          setWeatherData(response.data)
         })
  }, [clickCountry])

  const Render = () => {
    const handleClick = (e) => {
      const countryName = e.target.value
      const filteredCountry = allCountries.filter(country => country.name.common === countryName)[0];
      setClickCountry(filteredCountry);
    }

    if (displayCountries.length > 10) {
      return (
        <p>Too many results</p>
      )
    } else if (displayCountries.length === 1) {
      return (
        <div>
          <h2>{displayCountries[0].name.common}</h2>
          <h2>{displayCountries[0].capital}</h2>
          <p>population: {displayCountries[0].population}</p>
          <h3>languages:</h3>
          {Object.values(displayCountries[0].languages).map(language => {
            return <li key={language}>{language}</li>
          })}
          <p><img alt="coat of arms" src={displayCountries[0].coatOfArms.png} width="200"/></p>
          <h2>Weather in {displayCountries[0].capital}</h2>
          <p><b>temperature</b> {weatherData.current.temperature} Celcius</p>
          {console.log(weatherData.current)}
          <p><img alt="weather icon" src={weatherData.current.weather_icons[0]}/></p>
          <p><b>wind</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
        </div>
      )
    } else {
      return (
        <div>
          {displayCountries.map(country => {
            return <li key={country.name.common}>{country.name.common} <button onClick={(e)=>handleClick(e)} value={country.name.common}>show</button></li> 
          })}
          {Object.keys(clickCountry).length ? 
          <div>
            <h2>{clickCountry.name.common}</h2> 
            <p>population: {clickCountry.population}</p>
            <h3>languages:</h3>
            {Object.values(clickCountry.languages).map(language => {
              return <li key={language}>{language}</li>
            })}
            <p><img alt="coat of arms" src={clickCountry.coatOfArms.png} width="200"/></p>
          </div>
          : <p>{''}</p>}
        </div>
      )
    }
  }

  return (
    <div>
      <p>find countries <input type="text" onChange={(e) => setSearchCountry(e.target.value)}></input></p>
      <Render />
      {console.log(clickCountry)}
    </div>
  )
}

export default App;
