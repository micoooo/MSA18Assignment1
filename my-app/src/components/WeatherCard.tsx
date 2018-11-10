import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CurrentWeather from './CurrentWeather'
import WeatherDetails from './WeatherDetails'
import WeeklyWeather from './WeeklyWeather'
import dayContext from './day-context'
import { runInThisContext } from 'vm';

const styleSheet = (theme: any) => createStyles(({
  card: {
    minWidth: 275,
    marginBottom: 16
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap'
  },
}));

function SimpleCard(props: any) {
  function capitalizeFirstLetter(text:any) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const classes = props.classes;
  console.log(props.data);
  if (props.data.cod === '200'){
    const result = props.data;
    const cityName = result.city.name
    const country = result.city.country
    const today = new Date(result.list[0].dt * 1000)
    const now = new Date()
    const dayNum = props.context.state.day;
  

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="display3"   >
              {`${cityName}, ${country}`}
            </Typography>
            <Typography variant="display1"  >
              {`${today.toDateString()}, ${now.toLocaleTimeString()}`}
            </Typography>
                  <Typography variant="display1"  >
                    {capitalizeFirstLetter(result.list[dayNum].weather[0].description)}
                  </Typography>
                  <div className={classes.flex}>
                    <CurrentWeather data={result.list[dayNum]} />
                    <WeatherDetails data={result.list[dayNum]} />
                  </div>
            <div>
              <WeeklyWeather data={result.list} context={props.context}/>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return(
    <div>
      <Card className={classes.card}>
        <CardContent>
            <Typography variant="display3">
              City not found
            </Typography>
        </CardContent>
      </Card>
    </div>)
  }
}

export default withStyles(styleSheet)(SimpleCard);
