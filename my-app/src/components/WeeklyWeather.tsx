import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import DailyWeather from './DailyWeather'

const styleSheet = (theme: any) => createStyles(({
  daily: {
    justifyContent: "space-between",
    display: "flex",
    marginRight: 32
  }
}))

function WeeklyWeather(props:any) {
  const classes = props.classes;
  const result = props.data
  let days

/* //Remove shift 
  result.shift() */

  days = result.map((day:any) =>
    <DailyWeather data={day} key={day.dt} />
  )

  return (
    <ul className={classes.daily}>
    {days}
    </ul>
  )
}

export default withStyles(styleSheet)(WeeklyWeather);
