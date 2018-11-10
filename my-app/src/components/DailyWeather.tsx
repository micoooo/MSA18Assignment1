import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import thunderstorm from '../images/Thunderstorm.png'
import drizzle from '../images/Drizzle.png'
import rain from '../images/Rain.png'
import snow from '../images/Snow.png'
import atmosphere from '../images/Atmosphere.png'
import clear from '../images/Clear.png'
import clouds from '../images/Cloudy.png'
import extreme from '../images/Extreme.png'
import defaultIcon from '../images/Partly-cloudy.png'

const styleSheet = createStyles({

});

function DailyWeather(props: any) {
  const result = props.data
  const date = new Date(result.dt * 1000)
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const weather = result.weather[0].main
  let weatherIcon
  const maxTemp = Math.round(result.temp.max)
  const minTemp = Math.round(result.temp.min)


  switch (weather) {
    case 'Thunderstorm':
      weatherIcon = thunderstorm
      break
    case 'Drizzle':
      weatherIcon = drizzle
      break
    case 'Rain':
      weatherIcon = rain
      break
    case 'Snow':
      weatherIcon = snow
      break
    case 'Atmosphere':
      weatherIcon = atmosphere
      break
    case 'Clear':
      weatherIcon = clear
      break
    case 'Clouds':
      weatherIcon = clouds
      break
    case 'Extreme':
      weatherIcon = extreme
      break
    default:
      weatherIcon = defaultIcon
  }
  
  function Warning(){
    window.alert(5 + 6);
  }

  return (
    <div onClick={Warning} style={{cursor: 'pointer'}}>
      <div>
        <Typography variant="display1">
          {weekday[date.getDay()]}
        </Typography>
        <img src={`${weatherIcon}`} alt="WeatherIcon" height="64" width="64" />
        <Typography variant="subheading" >
          {`${maxTemp}° ${minTemp}°`}
        </Typography>
      </div>
    </div>
  )
}
export default withStyles(styleSheet)(DailyWeather)
