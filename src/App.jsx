import { useEffect, useState } from 'react'

import './App.css'
import WeatherCard from './WeatherCard'

function App() {
  const API_KEY = '6ef008d9fe8f262af03c5259d16c1512'

  const [weatherData, setWeatherData] = useState(null)

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

    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude)
      },
      () => {
        console.error('Unable to get user location')
      }
    )
  }, [])

  return (
    <div className="h-screen">
      <WeatherCard data={weatherData} />
    </div>
  )
}

export default App
