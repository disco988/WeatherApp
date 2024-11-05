import bgImage from './iris-5350990_1920.jpg'

const WeatherCard = ({ data }) => {
  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  const formatTime = timestamp => {
    const time = new Date(timestamp * 1000)
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`
  }
  const formattedSunriseTime = formatTime(data.sys.sunrise)
  const formattedSunsetTime = formatTime(data.sys.sunset)
  console.log(data)

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full w-full text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="">{data.name}</p>
      <p>{Math.round(data.main.temp) + '°C'}</p>
      <p>sunrise: {formattedSunriseTime}</p>
      <p>sunset: {formattedSunsetTime}</p>
      <p>hPa: {data.main.pressure}</p>
    </div>
  )
}

export default WeatherCard
