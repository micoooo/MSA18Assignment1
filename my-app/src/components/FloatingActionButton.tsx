import * as React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/AddCircle';

const styleSheet = (theme: any) => createStyles(({
  button: {
    margin: theme.spacing.unit,
    marginLeft: "auto",
    display: "block",
  },
}));

function FloatingActionButtons(props: any) {
  const classes = props.classes;
  return (
    <div>
      <Button
        color="primary"
        aria-label="add"
        className={classes.button}>
        <Icon/>
      </Button>
    </div>
  );
}

export default withStyles(styleSheet)(FloatingActionButtons);
