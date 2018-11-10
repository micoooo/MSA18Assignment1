import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Add';

const styleSheet = createStyles({
  root: {
    width: '100%'
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    
  },
});


function SimpleAppBar(props:any) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
          Weather App
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Add">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styleSheet)(SimpleAppBar);
