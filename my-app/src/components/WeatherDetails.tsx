import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styleSheet = createStyles({
    flex: {
        display: 'flex',
    },
    space: {
        marginRight: 8,
    }

});

function WeatherDetails(props:any) {
    const classes = props.classes;
    const result = props.data

    const humidity = Math.round(result.humidity)
    const windSpeed = result.speed
    const windDegree = result.deg
    const cloudiness = Math.round(result.clouds)
    const pressure = Math.round(result.pressure)

    return (
        <div className={classes.root}>
            <div className={classes.flex}>
                <Typography variant="display1" className={classes.space} >
                    Humidity:
        </Typography>
                <Typography variant="display1">
                    {`${humidity}%`}
                </Typography>
            </div>

            <div className={classes.flex}>
                <Typography variant="display1" className={classes.space} >
                    Wind:
        </Typography>
                <Typography variant="display1"  >
                    {`${windSpeed} m/s ${windDegree}°`}
                </Typography>
            </div>

            <div className={classes.flex}>
                <Typography variant="display1" className={classes.space} >
                    Cloudiness:
        </Typography>
                <Typography variant="display1"  >
                    {`${cloudiness} %`}
                </Typography>
            </div>
            <div className={classes.flex}>
                <Typography variant="display1" className={classes.space} >
                    Pressure:
        </Typography>
                <Typography variant="display1"  >
                    {`${pressure} hPa`}
                </Typography>
            </div>


        </div>
    );
}

export default withStyles(styleSheet)(WeatherDetails)
