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
  const result = props.data;
  let days

  function onClickHandler(i:any ){
    console.log(i)
    props.onClick(i);
  }

/* //Remove shift 
  result.shift() */

  days = result.map((day:any, i:number) =>
    <DailyWeather data={day} key={day.dt} onClick={onClickHandler} context={props.this} num={i}/>
  )

  return (
    <ul className={classes.daily}>
    {days}
    </ul>
  )
}

export default withStyles(styleSheet)(WeeklyWeather);
