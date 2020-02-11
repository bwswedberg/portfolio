import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme} from "@material-ui/core";

export default function SectionTitle({ title }) {
  const classes = useStyles();
  return (
    <Typography 
      className={classes.title}
      variant="h2"
      component="h2"
    >
      {title}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    color: theme.palette.text.secondary,
    // borderBottom: `2px solid rgba(255,255,255,0.1)`,
    borderTop: '2px solid rgba(255,255,255,0.1)',
    borderRight: '2px solid rgba(255,255,255,0.1)',
    textAlign: 'right',
    paddingRight: theme.spacing(2)
  },
}));
