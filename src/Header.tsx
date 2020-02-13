import React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

export default function Header() {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Typography 
            className={classes.title}
            variant="h6" 
            component="h1"
          >
            BRIAN SWEDBERG
          </Typography>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    fontWeight: 'bold',
    fontFamily: 'Fira Code',
    color: theme.palette.text.secondary,
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    paddingTop: theme.spacing(1)
  },
}));
