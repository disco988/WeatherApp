import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './WeatherCard'

function App() {
  const API_KEY = '6ef008d9fe8f262af03c5259d16c1512'

  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState("")

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
        if (!response.ok) {
          throw new Error('Unable to fetch the data')
        }

        const data = await response.json()
        setWeatherData(data)
      } catch (err) {
        console.error(err)
      }
    }

    const defaultLocation = { latitude: 52.2297, longitude: 21.0122 }

    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude)
      },
      () => {
        fetchWeatherData(defaultLocation.latitude, defaultLocation.longitude)
      }
    )
  }, [])


  useEffect(()=> {
    const fetchWeatherDataByCity = async (cityName) => {
      
      if(!cityName) return

      try{
        const response = await fetch ( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric` )

        if(!response.ok){
          throw new Error('Unable to fetch the data')
        }

        const data = await response.json()
        setWeatherData(data)
        
      }

      catch(err){
        console.error(err)
      
      }

      
    }

    fetchWeatherDataByCity(city)
    

  },[city])

  return (
    <div className="h-screen">
      <WeatherCard data={weatherData} setCity={setCity} />
    </div>
  )
}

export default App
