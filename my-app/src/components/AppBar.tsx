import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styleSheet = createStyles({
    root: {
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
});

function SimpleAppBar(props:any) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
          Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styleSheet)(SimpleAppBar);
