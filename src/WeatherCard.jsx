import bgImage from './iris-5350990_1920.jpg'
import sunriseImage from './sunrise.png'
import sunsetImage from './sunset.png'
import pressureImage from './pressure.png'
import rainImage from './rain.png'

const WeatherCard = ({ data, setCity }) => {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {

      const cityName = e.target.value
      setCity(cityName)
      
    }
  }
 

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-full w-full text-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-cyan-600 w-[32rem] h-[38rem] rounded-xl shadow-lg'>
        <input type="text" placeholder={data.name} onKeyDown={handleKeyDown}className=' rounded-xl caret-transparent focus:outline-none focus:ring-6 bg-cyan-600 placeholder-stone-900 font-roboto text-center text-[5rem] w-full' />
        {/* <p className="text-[5rem] font-roboto">{data.name}</p> */}
        <p className="text-[7rem] font-roboto">{Math.round(data.main.temp) + '°C'}</p>
        <div className='flex justify-center flex-wrap h-[40%] gap-4 '>
          <div className='bg-stone-600 w-[45%] h-[5rem] rounded-xl flex items-center px-3 bg-cyan-700 font-roboto'> <img src={sunriseImage} alt="sunrise" className='w-14 mr-3' /> <div className='text-2xl ml-6'>{formattedSunriseTime}</div></div>
          <div className='bg-stone-600 w-[45%] h-[5rem] rounded-xl flex items-center px-3 bg-cyan-700 font-roboto'> <img src={sunsetImage} alt="sunrise" className='w-14 mr-3' /> <div className='text-2xl ml-6'>{formattedSunsetTime}</div></div>
          <div className='bg-stone-600 w-[45%] h-[5rem] rounded-xl flex items-center px-3 bg-cyan-700 font-roboto'> <img src={pressureImage} alt="sunrise" className='w-14 mr-3' /> <div className='text-2xl ml-6'>hPa {data.main.pressure}</div></div>
          <div className='bg-stone-600 w-[45%] h-[5rem] rounded-xl flex items-center px-3 bg-cyan-700 font-roboto'> <img src={rainImage} alt="sunrise" className='w-14 mr-3' /> <div className='text-2xl ml-6'>{data.main.humidity}%</div></div>
          
        </div>
      </div>

    </div>
  )
}

export default WeatherCard
