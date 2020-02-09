import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme} from "@material-ui/core";
import classnames from 'classnames';

export default function IntroSection({ className }) {
  const classes = useStyles();
  return (
    <section className={classnames(classes.root, className)}>
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
            <Typography 
              className={classes.lead}
              variant="h5" 
              component="p"
            >
              I'm a front-end developer who enjoys building <span className={classes.leadHighlight}>web apps</span>, <span className={classes.leadHighlight}>maps</span>, and <span className={classes.leadHighlight}>data visualizations</span>.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
    paddingTop: theme.spacing(1)
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '35vh',
    color: theme.palette.text.secondary,
    letterSpacing: '0.025em',
    textTransform: 'uppercase'
  },
  lead: {
    // fontSize: 24
    maxWidth: 900,
    color: theme.palette.text.primary,
  },
  leadHighlight: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: '0.15em',
    padding: '0 0.1em',
  },
}));
